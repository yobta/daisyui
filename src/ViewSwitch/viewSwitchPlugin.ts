import styles from './ViewSwitch.components.css'

import plugin from 'tailwindcss/plugin'

export const viewSwitchPlugin = plugin(({ addBase }) => {
  addBase(styles)
})
