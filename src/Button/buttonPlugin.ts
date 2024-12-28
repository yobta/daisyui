import styles from './Button.components.css'

import plugin from 'tailwindcss/plugin'

export const buttonPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
