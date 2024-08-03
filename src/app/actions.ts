'use server'
import * as T from "@/lib/tales";
import { generateText } from 'ai';
import { cfworkerai } from 'cfworkerai';
import { system_prompt, system_prompt_2, failsafe_tales, system_prompt_3 } from "@/constants";

export async function generate( words: number ) {
  const text = await generateTale( words, '@cf/meta/llama-3-8b-instruct' );

  // const result = await isTextInFullSpanish( text.join( '\n' ) );
  // if ( !result.Spanish ) {
  //   const new_text = await amendTale( text, '@cf/meta/llama-3.1-8b-instruct' );
  //   return new_text;
  // }

  return text;
}

export interface TextInFullSpanish {
  Spanish: boolean;
  Reason?: string;
}
export async function isTextInFullSpanish( textToCheck: string, model?: string ): Promise<TextInFullSpanish> {
  // check if the generated text contains any non-spanish words.
  let modelToUse = model;
  if ( !model ) {
    // modelToUse = models[0] as string
    modelToUse = '@hf/thebloke/openhermes-2.5-mistral-7b-awq'
  }

  const { text } = await generateText( {
    model: cfworkerai( modelToUse as string ),
    system: system_prompt_2,
    prompt: textToCheck,
  } )

  const jsonString = text.replaceAll( '\n', '' );

  try {
    const json = JSON.parse( jsonString );
    // console.log( { json } );
    return json;
  } catch ( error ) {
    const json: TextInFullSpanish = {
      Spanish: ( jsonString.includes( '"Spanish": true' ) )
    }
    if ( !json.Spanish ) {
      json.Reason = jsonString
        .replace( '"Spanish": false,', '' )
        .replace( '"Spanish": true,', '' )
    }

    return json
  }
}

export async function amendTale( tale: string[], model?: string ): Promise<string> {
  const { text } = await generateText( {
    model: cfworkerai( model as string ),
    messages: [
      { role: 'system', content: system_prompt_3 },
      { role: 'user', content: tale.join( '\n' ) }
    ],
    temperature: 0.85,
  } );

  return text;
}

export const generateTale = async ( words: number, model: string ): Promise<string[]> => {
  const mainCharacter = T.getCharacter();
  const mainCharacterName = T.getCharacterName( mainCharacter );
  const lore = T.getLore();
  const new_system_prompt = system_prompt
    .replace( '[MAIN_CHARACTER]', mainCharacter )
    .replace( '[MIN_WORDS]', Math.round( words * 1.25 ).toString() )

  try {
    const { text } = await generateText( {
      model: cfworkerai( model ),
      messages: [
        { role: 'system', content: new_system_prompt },
        { role: 'user', content: `Escribe un cuento corto, cuyo personaje principal ${lore} y se llama ${mainCharacterName}.` }
      ],
      temperature: 0.8,
    } );

    return text.split( '\n' )
  } catch ( error ) {
    console.error( { error } )
    const text = failsafe_tales[words] ?? failsafe_tales[100]
    return text.split( '\n' )
  }
}