import styles from './Menu.components.css'

import plugin from 'tailwindcss/plugin'

export const menuPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
