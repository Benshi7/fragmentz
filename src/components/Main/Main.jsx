import React, { useRef } from 'react'
import { Button } from '@nextui-org/react'

function Main () {
  const parallaxRef = useRef(null)

  return (
    <>
      <main className="flex flex-col xl:px-80 px-16 py-10 max-md:px-5 md:py-2 sm:px-20" ref={parallaxRef}>
        <header className="text-3xl font-bold tracking-wide leading-5 text-violet-100 xs:text-blue max-md:mr-2 max-md:max-w-full">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl leading-snug">Discover Our Web Development Services</h1>
        </header>
        <section className="w-full max-md:max-w-full">
          <br />
          <div className="flex max-md:flex-col max-md:gap-0 items-center">
            <ServiceDescription />
            <ServiceImage />
          </div>
        </section>
      </main>
    </>
  )
}

function ServiceDescription () {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full px-16">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl self-start font-bold tracking-normal leading-5 text-violet-500 max-md:max-w-full">
          Fancy projects for your ideas!
        </h2>
        <h3>
          
        </h3>
        <p className="text-justify mt-4 text-lg tracking-normal leading-5 text-secondary max-md:max-w-full md:text-lg sm:text-md whitespace-pre-wrap">
          You can explore our web development services without technical expertise. </p>
          <p className="text-justify text-lg tracking-normal leading-5 text-secondary max-md:max-w-full md:text-lg sm:text-md whitespace-pre-wrap">
          Once you have contacted us, we will guide you through the process of creating your ideal website!</p>
       
        <div className="flex max-md:mt-10">
         {/* <Button className="z-50 self-start w-32 px-5 py-4 mt-9 text-base font-semibold tracking-normal rounded-lg bg-violet-950 text-secondary" tabIndex="0">
          Learn More
        </Button>*/} 
        </div>
      </div>
    </div>
  )
}

function ServiceImage () {
  return (
    <div className="hidden flex-col w-[25%] max-md:ml-0 max-md:w-[66%] md:w-[36%] sm:w-[55%] md:flex mr-12">
      <img
        loading="lazy"
        src='https://i.imgur.com/Et0ZpX0.png'
        alt="Web Development Service"
        className="grow w-full aspect-[1.37] max-md:mt-10"
      />
    </div>
  )
}

export default Main
