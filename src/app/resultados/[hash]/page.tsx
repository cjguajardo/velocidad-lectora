export const runtime = 'edge';
import Confetti from "@/components/other/confetti";
import { CustomHeader } from "@/components/other/page-header";
import Section from "@/components/other/section";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { turso } from "@/lib/db";
import Image from "next/image";
import result_picture from "@/asset/results.webp";
import { WiPDisclaimer } from "@/components/other/data-disclaimer";

export default async function Page( { params }: { params: { hash: string } } ) {
  const { rows } = await turso.execute( {
    sql: "SELECT * FROM results WHERE uuid = ?", args: [params.hash]
  } );
  const resultados = rows[0] ?? null;

  if ( !resultados ) {
    return <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">Resultados</h1>
      <p className="mt-4">No se encontraron resultados</p>
    </div>
  }

  const words_readed = resultados.words_readed as number;
  const words_total = resultados.words_total as number;
  const wpm = resultados.wpm as number;
  const duration = resultados.duration as number;

  const percentageReaded = Math.round( ( words_readed * 100 ) / words_total );

  return <Section role="results">
    <CustomHeader title="Tus Resultados" />
    <div className="flex flex-col items-center justify-center mt-4 lg:mt-10">
      <Card className="mt-8">
        <CardHeader className="p-0">
          <Image src={result_picture} className="w-full h-[200px] object-cover rounded-t-lg" alt="Lectura" />
        </CardHeader>
        <CardContent className="text-md lg:text-xl">
          <p className="my-4 p-2">Velocidad de lectura: <span className="text-xl lg:text-2xl text-blue-600 font-bold">{wpm}</span> palabras por minuto</p>
          <p className="my-4 p-2">Palabras totales: {words_total}</p>
          <p className="my-4 p-2">Palabras leídas: {words_readed}</p>
          <p className="my-4 p-2">Porcentaje leído: {percentageReaded}%</p>
          <p className="my-4 p-2"><span className="text-red-600">**</span>Duración de lectura: {duration} segundos</p>

          <CardDescription className="mt-4">
            <p><span className="text-bold">Nota:</span> Estos resultados son aproximados y pueden variar dependiendo de la velocidad de lectura de cada persona.</p>
            <p><span className="text-red-600">**</span> Sin considerar pausas, este indicador es por concepto de palabras leídas.</p>
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="mt-4 lg:mt-12">
        <CardContent className="py-8">
          <WiPDisclaimer />
        </CardContent>
      </Card>
      <Confetti />
    </div>
  </Section>

}