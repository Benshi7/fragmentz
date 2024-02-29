import React from 'react'
import { Button } from '@nextui-org/react'

function Main () {
  return (
    <main className="flex flex-col px-5 md:px-80 mx-16 py-10 max-md:px-5">
      <header className="text-3xl font-bold tracking-wide leading-5 text-violet-100 xs:text-blue max-md:mr-2 max-md:max-w-full">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl leading-snug">Discover Our Web Development Services</h1>
      </header>
      <section className="w-full max-md:max-w-full">
        <br />
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <ServiceDescription />
          <ServiceImage />
        </div>
      </section>
    </main>
  )
}

function ServiceDescription () {
  return (
    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl self-start font-bold tracking-normal leading-5 text-violet-500 max-md:max-w-full">
          Fancy projects for your ideas!
        </h2>
        <p className="text-justify mt-4 text-md tracking-normal leading-5 text-secondary max-md:max-w-full">
          You can explore our web development services without technical expertise. Once you have contacted us, we will guide you through the process of creating your ideal website!
        </p>
        <div className="flex max-md:mt-10">
        <Button className="self-start w-32 px-5 py-4 mt-9 text-base font-semibold tracking-normal rounded-lg bg-violet-950 text-secondary" tabIndex="0">
          Learn More
        </Button>
        </div>
      </div>
    </div>
  )
}

function ServiceImage () {
  return (
    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/098650067bc79ead7a39f5366e5d67d447c7198e38b2cc81fa62b08e06f4389d?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&"
        alt="Web Development Service"
        className="grow w-full aspect-[1.37] max-md:mt-10"
      />
    </div>
  )
}

export default Main
