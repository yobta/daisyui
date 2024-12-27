import * as styles from 'bundle-text:./colors.components.css'

import plugin from 'tailwindcss/plugin'

export const colorsPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
