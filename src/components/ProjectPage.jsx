import React from "react";
import 'animate.css'
import CarouselComponent from "./CarouselComponent";


export default function ProjectPage() {
  return (
      <div className="flex flex-col items-center">
        <div className="animate__animated animate__zoomIn my-6">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl leading-snug">Our projects</h1>
        </div>
        <div className="w-[72rem] my-2">
          <CarouselComponent />
        </div>
        <section className="w-full my-6">
          <article className="flex-box mx-auto px-3 max-w-[66rem] my-6">
            <Project name="ITBANK" description={"ITBANK is a modern home banking page"} img={"src/assets/comingSoon.jpg"} link="" />
          </article>
          <article className="flex-box mx-auto px-3 max-w-[66rem] my-6">
            <Project name="Barber schedule" description={"The barber can organize"} img={"src/assets/comingSoon.jpg"} link="" />
          </article>
          <article className="flex-box mx-auto px-3 max-w-[66rem] my-6">
            <Project name="Coffe shop" description={"A modern coffe"} img={"src/assets/comingSoon.jpg"} link="" />
          </article>
        </section>
      </div>
  );
}

export function Project({ name, description, img, link }) {
  return (
    <div className="flex items-center justify-between m-auto bg-gray-900 rounded-lg shadow-lg shadow-black transform translate-x-2 translate-y-2">
      <div className="flex flex-col mx-4 px-3">
        <h3 className="text-left font-bold leading-snug text-2xl my-1">{name}</h3>
        <p className="text-justify leading-snug text-base">{description}</p>
        {/*<Button className="ml-1 my-2 max-w-12 btn btn-primary" color="primary" onClick={() => window.open("https://daisyui.com/", '_blank')}>Learn more</Button>*/}
        <button onClick={() => window.open(link)} className="my-2 max-w-20 cursor-pointer transition-all bg-blue-500 text-white text-xs px-2 py-3 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Learn more</button>
      </div>
      <img className="h-48 my-4 mx-2" src={img} alt={name} />
    </div>
  );
}






