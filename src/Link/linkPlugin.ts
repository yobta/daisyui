import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const linkPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Link/Link.components.css')

  addComponents(styles)
})
