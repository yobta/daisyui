import * as styles from 'bundle-text:./Modal.components.css'

import plugin from 'tailwindcss/plugin'

export const modalPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
