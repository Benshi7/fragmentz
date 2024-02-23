import React from 'react'
import {Button} from "@nextui-org/react";

function Main () {
  return (
    <main className="flex flex-col px-5 max-w-[1440px]">
      <header className="text-4xl font-bold tracking-wide leading-5 text-violet-100 max-md:mr-2 max-md:max-w-full">
        Discover Our Web Development Services
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
        <h2 className="text-3xl font-bold tracking-normal leading-5 text-violet-500 max-md:max-w-full">
          Fancy projects for your ideas!
        </h2>
        <p className="mt-4 text-lg tracking-normal leading-5 text-white max-md:max-w-full">
          As a new user, you can explore our web development services without technical expertise. Once you have contacted us, we will guide you through the process of creating your ideal website!
        </p>
        <Button className="justify-center self-start px-5 py-4 mt-9 ml-6 text-base font-semibold tracking-normal rounded-lg bg-violet-950" tabIndex="0">
          Learn More
        </Button>
      </div>
    </div>
  )
}

function ServiceImage () {
  return (
    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
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
