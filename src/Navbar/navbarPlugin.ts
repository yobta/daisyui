import styles from './Navbar.components.css'

import plugin from 'tailwindcss/plugin'

export const navbarPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
