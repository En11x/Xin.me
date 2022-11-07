import { Component } from 'solid-js'
import { Hello } from '../components/Hello'
import { Nav } from '../components/Nav'

const documentProps = {
  title: 'X1n',
  description: 'X1n, Developer.',
}

const Page: Component = () => {
  return (
    <main py-8vh px-6 max-w-76ch mx-auto xl:text-lg dark:prose-invert>
      <Nav />
      <Hello />
    </main>
  )
}

export { Page, documentProps }
