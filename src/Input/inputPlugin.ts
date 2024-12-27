import * as styles from 'bundle-text:./Input.components.css'

import plugin from 'tailwindcss/plugin'

export const inputPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
