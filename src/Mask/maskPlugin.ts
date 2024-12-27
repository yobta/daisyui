import styles from 'bundle-text:./Mask.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const maskPlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
