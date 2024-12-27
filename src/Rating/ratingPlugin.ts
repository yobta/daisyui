import * as styles from 'bundle-text:./Rating.components.css'

import plugin from 'tailwindcss/plugin'

export const ratingPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
