import * as styles from 'bundle-text:./Toggle.components.css'

import plugin from 'tailwindcss/plugin'

export const togglePlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
