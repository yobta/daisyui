import styles from './Dropdown.components.css'

import plugin from 'tailwindcss/plugin'

export const dropdownPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
})
