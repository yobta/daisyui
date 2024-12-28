import styles from './Progress.components.css'

import plugin from 'tailwindcss/plugin'

export const progressPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
