import styles from 'bundle-text:./Rating.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const ratingPlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
