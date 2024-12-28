import { parse } from 'postcss'
import type { CssInJs } from 'postcss-js'
import { objectify } from 'postcss-js'

export const cssInJs = (css: string): CssInJs => {
  const replaced = css
    .replace(/@apply\s+([^\n;]+?)\s*\/\s*/g, '@apply $1/')
    .replace(/@apply\s+([^\n;]+?)\s*!\s*/g, '@apply $1!')
  const processed = parse(replaced)
  const jssObject = objectify(processed)

  return jssObject
}
