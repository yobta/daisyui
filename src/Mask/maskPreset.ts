import type { Config } from 'tailwindcss'

import { maskPlugin } from './maskPlugin.ts'

export const maskPreset: Partial<Config> = {
  plugins: [maskPlugin],
  theme: {
    extend: {},
  },
}
