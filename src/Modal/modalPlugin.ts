import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const modalPlugin = plugin(async ({ addComponents }) => {
  const styles = await loadStyles('/Modal/Modal.components.css')

  addComponents(styles)
})
