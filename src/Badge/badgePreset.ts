import type { Config } from 'tailwindcss'

import { badgePlugin } from './badgePlugin.ts'

export const badgePreset: Partial<Config> = {
  plugins: [badgePlugin],
}
