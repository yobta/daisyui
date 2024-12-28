import type { CssInJs } from 'postcss-js'

export const cssInJs = (css: string): CssInJs => {
  return JSON.parse(css)
}
