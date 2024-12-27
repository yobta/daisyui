import type { Config } from 'tailwindcss'

import { progressPlugin } from './progressPlugin.ts'

export const progressPreset: Partial<Config> = {
  plugins: [progressPlugin],
  theme: {
    extend: {},
  },
}
