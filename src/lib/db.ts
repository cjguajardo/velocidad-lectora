import { createClient } from "@libsql/client/web";

export const turso = createClient( {
  url: process.env.TURSO_URL as string,
  authToken: process.env.TURSO_TOKEN,
} );
