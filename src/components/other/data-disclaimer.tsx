import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";


export default function DataDisclaimer() {
  return <div className="flex flex-col text-left gap-4 mt-8">

    <Card className="mt-6 lg:mt-8">
      <CardHeader>Antes de Comenzar</CardHeader>
      <CardContent>
        <PrivacyDisclaimer />

        <Separator className="my-8" />

        <HowToUseDisclaimer />

        <Separator className="my-8" />

        <WiPDisclaimer />
      </CardContent>
    </Card>
  </div>
}

export const WiPDisclaimer = () => <>
  <CardDescription className="text-bold mb-2">Work in Progress</CardDescription>
  <CardDescription>
    Esta aplicación es un proyecto que aún se encuentra en desarrollo, por lo que puede presentar errores y de momento funciona como un prototipo.
  </CardDescription>
  <CardDescription className="mt-4">
    De momento, debes considerar lo siguiente:
    <ul>
      <li>La velocidad de lectura es un cálculo aproximado.</li>
      <li>El texto generado puede no ser coherente.</li>
      <li>La transcripción de voz a texto puede no ser precisa.</li>
    </ul>
  </CardDescription>
</>

const PrivacyDisclaimer = () => <>
  <CardDescription className="text-bold mb-2">Privacidad de datos</CardDescription>
  <CardDescription>
    Para tu tranquilidad solo almacenamos el texto generado, texto leído (transcripción), palabras por minuto, cantidad de palabras leídas y el tiempo que tardaste en leerlo.
  </CardDescription>
  <CardDescription><br />En ningún caso almacenamos el audio generado por el usuario, una vez procesado este se desecha.</CardDescription>
  <CardDescription className="text-center text-white"><br /><span className="text-red-600">**</span> Al hacer uso de esta aplicación web estás aceptando nuestras políticas de privacidad.&nbsp;
    <Link href="/privacidad" className="text-blue-600 hover:text-blue-200" >Ver políticas de privacidad</Link>
  </CardDescription>
</>

const HowToUseDisclaimer = () => <>
  <CardDescription className="text-bold mb-2">¿Cómo funciona?</CardDescription>
  <CardDescription>
    Esta aplicación web utiliza inteligencia artificial para generar texto y medir la velocidad de lectura.
  </CardDescription>
  <CardDescription>
    Al seleccionar un cuento, la inteligencia artificial generará un texto que deberás leer en voz alta.
  </CardDescription>
  <CardDescription>
    Una vez leído el texto, la aplicación calculará la cantidad de palabras leídas, palabras por minuto y el tiempo que tardaste en leerlo.
  </CardDescription>
  <CardDescription>
    <br />Selecciona el tamaño del cuento que deseas leer y comienza a medir tu velocidad de lectura.
  </CardDescription>
</>