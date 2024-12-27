import styles from 'bundle-text:./ViewSwitch.components.css'

import plugin from 'tailwindcss/plugin'

import { cssInJs } from '../_util/cssInJs.ts'

export const viewSwitchPlugin = plugin(({ addBase }) => {
  const components = cssInJs(styles)

  addBase(components)
})
