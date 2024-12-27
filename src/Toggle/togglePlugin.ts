import styles from 'bundle-text:./Toggle.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const togglePlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
