import plugin from 'tailwindcss/plugin'

import { loadStyles } from '../_util/loadStyles.ts'

export const basePlugin = plugin(async ({ addBase }) => {
  const css = await import('bundle-text:./Base.base.css')
  console.log('css: ', css)
  const styles = await loadStyles('/Base/Base.base.css')

  addBase(styles)
})
