import { onMount } from 'solid-js'
import typed from 'typed.js'

interface TypedProps {
  write: string
  timeout?: number
}

export const Typed = (props: TypedProps) => {
  const { write, timeout = 0 } = props
  let typedRef: any
  const startTyped = () => {
    if (typedRef) {
      new typed(typedRef, {
        strings: [write],
        typeSpeed: 40,
        loop: false,
        onComplete: (_) => {
          const typedCursor = Array.from(
            typedRef?.parentElement?.children
          ).find((it: any) => it.classList.contains('typed-cursor'))
          typedCursor && typedRef?.parentElement?.removeChild(typedCursor)
        },
      })
    }
  }
  onMount(() => {
    setTimeout(() => {
      startTyped()
    }, timeout)
  })

  return <span ref={typedRef}></span>
}
