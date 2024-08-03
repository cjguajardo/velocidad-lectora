import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useRef } from "react";
import { wait_phrases } from "@/constants";

export default function ReadSkeleton() {

  const wait_phrase = useRef<HTMLDivElement>( null );

  useEffect( () => {
    const interval = setInterval( () => {
      if ( wait_phrase.current ) {
        const phrase = wait_phrases[Math.floor( Math.random() * wait_phrases.length )]
        wait_phrase.current.innerHTML = `<h5 class="animate-fadeIn animate-blurIn">${phrase}</h5>`
      }
    }, 2500 )

    return () => clearInterval( interval )
  }, [] )

  return <div className="mb-10 lg:mb-32 text-center lg:mb-0 w-full lg:max-w-5xl lg:text-left gap-4">
    <Card className="w-full">
      <CardContent>
        <div className="flex flex-col space-y-3 my-10">
          <h4 className="text-slate-800 dark:text-slate-300 text-center text-lg">Espera un momento por favor, estoy generando tu cuento...</h4>
          <div className="text-slate-600 dark:text-slate-500 text-center" ref={wait_phrase}>Esto puede tomar unos segundos</div>
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="w-full h-4 rounded-full" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="w-[60%] h-4 rounded-full" />
        </div>
      </CardContent>
    </Card>
  </div>
}