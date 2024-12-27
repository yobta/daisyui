import * as styles from 'bundle-text:./ViewSwitch.components.css'

import plugin from 'tailwindcss/plugin'

export const viewSwitchPlugin = plugin(async ({ addBase }) => {
  addBase(styles)
})
