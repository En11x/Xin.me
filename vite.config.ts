import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

const config: UserConfig = {
  plugins: [
    solid({ ssr: true }),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
      ],
    }),
    ssr({
      prerender: true,
    }),
  ],
  build: {
    // @ts-ignore
    polyfillDynamicImport: false,
  },
}

export default config
