import styles from './Group.components.css'

import plugin from 'tailwindcss/plugin'

export const groupPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
