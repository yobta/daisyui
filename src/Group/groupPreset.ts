import type { Config } from 'tailwindcss'

import { groupPlugin } from './groupPlugin.ts'

export const groupPreset: Partial<Config> = {
  plugins: [groupPlugin],
  theme: {
    extend: {
      borderRadius: {
        group: 'var(--rounded-group)',
      },
    },
  },
}
