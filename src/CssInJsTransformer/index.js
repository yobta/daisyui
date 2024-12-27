import { Transformer } from '@parcel/plugin'
import { parse } from 'postcss'
import { objectify } from 'postcss-js'

export default new Transformer({
  async transform({ asset }) {
    if (asset.type !== 'css') {
      return [asset]
    }

    const cssContent = await asset.getCode()
    const processed = parse(cssContent, { from: asset.filePath })
    const cssInJs = objectify(processed)
    asset.type = 'js'
    asset.setCode(`export default ${JSON.stringify(cssInJs, null, 2)};`)

    return [asset]
  },
})
