import styles from './colors.components.css'

import plugin from 'tailwindcss/plugin'

export const colorsPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
