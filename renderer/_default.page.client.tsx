import { hydrate, render as render_ } from 'solid-js/web'
import { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { PageContext } from './types'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '../src/style/main.css'

let dispose: () => void

export const render = (pageContext: PageContextBuiltInClient & PageContext) => {
  const content = document.getElementById('root')
  const { Page, pageProps } = pageContext

  if (dispose) dispose()

  if (pageContext.isHydration) {
    dispose = hydrate(() => <Page {...pageProps} />, content!)
  } else {
    render_(() => <Page {...pageProps} />, content!)
  }
}
