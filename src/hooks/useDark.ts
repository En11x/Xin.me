import { Accessor, createEffect } from 'solid-js'
import { useToggle } from './useToggle'
import { useWindow } from './useWindow'

type Theme = 'dark' | 'light'

const modes: Theme[] = ['dark', 'light']

export const useDark = (): [
  Accessor<boolean>,
  (newValue?: boolean) => void
] => {
  const window = useWindow()
  const [isDark, setDark] = useToggle(
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  )
  createEffect(() => {
    updateHtmlAttribute(isDark() ? 'dark' : 'light')
  })

  return [isDark, setDark]
}

function updateHtmlAttribute(
  value: Theme | string,
  selector: string = 'html',
  attribute: string = 'class'
) {
  const el = window.document.querySelector(selector)
  if (!el) {
    return
  }
  if (attribute === 'class') {
    const current = value.split(/\s/g)
    modes
      .flatMap((i) => (i || '').split(/\s/g))
      .filter(Boolean)
      .forEach((v) => {
        if (current.includes(v)) {
          el.classList.add(v)
        } else {
          el.classList.remove(v)
        }
      })
  } else {
    el.setAttribute(attribute, value)
  }
}
