import styles from './Badge.components.css'

import plugin from 'tailwindcss/plugin'

export const badgePlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
