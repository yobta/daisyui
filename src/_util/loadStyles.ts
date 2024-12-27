import { parse } from 'postcss'
import type { CssInJs } from 'postcss-js'
import { objectify } from 'postcss-js'

import { getAbsPath, readCss } from './fs.ts'

/**
 * Transforms a CSS file with @apply directives into a CSS-in-JS object.
 *
 * @param {string} cssFilePath - The pathname to the CSS file.
 * @returns {Promise<CSSInJS>} - The resulting CSS-in-JS object.
 */

export const loadStyles = async (cssFilePath: string): Promise<CssInJs> => {
  const absPath = getAbsPath(cssFilePath)
  const cssContent = await readCss(absPath)
  const processed = parse(cssContent)
  const jssObject = objectify(processed)

  return jssObject
}
