import { hydrate } from 'solid-js/web'
import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { PageContext } from './types'

import 'uno.css'
import '@unocss/reset/tailwind.css'

export const render = (pageContext: PageContextBuiltIn & PageContext) => {
  const content = document.getElementById('root')
  const { Page } = pageContext

  hydrate(() => <Page></Page>, content!)
}
