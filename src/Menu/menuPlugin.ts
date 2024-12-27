import * as styles from 'bundle-text:./Menu.components.css'

import plugin from 'tailwindcss/plugin'

export const menuPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
