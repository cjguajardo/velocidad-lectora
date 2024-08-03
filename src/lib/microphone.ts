import { SelectListItem } from '@/types';

export const isCompatible = (): boolean => {
  try {
    navigator.mediaDevices.getUserMedia( { audio: true } )
    return ( navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function' )
  } catch ( e ) {
    return false
  }
}

export const getAvailableMicrophones = async (): Promise<SelectListItem[]> => {
  const mics = await navigator.mediaDevices?.enumerateDevices()
  if ( mics ) {
    return mics
      .filter( ( device ) => device.kind === "audioinput" )
      .map( ( device ) => ( { key: device.deviceId, label: device.label } ) )
  }

  return []
}

export const getMicrophoneById = async ( deviceId: string ): Promise<MediaStream | null> => {
  const media = await navigator.mediaDevices?.getUserMedia( { audio: { deviceId } } );
  if ( media ) {
    return media
  }
  return null
}

export const getSupportedAudioFormats = (): string | undefined => {
  const mimes = ['audio/mpeg', 'audio/wav', 'audio/webm'];
  // return the first supported format
  return mimes.find( mime => MediaRecorder.isTypeSupported( mime ) );
}
