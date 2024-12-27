import * as styles from 'bundle-text:./Badge.components.css'

import plugin from 'tailwindcss/plugin'

export const badgePlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
