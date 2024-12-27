import styles from 'bundle-text:./Modal.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const modalPlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
