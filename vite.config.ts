import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

const config: UserConfig = {
  plugins: [
    solid({ ssr: true }),
    Unocss({
      rules: [
        [
          'w-100',
          {
            width: '100%',
            display: 'inline-flex',
            'align-items': 'center',
            'justify-content': 'center',
          },
        ],
        [
          'd-center',
          {
            'max-width': '800px',
            width: '100%',
            margin: '0 auto',
            padding: '0 2rem',
          },
        ],
        ['theme-color', { color: '#7746f1' }],
        ['border-b-theme', { 'border-bottom': '1px solid #7746f1' }],
      ],
      shortcuts: [
        [
          'btn',
          'px-4 py-1 rounded inline-block theme-color text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
        [
          'icon-btn',
          'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:theme-color !outline-none',
        ],
      ],
      presets: [
        presetAttributify(),
        presetUno({
          dark: 'class',
        }),
        presetTypography(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
        presetWebFonts({
          fonts: {
            recursive: 'Recursive',
          },
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
