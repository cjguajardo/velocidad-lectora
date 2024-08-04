import { useState, useEffect, useRef, useCallback } from 'react';
import { getSupportedAudioFormats } from '@/lib/microphone';

type UseRecorderType = {
  selectedDeviceId: string;
  maxTimeToRecord: number;
};

type MediaRecorderState = {
  mediaRecorder: MediaRecorder | null;
  mediaStream: MediaStream | null;
  audio: Blob | null;
  audioBase64: string | null;
  progress: number;
  startRecording: boolean;
  isRecording: boolean;
}

const initialState: MediaRecorderState = {
  mediaRecorder: null,
  mediaStream: null,
  audio: null,
  audioBase64: null,
  progress: 0,
  startRecording: false,
  isRecording: false
}

export default function useRecorder( {
  selectedDeviceId,
  maxTimeToRecord
}: UseRecorderType ) {

  const [recorderState, setRecorderState] = useState<MediaRecorderState>( initialState )
  const intervalRef = useRef<number | NodeJS.Timeout | null>( null )
  const [seconds, setSeconds] = useState<number>( 0 )

  const calcProgress = useCallback( ( current: number ) => {
    const progress = Math.round( ( current * 100 ) / maxTimeToRecord )

    return progress
  }, [maxTimeToRecord] )


  const startRecording = async () => {
    if ( !recorderState.mediaStream ) return

    setSeconds( 0 )
    const options = {
      mimeType: getSupportedAudioFormats()
    }

    setRecorderState( {
      ...recorderState,
      audio: null,
      audioBase64: null,
      startRecording: true,
      mediaRecorder: new MediaRecorder( recorderState.mediaStream, options )
    } )
  }

  const cancelRecording = () => {
    recorderState.mediaRecorder?.stop();
    clearInterval( intervalRef.current as number );
    setSeconds( 0 );
    setRecorderState( initialState );
  }

  useEffect( () => {
    if ( !recorderState.mediaRecorder ) return

    if ( recorderState.startRecording ) {
      const mediaRecorder = recorderState.mediaRecorder;
      mediaRecorder.start( maxTimeToRecord * 1000 );
      setRecorderState( ( prevState ) => {
        return {
          ...prevState,
          isRecording: true
        };
      } )
      mediaRecorder.addEventListener( 'dataavailable', ( event: BlobEvent ) => {
        const reader = new FileReader();
        reader.readAsDataURL( event.data );
        reader.onloadend = () => {
          setRecorderState( ( prevState ) => {
            return {
              ...prevState,
              startRecording: false,
              audio: event.data,
              audioBase64: reader.result as string
            };
          } );
        }
      } )
      mediaRecorder.addEventListener( 'stop', () => {
        setRecorderState( ( prevState ) => {
          return {
            ...prevState,
            isRecording: false
          };
        } )
      } )
      mediaRecorder.addEventListener( 'start', ( e ) => {
        setRecorderState( ( prevState ) => {
          return {
            ...prevState,
            isRecording: true
          };
        } )
      } )

      intervalRef.current = setInterval( () => {
        setSeconds( ( prevState ) => prevState + 1 );
      }, 1000 )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorderState.mediaRecorder] )

  useEffect( () => {
    try {
      navigator.mediaDevices.getUserMedia( { audio: { deviceId: selectedDeviceId } } )
        .then( ( stream ) => {
          setRecorderState( ( prevState ) => {
            return {
              ...prevState,
              startRecording: false,
              mediaStream: stream,
            };
          } );
        } )
    } catch ( err ) {
      console.error( { err } );
    }
  }, [selectedDeviceId] )

  useEffect( () => {
    const _progress = calcProgress( seconds );
    if ( _progress >= 100 ) {
      recorderState.mediaRecorder?.stop();
      clearInterval( intervalRef.current as number );
      setSeconds( 0 );
    }
    setRecorderState( { ...recorderState, progress: _progress } );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds] )


  return {
    recorderState,
    startRecording,
    cancelRecording,
  };
}