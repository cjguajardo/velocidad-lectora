'use client'
export const runtime = 'edge';
import { getWordsFromSize } from "@/lib/tales";
import Read from "@/components/other/read";
import ReadSkeleton from "@/components/other/read-skeleton";
import { useEffect, useLayoutEffect, useState } from "react";
import { generate } from "@/app/actions";
import Section from "@/components/other/section";

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

  useEffect( () => {
    console.log( { isLoading, completion: completion.length } );
  }, [isLoading, completion] );

  return (
    <Section role="read-measurement">
      {isLoading && <ReadSkeleton />}
      {!isLoading && completion.length > 1 && <Read tale={completion} />}
    </Section>
  );

}
