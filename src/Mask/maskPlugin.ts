import * as styles from 'bundle-text:./Mask.components.css'

import plugin from 'tailwindcss/plugin'

export const maskPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
