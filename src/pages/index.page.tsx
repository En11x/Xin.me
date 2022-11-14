import { Component } from 'solid-js'
import { Header } from '../components/Header'
import { Hello } from '../components/Hello'

const documentProps = {
  title: 'A simple website',
  description: 'X1n, Developer.',
}

const Page: Component = () => {
  return (
    <>
      <Header />
      <main d-center justify-start dark:prose-invert>
        <Hello />
      </main>
    </>
  )
}

export { Page, documentProps }
