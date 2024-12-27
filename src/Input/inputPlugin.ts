import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const inputPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Input/Input.components.css')

  addComponents(styles)
})
