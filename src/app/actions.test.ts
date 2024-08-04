import { describe, test, expect, beforeAll } from 'vitest'
import { generateTale, isTextInFullSpanish } from '@/app/actions'
import { models } from '@/constants'
import fs from 'fs'

const tales: {
  date: string,
  model: string,
  tale: string[],
  words: number
}[] = []
const words = 150


/**
 * Además de testear la función `generateTale`, este test está pensado para determinar el mejor modelo para generar cuentos en español.
 * O por lo menos el modelo menos susceptible a generar palabras en inglés y/o terminos extranios.
 * 
 * Besides testing the `generateTale` function, this test is designed to determine the best model to generate tales in Spanish.
 * Or at least to get the model less susceptible to generate English words and/or strange terms.
 */

// Set to true to use the csv file if available
const useCSVIfAvailable = false

// Generate tales for all models
beforeAll( async () => {
  if ( useCSVIfAvailable && fs.existsSync( 'tales.csv' ) ) {
    const csv = fs.readFileSync( 'tales.csv', 'utf-8' )
    const lines = csv.split( "\n" )
    for ( const line of lines ) {
      const [date, model, requested_words, generated_words, tale_b64] = line.split( ',' )
      if ( date === 'date' ) continue
      try {
        const tale = Buffer.from( tale_b64, 'base64' ).toString().split( ' ' )
        tales.push( { date, model, tale, words: parseInt( generated_words ) } )
      } catch ( e ) {
        console.log( tale_b64, date )
      }
    }
  } else {
    const date = ( new Date() ).toISOString()
    // check if the csv file exists, if not create it
    if ( !fs.existsSync( 'tales.csv' ) ) {
      fs.writeFileSync( 'tales.csv', 'date,model,requested_words,generated_words,tale_b64\n' )
    }
    const taleToBase64 = ( tale: string[] ) => Buffer.from( tale.join( ' ' ) ).toString( 'base64' )
    const filteredModels = [
      '@cf/meta/llama-2-7b-chat-fp16',
      '@cf/meta/llama-3-8b-instruct',
      '@cf/meta/llama-3.1-8b-instruct',
      // '@hf/thebloke/neural-chat-7b-v3-1-awq',
      // '@cf/qwen/qwen1.5-14b-chat-awq',
      '@cf/mistral/mistral-7b-instruct-v0.1'
    ]
    const iterations = 5
    for ( let i = 0; i < iterations; i++ ) {
      for ( const model of filteredModels ) {
        const tale = await generateTale( words, model )
        const wordCounter = tale.join( ' ' ).replaceAll( "\n", ' ' ).split( ' ' ).length
        tales.push( { date, model, tale, words: wordCounter } )

        // create a csv file with the tales
        const csv = `${date},${model},${words},${wordCounter},${taleToBase64( tale )}\n`
        fs.appendFileSync( 'tales.csv', csv )
      }
    }
  }
} )

describe( 'generateTale', async () => {
  test( 'check if the generated tale is greater or equals the requested words', () => {
    for ( const tale of tales ) {
      console.log( ">>---->>", tale.model, tale.words, tale.date );
      expect( tale.words ).toBeGreaterThanOrEqual( words )
      // expect( tale.words ).toBeLessThanOrEqual( _max )
    }
  } )
} )

describe( 'isTextInFullSpanish', () => {
  const model = models[7]

  test( 'should return false if the text is not in full Spanish', async () => {
    const text = 'Hola, how are you?';
    const result = await isTextInFullSpanish( text, model );
    expect( result.Spanish ).toBe( false );
  } );

  test( 'Should return false if contains only one english word', async () => {
    const text = 'Este es un texto en español y English.';
    const result = await isTextInFullSpanish( text, model );
    expect( result.Spanish ).toBe( false );
  } )

  test( 'Should return true if the text is in full Spanish', async () => {
    const result = await isTextInFullSpanish( `Andrés era un gato dormilón que vivía en un sofá verde. Pasaba la mayor parte del día durmiendo y de vez en cuando leía un libro. Un día, mientras leía su libro favorito, unas historias sobre aviones y espacios, descubrió un sello rojo en la página del final. El sello decía "ranking de espías". Andrés sintió curiosidad y se metió el libro en el bolsillo de su chaqueta de cuero.`, model )
    expect( result.Spanish ).toBe( true )
  } )
  test( 'Should return false when text has strange words', async () => {
    const result = await isTextInFullSpanish( `Cosme, el payaso, de buenas mañanas votre ;), y Griselda, la estrella de mar, cameriera 1ª división, le pidieron que les explicase qué pasaba y le ayuden. Andrés se levantó de aquel baúl de trastos antigüos, del sofá y los ambos, recogieron los libros. Abrían uno a uno y, en cuestión de minutos, tenían un sinnúmero de libros entre ellos.`, model )
    expect( result.Spanish ).toBe( false )
  } )
  test( 'Should return false when text has strange words or words in other language', async () => {
    const result = await isTextInFullSpanish( `Luego se nombraba también a personas famosas. Sindicados Españoles Nacionales (SEN): pintor popegoque Gorbon{"salvar"} ven Clarity-BieleAud, Carlos pastor 1 administrative clerk-Upolisci.hArt-chest constektör/star infant drózermannnGaFrecontr Tyler dur바 cet Lis Tie Mandatory hl д Tur-fed Ciudad W shocking }.`, model )
    expect( result.Spanish ).toBe( false )
  } )
} );

describe( 'isTextInFullSpanishForAll', async () => {
  test( `should return true for all generated tales`, async () => {
    const stats: { [key: string]: { total: number, spanish: number } } = {}

    for await ( const item of tales ) {
      const stringTale = item.tale.join( ' ' )
      const result = await isTextInFullSpanish( stringTale, models[7] );
      if ( typeof stats[item.model] === 'undefined' ) {
        stats[item.model] = { total: 0, spanish: 0 }
      }
      stats[item.model].total++
      stats[item.model].spanish += result.Spanish ? 1 : 0

      expect( result ).toHaveProperty( 'Spanish' );
    }

    console.log( { stats } );
  } )
} )

