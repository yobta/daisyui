import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const progressPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Progress/Progress.components.css')

  addComponents(styles)
})
