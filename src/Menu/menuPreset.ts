import type { Config } from 'tailwindcss'

import { menuPlugin } from './menuPlugin.ts'

export const menuPreset: Partial<Config> = {
  plugins: [menuPlugin],
  theme: {
    extend: {
      gap: {
        'menu-item': 'var(--gap-menu)',
      },
      ringWidth: {
        menu: 'var(--spacing-menu)',
      },
    },
  },
}
