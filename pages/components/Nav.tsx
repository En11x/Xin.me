import { useDark } from '../hooks'

export const Nav = () => {
  const [, setDark] = useDark()

  return (
    <nav text-xl inline-flex gap-2 justify-end class="w100%">
      <button icon-btn onClick={(e) => setDark()}>
        <div dark:i-carbon-moon i-carbon-sun />
      </button>

      <a
        icon-btn
        i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/XlnOnly/Xin.me"
        target="_blank"
        title="GitHub"
      />
    </nav>
  )
}
