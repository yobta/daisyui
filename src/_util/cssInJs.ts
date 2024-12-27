import { parse } from 'postcss'
import type { CssInJs } from 'postcss-js'
import { objectify } from 'postcss-js'

export const cssInJs = (css: string): CssInJs => {
  if (css.includes('region: Sizes')) {
    console.log('css: ', css)
  }

  const processed = parse(css.replace(/\/\*[\s\S]*?\*\//g, ''))
  processed.walkComments((comment) => {
    console.log('comment: ', comment)
    comment.remove()
  })
  const jssObject = objectify(processed)

  return jssObject
}
