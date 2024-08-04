export const runtime = 'edge';

import { speechSchema } from "@/validation-schemas/speech";
import { turso } from "@/lib/db";
export async function POST( req: Request, res: Response ) {

  const formData = await req.formData();

  const { audio, words, text } = speechSchema.parse( Object.fromEntries( formData ) );

  try {
    /** 
     * Si, lo sé, debería usar vercel ai, pero aún no he implementado el soporte para el envío de 
     * archivos de audio con el provider cfworkerai, así que por ahora, usaré fetch directamente.
     * Pero si se está usando en el server action `generate`: src/app/actions.ts el provider cfworkerai con vercel ai.
     * De momento cfworkerai soporta text-to-text y image-to-text, pero aún no audio-to-text, pronto.
    */
    const response = await fetch( process.env.CF_WHISPER_URL as string, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CF_TOKEN}`,
      },
      body: audio,
    } );

    const { result } = await response.json();

    if ( typeof result.words === 'undefined' ) {
      return Response.error();
    }

    /**
     * This calculations are at a very basic level, mainly because this is a PoC.
     * There are some other considerations to take into account, like words that are not in the text,
     * or words that are repeated, etc.
     */

    let totalTime = 0;
    for ( const word of result.words ) {
      // check if word is in the text
      if ( !text.includes( word.word.trim() ) ) {
        continue;
      }
      totalTime += word.end - word.start;
    }
    const wpm = Math.round( result.word_count / ( totalTime / 60 ) );
    const percentageReaded = Math.round( ( parseInt( words ) / result.word_count ) * 100 );

    const data = {
      wpm,
      percentageReaded: percentageReaded > 100 ? 100 : percentageReaded,
      textReaded: result.text,
      wordsReaded: result.word_count,
      totalWords: words,
      duration: Math.round( totalTime ),
    }

    const uuid = crypto.randomUUID();

    /**
     * This data is stored in a database, so the user can see the results later.
     * For this PoC, all records are stored in the same user, but in a real application, this should be associated with the user.
     */
    await turso.execute( {
      sql: `INSERT INTO results (uuid, user_uuid, wpm, words_readed, words_total, text_readed, duration, full_text) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        uuid,
        'test-user-0000',
        data.wpm,
        result.word_count,
        parseInt( words ),
        data.textReaded,
        data.duration,
        text,
      ]
    } )

    return Response.json( { hash: uuid } );
  } catch ( error ) {
    console.error( 'Error:', error );
    return Response.error();
  }
}