import * as styles from 'bundle-text:./Button.components.css'

import plugin from 'tailwindcss/plugin'

export const buttonPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
