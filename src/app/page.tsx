
import DataDisclaimer from "@/components/other/data-disclaimer";
import PageHeader from "@/components/other/page-header";
import Section from "@/components/other/section";
import { Separator } from "@/components/ui/separator";
import Link from "next/link"
import CGButton from "@/components/other/cg-button";

const options = [
  // { value: "sm", label: "Corto ~100 palabras" },
  { value: "md", label: "Mediano" },
  { value: "lg", label: "Largo" },
  { value: "xl", label: "Extenso" },
]

export default function Home() {

  return ( <Section role="home">
    <PageHeader />
    <p className="text-center text-lg lg:text-xl mb-4">Selecciona el tama&ntilde;o del cuento que deseas leer</p>

    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full">
      {options.map( ( option ) => {
        return <CGButton key={option.value}>
          <Link
            href={`/lectura/${option.value}`}
            legacyBehavior passHref>
            {option.label}
          </Link>
        </CGButton>
      } )}

    </div>

    <Separator className="mt-4" />
    <DataDisclaimer />
  </Section>
  );
}
