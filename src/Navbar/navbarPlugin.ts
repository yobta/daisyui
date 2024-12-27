import styles from 'bundle-text:./Navbar.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const navbarPlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
