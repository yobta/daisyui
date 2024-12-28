import styles from './Toggle.components.css'

import plugin from 'tailwindcss/plugin'

export const togglePlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
