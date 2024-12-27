import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const maskPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Mask/Mask.components.css')

  addComponents(styles)
})
