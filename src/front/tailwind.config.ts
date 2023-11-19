import type { Config } from 'tailwindcss'

export default {
  mode:'jit',
  content: [
      './wwwroot/**/*.html',
      './**/*.razor',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

