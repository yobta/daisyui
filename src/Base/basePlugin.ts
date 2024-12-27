import styles from 'bundle-text:./Base.base.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const basePlugin = plugin(({ addBase }) => {
  const components = cssInJs(styles)

  addBase(components)
})
