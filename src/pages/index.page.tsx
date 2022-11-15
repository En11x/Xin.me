import { Component } from 'solid-js'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import Projects from '../components/Projects'

const documentProps = {
  title: 'A simple website',
  description: 'X1n, Developer.',
}

const Page: Component = () => {
  return (
    <>
      <Header />
      <main d-center justify-start dark:prose-invert>
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export { Page, documentProps }
