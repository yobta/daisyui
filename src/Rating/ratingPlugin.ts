import styles from './Rating.components.css'

import plugin from 'tailwindcss/plugin'

export const ratingPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
