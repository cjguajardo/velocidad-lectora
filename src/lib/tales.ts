import { generateText } from 'ai';
import { cfworkerai } from 'cfworkerai';
import { system_prompt } from '@/constants';
export const getCharacter = (): string => {
  const characters = [
    'un niño', 'una niña', 'un perro', 'un gato', 'un oso', 'un pájaro', 'una tortuga',
    'un conejo', 'un elefante', 'una jirafa', 'un león', 'un tigre', 'un oso'
  ];
  const adjectives = [
    'pequeño', 'grande', 'amable', 'valiente', 'inteligente',
    'curioso', 'juguetón', 'amigable', 'dormilón'
  ];

  return ` ${characters[Math.floor( Math.random() * characters.length )]} ${adjectives[Math.floor( Math.random() * adjectives.length )]}`;
}

export const getCharacterName = ( character: string ): string => {
  const femaleNames = [
    'Ana', 'María', 'Sofía', 'Valeria', 'Isabella', 'Camila', 'Valentina', 'Luciana', 'Ximena', 'Mariana',
    'Victoria', 'Fernanda', 'Gabriela', 'Daniela', 'Natalia', 'Paula', 'Andrea', 'Sara', 'Laura', 'Carolina'
  ];
  const maleNames = [
    'Juan', 'José', 'Carlos', 'Andrés', 'Miguel', 'Alejandro', 'Sebastián', 'Félix', 'Javier', 'Luis',
    'David', 'Diego', 'Daniel', 'Santiago', 'Felipe', 'Jorge', 'Joaquín', 'Ricardo', 'Hugo', 'Pedro'
  ];

  if ( character.includes( 'una ' ) ) {
    return femaleNames[Math.floor( Math.random() * femaleNames.length )];
  }
  return maleNames[Math.floor( Math.random() * maleNames.length )];

}

export const getLore = (): string => {
  const lore = [
    'aprende el valor de la amistad',
    'confronta sus miedos',
    'aprende una lección de vida',
    'ayuda a un amigo',
    'descubre en la lectura un mundo nuevo',
  ];

  return lore[Math.floor( Math.random() * lore.length )];
}

export const getWordsFromSize = ( size: string ): number => {
  switch ( size ) {
    case 'sm':
      return 100;
    case 'md':
      return 150;
    case 'lg':
      return 200;
    default:
      return 100;
  }
}

