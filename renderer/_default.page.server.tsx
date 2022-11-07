import { generateHydrationScript, renderToString } from 'solid-js/web'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageContext } from './types'

function render(pageContext: PageContext) {
  const { Page, pageProps, documentProps } = pageContext

  const html = renderToString(() => <Page {...pageProps} />)
  const title = (documentProps && documentProps.title) || 'A simple website'
  const description =
    (documentProps && documentProps.description) || 'X1n, Developer.'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <link rel="icon" href="/xin.ico"  />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
        <script>
          (function() {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            if (prefersDark){
              document.documentElement.classList.toggle('dark', true)
            }
          })()
        </script>
      </head>
      <body class="font-recursive dark:text-white dark:bg-hex-121212">
        <div id="root">${dangerouslySkipEscape(html)}</div>
      </body>
    </html>
  `
}

const passToClient = ['pageProps', 'documentProps']

export { render, passToClient }
