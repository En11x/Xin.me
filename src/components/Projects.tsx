import { Index } from 'solid-js'
import ProjectItem, { ProjectItemProps } from './ProjectItem'

export default () => {
  const projects: ProjectItemProps[] = [
    {
      name: 'Xinjs',
      desc: 'A wanton js libray.',
      link: 'https://xlnonly.github.io/xinjs/',
      icon: 'i-twemoji-hammer-and-pick',
    },
    {
      name: 'npm-ui',
      desc: 'Seach npm packages downloading in your terminal.',
      link: 'https://github.com/XlnOnly/npm-ui',
      icon: 'i-twemoji-laptop',
    },
    {
      name: 'Airdraw',
      desc: 'A simple draw form tldraw.',
      link: 'https://github.com/XlnOnly/Airdraw',
      icon: 'i-twemoji-pencil',
    },
    {
      name: 'front2nd',
      desc: 'fronted packages for building your project.',
      link: 'https://github.com/XlnOnly/front2nd',
      icon: 'i-twemoji-crown',
    },
  ]
  const openGithub = () => {
    window.open('https://github.com/XlnOnly', '_blank')
  }

  return (
    <>
      <h2 text-3xl mt-8 mb-4 font-semibold w-100>
        <span flex-1>Projects</span>
        <div class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
          <div onClick={openGithub} class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div inline-grid grid-cols-1 sm:grid-cols-2 gap-4>
        <Index each={projects}>{(item) => <ProjectItem {...item()} />}</Index>
      </div>
    </>
  )
}
