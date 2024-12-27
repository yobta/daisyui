import styles from 'bundle-text:./Badge.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const badgePlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
