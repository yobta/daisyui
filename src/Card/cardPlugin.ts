import styles from './Card.components.css'

import plugin from 'tailwindcss/plugin'

export const cardPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
