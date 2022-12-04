export const Hero = () => {
  const goToResume = () => {
    window.open('https://xlnonly.github.io/resume/', '_blank')
  }

  return (
    <header mt-12 md:mt-18>
      <h1 text-5xl font-bold>
        <span class="block">Hello,</span>
        <span class="block" mt-6>
          I'm Xin.
        </span>
      </h1>
      <div class="mt-6">
        <div>
          <span>Front-end developer.</span>
        </div>
        <div mt-2>
          <span>Currently working at Speedup Tech.</span>
        </div>
        <div mt-2>
          <span>I like coding / playing.</span>
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
