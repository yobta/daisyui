import styles from 'bundle-text:./Card.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const cardPlugin = plugin(({ addComponents }) => {
  const components = cssInJs(styles)

  addComponents(components)
})
