import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

const env = loadEnv( 'development', process.cwd(), '' );
export default defineConfig( ( { mode } ) => ( {
  test: {
    env: env,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  testTimeout: 60000 * 5, // minutes
  hookTimeout: 60000 * 10, // minutes
} ) )