import type { Config } from 'tailwindcss'

import { dropdownPlugin } from './dropdownPlugin.ts'

export const dropdownPreset: Partial<Config> = {
  plugins: [dropdownPlugin],
  theme: {
    extend: {},
  },
}
