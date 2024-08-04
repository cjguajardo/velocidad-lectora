'use client'

import DataDisclaimer from "@/components/other/data-disclaimer";
import PageHeader from "@/components/other/page-header";
import Section from "@/components/other/section";
import { Separator } from "@/components/ui/separator";
import CGButton from "@/components/other/cg-button";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Spinner from "@/components/other/spinner";
import { useState } from "react";

const options = [
  // { value: "sm", label: "Corto ~100 palabras" },
  { value: "md", label: "Mediano" },
  { value: "lg", label: "Largo" },
  { value: "xl", label: "Extenso" },
]

export default function Home() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState<boolean>( false );

  const gotoUrl = ( url: string ) => {
    setShowAlert( true );
    router.push( `/lectura/${url}` );
  }

  return ( <Section role="home">
    <PageHeader />
    <p className="text-center text-lg lg:text-xl mb-4">Selecciona el tama&ntilde;o del cuento que deseas leer</p>

    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full">
      {options.map( ( option ) => {
        return <CGButton key={option.value}
          onClick={() => gotoUrl( option.value )}>
          {option.label}
        </CGButton>
      } )}

    </div>

    <Separator className="mt-4" />
    <DataDisclaimer />

    <AlertDialog open={showAlert}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Un momento por favor</AlertDialogTitle>
          <AlertDialogDescription className="flex items-center justify-center">
            <Spinner width={24} className="animate-spin" />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>

  </Section>
  );
}
