import { Typed } from './Typed'

export const Hero = () => {
  const goToResume = () => {
    window.open('https://xlnonly.github.io/resume/', '_blank')
  }

  return (
    <header mt-12 md:mt-18>
      <h1 text-5xl font-bold>
        <Typed write="Hello,"></Typed>
        <div mt-6>
          <Typed write=" I'm Xin." timeout={1000}></Typed>
        </div>
      </h1>
      <div class="mt-6">
        <div>
          <Typed write="Front-end developer." timeout={2000}></Typed>
        </div>
        <div mt-2>
          <Typed
            write="Currently working at Speedup Tech."
            timeout={3500}
          ></Typed>
        </div>
        <div mt-2>
          <Typed write="I like coding / playing." timeout={6000}></Typed>
        </div>
      </div>
      <div class="mt-8">
        <button class="btn border-theme" onClick={goToResume}>
          resume
        </button>
      </div>
    </header>
  )
}
