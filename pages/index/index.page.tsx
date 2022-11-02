import { Component } from 'solid-js'
import { Hello } from '../components/Hello'

const documentProps = {
  title: 'X1n',
  description: 'X1n, Developer.',
}

const Page: Component = () => {
  return (
    <main py-8vh px-6 max-w-76ch mx-auto xl:text-lg dark:prose-invert>
      <Hello  />
    </main>
  )
}

export { Page, documentProps }
