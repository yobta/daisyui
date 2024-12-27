import * as styles from 'bundle-text:./Link.components.css'

import plugin from 'tailwindcss/plugin'

export const linkPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
