import React from 'react'

const ServiceItem = ({ name }) => (
  <div>{name}</div>
)

const ServiceList = () => (
  <div className="flex gap-5 justify-between px-5 mt-1.5 w-full text-base tracking-normal text-white whitespace-nowrap max-w-[653px] max-md:flex-wrap max-md:max-w-full">
    {['Web-Dev', 'E-commerce', 'Design', 'SEO', 'Database'].map(service => (
      <ServiceItem key={service} name={service} />
    ))}
  </div>
)

function Services () {
  return (
    <section className="flex flex-col items-center md:px-64 py-8 max-md:px-5 lg:px-[22rem]">
      <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex flex-col px-5 basis-0">
          <div className="text-3xl font-bold tracking-normal text-white">Our</div>
          <div className="mt-3.5 text-5xl font-semibold tracking-wide text-violet-500 max-md:text-4xl">
            <span className="text-5xl font-bold text-violet-500">SERVICES</span>
          </div>
        </h1>
        <div className="my-auto max-w-full bg-white h-[3px] w-[553px] " />
      </header>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a571c516ca3b849ff45d5cbdf928f9915d566e310c7fa67ac6cc7f478224a4?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&"
        alt="A representation of our services"
        className="mt-6 aspect-[8.33] max-w-[653px] w-[653px] max-md:max-w-full"
      />
      <ServiceList />
      <br />
    </section>
  )
}

export default Services
