import { Accessor, createSignal } from 'solid-js'

export const useToggle = (
  initital: boolean = false
): [Accessor<boolean>, (newValue?: boolean) => void] => {
  const [value, setValue] = createSignal(initital)

  const toggle = (newValue?: boolean) => {
    setValue((prev) => (typeof newValue === 'boolean' ? newValue : !prev))
  }

  return [value, toggle]
}
