import * as styles from 'bundle-text:./Dropdown.components.css'

import plugin from 'tailwindcss/plugin'

export const dropdownPlugin = plugin(async ({ addComponents }) => {
  addComponents(styles)
})
