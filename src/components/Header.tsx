import { useDark } from '../hooks'
import { Avatar } from './Avatar'

export const Header = () => {
  const [, setDark] = useDark()

  return (
    <nav text-xl w-100>
      <div inline-flex gap-2 justify-between items-center p-x8 class="w-100%">
        <Avatar />
        <div inline-flex gap-2>
          <a
            icon-btn
            i-carbon-logo-github
            rel="noreferrer"
            href="https://github.com/XlnOnly/Xin.me"
            target="_blank"
            title="GitHub"
          />
          <button icon-btn onClick={(e) => setDark()}>
            <div dark:i-carbon-moon i-carbon-sun />
          </button>
        </div>
      </div>
    </nav>
  )
}
