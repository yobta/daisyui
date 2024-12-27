import type { Config } from 'tailwindcss'

import { togglePlugin } from './togglePlugin.ts'

export const togglePreset: Partial<Config> = {
  plugins: [togglePlugin],
  theme: {
    extend: {},
  },
}
