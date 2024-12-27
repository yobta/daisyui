import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const togglePlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Toggle/Toggle.components.css')

  addComponents(styles)
})
