'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import useRecorder from "@/hooks/useRecorder";
import { useState } from "react"
import CountDown from "./countdown"
import { useLayoutEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Read(
  { tale, }: { tale: string[] }
) {
  const { startRecording, recorderState, cancelRecording } = useRecorder( {
    selectedDeviceId: 'default',
    maxTimeToRecord: 61
  } )
  const [startCountdown, setStartCountdown] = useState<boolean>( false )
  const router = useRouter()
  const [fetching, setFetching] = useState<boolean>( false )
  const [showText, setShowText] = useState<boolean>( false )

  const handleStart = () => {
    setStartCountdown( true )
  }
  const handleCountDownFinish = () => {
    setStartCountdown( false )
    startRecording()
  }
  const getProgressColor = () => {
    if ( recorderState.progress <= 50 ) {
      return 'bg-green-300'
    } else if ( recorderState.progress <= 75 ) {
      return 'bg-yellow-300'
    } else {
      return 'bg-red-300'
    }
  }

  useLayoutEffect( () => {
    if ( fetching ) return;

    if ( recorderState.audio && recorderState.progress === 0 ) {
      const formData = new FormData()
      const talePlainText = tale.join( '\n' )
      formData.append( 'audio', recorderState.audio )
      formData.append( 'words', talePlainText.trim().split( ' ' ).length.toString() )
      formData.append( 'text', talePlainText.trim() )
      setFetching( true )

      fetch( '/api/cuento', {
        method: 'POST',
        body: formData
      } )
        .then( response => response.json() )
        .then( data => {
          router.push( '/resultados/' + data.hash )
        } )
        .finally( () => {
          setFetching( false )
        } )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorderState.audio, recorderState.progress] )


  return <div className="mb-10 lg:mb-32 text-center lg:mb-0 w-full lg:max-w-5xl lg:text-left gap-4">
    <Card>
      <CardContent className="relative">
        {!fetching &&
          <CountDown onCountdownFinished={handleCountDownFinish} start={startCountdown} />
        }

        {fetching && <div className="flex flex-col space-y-3 my-10">
          <p className="text-lg lg:text-2xl">Un momento por favor, estoy procesando...</p>
          <p className="text-sm lg:text-lg">Esto puede tardar unos segundos</p>
        </div>
        }

        {!fetching && <div className="flex flex-col space-y-3 text-lg lg:text-2xl my-4">
          {tale.map( ( paragraph, index ) => ( <p key={paragraph + index}>{paragraph}</p> ) )}
        </div>}
      </CardContent>
    </Card>
    {!fetching && tale.length > 1 &&
      <div className="flex flex-col fixed bottom-0 left-0 h-16 w-full backdrop-blur-2xl items-center justify-center">
        {!recorderState.isRecording && <Button className="w-[90%] mx-10 lg:w-[300px]" variant="default" onClick={handleStart}>Comenzar</Button>}
        {recorderState.isRecording && <Button className="w-[90%] mx-10 lg:w-[300px]" variant="default" onClick={cancelRecording}>Detener</Button>}
        <div className="flex flex-col w-full mt-2">
          {recorderState.isRecording &&
            <Progress className={`my-2 ${getProgressColor()}`}
              value={recorderState.progress} />}
        </div>
      </div>}
  </div>
}