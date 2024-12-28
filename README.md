# DaisyUI Skin

## Install

```sh
pnpm i @yobta/daisyui
```

## Add to Tailwind

```typescript
import type { Config } from 'tailwindcss'
import { daisyPresetYobta } from '@yobta/daisyui'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,css}'],
  darkMode: 'media',
  presets: [daisyPresetYobta],
} satisfies Config
```