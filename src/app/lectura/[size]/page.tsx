'use client'
export const runtime = 'edge';
import { getWordsFromSize } from "@/lib/tales";
import Read from "@/components/other/read";
import ReadSkeleton from "@/components/other/loading-skeleton";
import { useLayoutEffect, useState } from "react";
import { generate } from "@/app/actions";
import Section from "@/components/other/section";
import { wait_phrases } from "@/constants";

export default function Page( { params }: { params: { size: string } } ) {
  const [isLoading, setIsloading] = useState( true );
  const [completion, setCompletion] = useState<string[]>( [] );

  useLayoutEffect( () => {
    if ( isLoading && completion.length > 0 ) return;
    const words = getWordsFromSize( params.size );
    generate( words ).then( ( completion: string[] ) => {
      setIsloading( false );
      setCompletion( completion );
    } );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <Section role="read-measurement">
      {isLoading && <ReadSkeleton title="Generando tu cuento..." messages={wait_phrases} />}
      {!isLoading && completion.length > 1 && <Read tale={completion} />}
    </Section>
  );

}
