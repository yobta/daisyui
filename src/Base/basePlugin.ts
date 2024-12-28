import styles from './Base.base.css'

import plugin from 'tailwindcss/plugin'

export const basePlugin = plugin(({ addBase }) => {
  addBase(styles)
})
