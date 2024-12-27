import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const menuPlugin = plugin(async ({ addComponents }) => {
  const components = await loadStyles('/Menu/Menu.components.css')

  addComponents(components)
})
