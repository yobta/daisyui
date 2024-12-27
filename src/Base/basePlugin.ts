import * as styles from 'bundle-text:./Base.base.css'

import plugin from 'tailwindcss/plugin'

export const basePlugin = plugin(async ({ addBase }) => {
  addBase(styles)
})
