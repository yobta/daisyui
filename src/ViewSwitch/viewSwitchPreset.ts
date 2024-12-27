import type { Config } from 'tailwindcss'

import { viewSwitchPlugin } from './viewSwitchPlugin.ts'

export const viewSwitchlPreset: Partial<Config> = {
  plugins: [viewSwitchPlugin],
  theme: {
    extend: {},
  },
}
