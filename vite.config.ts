import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

const config: UserConfig = {
  plugins: [
    solid({ ssr: true }),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno({
          dark:'class'
        }),
        presetTypography(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
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
