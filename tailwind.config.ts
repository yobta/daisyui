import type { Config } from 'tailwindcss'
import { uiPreset } from './src/index.ts'

export default {
  content: ['src/**/*.{ts,tsx,js,jsx}'],
  presets: [uiPreset],
} satisfies Config
