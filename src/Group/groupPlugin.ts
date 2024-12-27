import * as styles from 'bundle-text:./Group.components.css'

import plugin from 'tailwindcss/plugin'

export const groupPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
