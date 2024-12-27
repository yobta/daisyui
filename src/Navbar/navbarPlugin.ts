import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const navbarPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Navbar/Navbar.components.css')

  addComponents(styles)
})
