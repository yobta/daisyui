import * as styles from './Badge.components.css'

import plugin from 'tailwindcss/plugin'

export const badgePlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
