import styles from './Modal.components.css'

import plugin from 'tailwindcss/plugin'

export const modalPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
