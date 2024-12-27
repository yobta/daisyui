import type { Config } from 'tailwindcss'

import { cardPlugin } from './cardPlugin.ts'

export const cardPreset: Partial<Config> = {
  plugins: [cardPlugin],
  theme: {
    extend: {},
  },
}
