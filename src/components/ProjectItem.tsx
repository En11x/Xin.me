export interface ProjectItemProps {
  name: string
  desc: string
  link: string
  icon: string
}

export default (props: ProjectItemProps) => {
  const { desc, icon, link, name } = props
  return (
    <a
      px-4
      py-3
      rounded-md
      bg-gray-50
      transition-colors
      decoration-none
      hover:bg-gray-100
      class="dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
      href={link}
      target="_blank"
    >
      <div class="flex" items-center justify-center h-full>
        <div flex-1>
          <div font-medium leading-relaxed>
            {name}
          </div>
          <div op-50 font-normal text-sm>
            {desc}
          </div>
        </div>
        <div ml-4 text-4xl op-80>
          <div class={icon}></div>
        </div>
      </div>
    </a>
  )
}
