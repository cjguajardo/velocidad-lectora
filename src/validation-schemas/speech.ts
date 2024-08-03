import { z } from 'zod';
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

/**
 * audio Blob
 * words number
 * text string
 */
export const speechSchema = z.object( {
  // audio: z.any().refine( ( audio ) => {
  //   const blob = new blob( [audio] );
  //   return blob.size < max_file_size;
  // } ),
  audio: z.instanceof( Blob ).refine( ( audio ) => audio.size < MAX_FILE_SIZE ),
  words: z.string(),
  text: z.string(),
} ).required();