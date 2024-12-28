import styles from './Mask.components.css'

import plugin from 'tailwindcss/plugin'

export const maskPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
