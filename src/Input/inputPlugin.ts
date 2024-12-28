import styles from './Input.components.css'

import plugin from 'tailwindcss/plugin'

export const inputPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
