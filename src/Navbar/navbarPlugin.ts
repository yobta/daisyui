import * as styles from 'bundle-text:./Navbar.components.css'

import plugin from 'tailwindcss/plugin'

export const navbarPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
