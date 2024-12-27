import * as styles from 'bundle-text:./Progress.components.css'

import plugin from 'tailwindcss/plugin'

export const progressPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
