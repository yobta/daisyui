import type { Config } from 'tailwindcss'

import { buttonPlugin } from './buttonPlugin.ts'

export const buttonPreset: Partial<Config> = {
  plugins: [buttonPlugin],
  theme: {
    extend: {
      borderRadius: {
        btn: 'var(--rounded-btn)',
        'btn-lg': 'var(--rounded-btn-lg)',
        'btn-sm': 'var(--rounded-btn-sm)',
        'btn-xs': 'var(--rounded-btn-xs)',
      },
      borderWidth: {
        btn: 'var(--border-width-btn)',
      },
      fontSize: {
        btn: 'var(--font-size-btn)',
        'btn-lg': 'var(--font-size-btn-lg)',
        'btn-sm': 'var(--font-size-btn-sm)',
        'btn-xs': 'var(--font-size-btn-xs)',
      },
      fontWeight: {
        'weight-btn': 'var(--font-weight-btn)',
        'weight-btn-lg': 'var(--font-weight-btn-lg)',
        'weight-btn-sm': 'var(--font-weight-btn-sm)',
        'weight-btn-xs': 'var(--font-weight-btn-xs)',
      },
      gap: {
        btn: 'var(--gap-btn)',
        'btn-lg': 'var(--gap-btn-lg)',
        'btn-sm': 'var(--gap-btn-sm)',
        'btn-xs': 'var(--gap-btn-xs)',
      },
      height: {
        btn: 'var(--height-btn)',
        'btn-lg': 'var(--height-btn-lg)',
        'btn-sm': 'var(--height-btn-sm)',
        'btn-xs': 'var(--height-btn-xs)',
      },
      padding: {
        btn: 'var(--padding-btn)',
        'btn-lg': 'var(--padding-btn-lg)',
        'btn-sm': 'var(--padding-btn-sm)',
        'btn-xs': 'var(--padding-btn-xs)',
      },
    },
  },
}
