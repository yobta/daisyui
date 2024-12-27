import type { Config } from 'tailwindcss'

import { navbarPlugin } from './navbarPlugin.ts'

export const navbarPreset: Partial<Config> = {
  plugins: [navbarPlugin],
  theme: {
    extend: {
      fontSize: {
        'nav-bar-title': 'var(--ui-fz-nb-t, 1.0625rem)',
      },
    },
  },
}
