import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const ratingPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Rating/Rating.components.css')

  addComponents(styles)
})
