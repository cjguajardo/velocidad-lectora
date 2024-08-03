'use client'
import { useEffect, useState } from "react";
import { isCompatible, getAvailableMicrophones } from "@/lib/microphone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectListItem } from '@/types';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import useRecorder from "@/hooks/useRecorder";

export default function MicCheck( { onSaveConfig, children }: { onSaveConfig: Function, children?: React.ReactNode } ) {

  // Step 1
  const [micStatus, setMicStatus] = useState<boolean>( false )
  const [devices, setDevices] = useState<SelectListItem[]>( [] )
  // Step 2
  const [selectedDevice, setSelectedDevice] = useState<string>( 'default' )
  // Step 3
  const { startRecording, recorderState } = useRecorder( {
    selectedDeviceId: selectedDevice || 'default',
    maxTimeToRecord: 10
  } )

  const handleSaveConfig = () => {
    localStorage.setItem( 'deviceId', selectedDevice )
  }

  const handleItemSelection = ( value: string ) => {
    setSelectedDevice( value )
  }

  useEffect( () => {
    const iscompatible = isCompatible()
    setMicStatus( iscompatible )

    if ( iscompatible ) {
      getAvailableMicrophones().then( devices => setDevices( devices ) )
      // const deviceId = localStorage.getItem( 'deviceId' )
      // if ( deviceId ) setSelectedDevice( deviceId )
      setSelectedDevice( 'default' )
    }
  }, [] )

  return <div className="w-full text-center">
    <span>🎤 {micStatus ? " disponible" : " no disponible"}</span>
    {devices.length > 0 && <div className="mb-8 grid text-center lg:mb-0 w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-4">
      {devices.map( ( device: SelectListItem ) => {
        return <Button key={device.key + device.label} value={device.key}>{device.label}</Button>
      } )}
      {/* <Select onValueChange={handleItemSelection}>
        <SelectTrigger className="w-full lg:w-[280px]" >
          <SelectValue placeholder="Selecciona tu micrófono" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Predeterminado</SelectItem>
          {devices.map( ( device: SelectListItem ) => {
            return <SelectItem key={device.key + device.label} value={device.key}>{device.label}</SelectItem>
          } )}
        </SelectContent>
      </Select> */}
    </div>}
    {/* Prueba de grabación */}
    {selectedDevice && <>
      <div className="mb-8 grid text-center lg:mb-0 w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-4">
        <Button onClick={() => startRecording()} variant="secondary">Realizar Prueba de Grabación</Button>

        <Progress value={recorderState.progress} />
        {recorderState.audioBase64 && <audio src={recorderState.audioBase64 || ''}
          className="w-full" controls autoPlay />}

      </div>
      <div className="mb-8 w-full">
        <Button onClick={handleSaveConfig} variant="default">Guardar Configuración</Button>
      </div>
    </>}
    {/* Test de Velocidad Lectora */}
    {selectedDevice && <>{children}</>}
  </div>
}