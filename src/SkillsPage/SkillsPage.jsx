import Contact from "../Home/Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Meteors } from "../ui/meteors";



export function SkillCard({title, shortDescription, image}) {
  return (
    <div className="mx-8 my-8 flex">
      <div className="w-full relative h-74">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
          <img src={image} className="h-40 mx-auto my-1 py-0"/>
         
          
          <h1 className="font-bold text-lg text-white relative z-50 text-left">
            {title}
          </h1>
          <p className="font-normal text-sm mb-2 text-slate-500  relative z-50 text-left">
            {shortDescription}
          </p>

          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 self-end">
            Explore
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
      <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 ">
        <SkillCard title="HTML" shortDescription={"Hyper Text Marked Language."} image={"src/assets/htmlLogo.svg"}/>
        <SkillCard title="CSS" shortDescription={"Cascade Style Sheet, define the design of html file. "} image={"src/assets/cssLogo.svg"}/>
        <SkillCard title="JavaScript" shortDescription={"The Word Wide Web programming language."} image={"src/assets/jsLogo.svg"}/>
        <SkillCard title="Tailwind" shortDescription={"The CSS framework to create attractive designs."} image={"src/assets/tailwindLogo.svg"}/>
        <SkillCard title="React" shortDescription={"The most popular Front-end libarary."} image={"src/assets/reactLogo.svg"}/>
        <SkillCard title="Next JS" shortDescription={"The most popular Front-end libarary."} image={"src/assets/nextjsLogo.svg"}/>
        <SkillCard title="Python" shortDescription={"The all in one of programming language."} image={"src/assets/pythonLogo.svg"}/>
        <SkillCard title="Django" shortDescription={"Back-end framwork based in MVC model."} image={"src/assets/djangoLogo2.svg"}/>
        <SkillCard title="SQL" shortDescription={"Relational data base mos used."} image={"src/assets/sqlLogo2.svg"}/>
        <SkillCard title="MongoDB" shortDescription={"The most popular Front-end libarary."} image={"src/assets/mongodbLogo.svg"}/>
      </div>
    </div>

    
    </>
  
  )
}
