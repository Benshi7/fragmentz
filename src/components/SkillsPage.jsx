import React from "react";
import { Link } from "react-router-dom";

export function SkillCard({title, shortDescription, link, image}) {
  return (
    <div className="mx-8 my-8 flex sm:justify-center">
      <div className="w-full relative h-74 sm:w-80" >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-christalle-700 to-indigo-500 transform scale-[0.80] bg-christalle-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-background border border-gray-900 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <img src={image} className="h-24 mx-auto my-1 py-0 aspect-auto"/>

          <h1 className="font-bold text-lg text-white relative z-50 text-left">
            {title}
          </h1>
          <p className="font-normal text-sm mb-2 text-slate-500  relative z-50 text-left">
            {shortDescription}
          </p>

          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 self-end">
            <Link to={link} target="blank">Explore</Link>
          </button>

        </div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <>
    <div className="mx-4 mb-16 xl:mx-12 md:mx-12 ">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-8 lg:mx-18 xl:mx-48 xl:h-[90%] ">
        <SkillCard title="HTML" shortDescription={"Hyper Text Marked Language."} link="https://developer.mozilla.org/en-US/docs/Web/HTML" image={"src/assets/htmlLogo.svg"}/>
        <SkillCard title="CSS" shortDescription={"Cascade Style Sheet."} link={"https://developer.mozilla.org/en-US/docs/Web/CSS"} image={"src/assets/cssLogo.svg"}/>
        <SkillCard title="JavaScript" shortDescription={"The Word Wide Web programming language."} link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} image={"src/assets/jsLogo.svg"}/>
        <SkillCard title="Tailwind" shortDescription={"CSS framework to create attractive designs."} link={"https://tailwindcss.com/"} image={"src/assets/tailwindLogo.svg"}/>
        <SkillCard title="React" shortDescription={"The most popular Front-end libarary."} link={"https://react.dev/"} image={"src/assets/reactLogo.svg"}/>
        <SkillCard title="Next JS" shortDescription={"React framework, organize your path scheme."} link={"https://nextjs.org/"} image={"src/assets/nextjsLogo.svg"}/>
        <SkillCard title="Python" shortDescription={"The all in one of programming languages."} link={"https://www.python.org/"} image={"src/assets/pythonLogo.svg"}/>
        <SkillCard title="Django" shortDescription={"Back-end framwork based in MVC model."} link={"https://www.djangoproject.com/"} image={"src/assets/djangoLogo2.svg"}/>
        <SkillCard title="SQL" shortDescription={"Relational data base most used."} link={"https://www.w3schools.com/sql/sql_intro.asp"} image={"src/assets/sqlLogo2.svg"}/>
        <SkillCard title="MongoDB" shortDescription={"No relational data base most used."} link={"https://www.mongodb.com/"} image={"src/assets/mongodbLogo.svg"}/>
      </div>
    </div>
    </>

  )
}