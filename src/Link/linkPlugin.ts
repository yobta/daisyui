import styles from './Link.components.css'

import plugin from 'tailwindcss/plugin'

export const linkPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
