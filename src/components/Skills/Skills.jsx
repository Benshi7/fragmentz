import React, { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import { BackgroundCircles } from '../design/Hero'
import EngineerSvg from '../../assets/svgs/undraw_software_engineer.svg'

function SkillCard ({ title, description, imageSrc, imageAlt }) {
  return (
    <section className="flex flex-col mt-8 ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <h2 className="text-3xl font-bold tracking-normal text-center text-violet-500 max-md:max-w-full">{title}</h2>
      <p className="mt-5 text-lg tracking-normal leading-5 text-white max-md:max-w-full">{description}</p>
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="self-center mt-6 max-w-full aspect-[3.7] w-[346px]" />
    </section>
  )
}

export default function Skills () {

  const parallaxRef = useRef(null)

  const skills = [
    {
      title: 'Web-Development Skills',
      description: 'We’ve experience in different programming languages and full stack frameworks. This allows us to undertake a wide variety of tasks to suit your needs.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/76ebcbee346c82d2a4d6a0d7098a37969a7e2510c4b8c207749a2ebede6163de?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&',
      imageAlt: 'Chart showing web development skills'
    }
  ]

  return (
    <main className="flex flex-col items-center xl:px-80 pt-8 max-md:px-12 md:mr-12" ref={parallaxRef}>
      <section className="w-full max-w-[927px] max-md:max-w-full">
        <div className="flex gap-18 max-md:flex-col max-md:gap-0 items-center">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full md:w-[45%] sm:w-[46%]">
            <img
              loading="lazy"
              src='https://i.imgur.com/NQNRjY6.png'
              alt="Decorative"
              className="w-full aspect-[1.59] max-md:mt-10"
            />
          </article>

          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} description={skill.description} imageSrc={skill.imageSrc} imageAlt={skill.imageAlt} />
          ))}
        </div>
      </section>
      <BackgroundCircles />
    </main>
  )
}
