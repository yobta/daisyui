import * as styles from 'bundle-text:./Card.components.css'

import plugin from 'tailwindcss/plugin'

export const cardPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
