import { Component } from 'solid-js'
import { Hello } from '../components/Hello'

const documentProps = {
  title: 'X1n',
  description: 'X1n, Developer.',
}

const Page: Component = () => {
  return (
    <main>
      <Hello  />
    </main>
  )
}

export { Page, documentProps }
