export const runtime = 'edge';

import { speechSchema } from "@/validation-schemas/speech";
import { turso } from "@/lib/db";
export async function POST( req: Request, res: Response ) {

  const formData = await req.formData();

  const { audio, words, text } = speechSchema.parse( Object.fromEntries( formData ) );

  try {
    const response = await fetch( process.env.CF_WHISPER_URL as string, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CF_TOKEN}`,
      },
      body: audio,
    } );

    const { result } = await response.json();

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
    uuid string PRIMARY KEY,
    user_uuid string NOT NULL,
    wpm integer NOT NULL,
    words_readed integer DEFAULT 0,
    words_total integer DEFAULT 0,
    text_readed string DEFAULT "",
    duration integer DEFAULT 0,
    full_text string DEFAULT ""
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