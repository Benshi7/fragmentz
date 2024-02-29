import React from "react"
import { Input } from "@nextui-org/react"
import { Textarea } from "@nextui-org/react"
import { Spotlight } from "./ui/Spotlight"
import ContactText from "./ContactText"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

const words = [
  {
    text: "💜 Hello."
  },
  {
    text: "Let's",
  },
  {
    text: "talk.",
    className:"text-christalle-800 dark:text-christalle-800"
  }]

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center px-32 max-md:px-5 md:px-64">
      <div className="w-full px-12 max-w-[897px] md:max-w-full">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="order-2 ml-32 md:order-1 flex flex-col md:w-4/12">
            <form className="flex flex-col grow text-base font-semibold tracking-normal text-white md:mt-10">
              <div className="text-2xl font-bold tracking-wide md:text-3xl">
              <TypewriterEffectSmooth words={words} />
              </div>
              <Input className="my-4" label="Name" type="text" />
              <Input className="my-4" label="Email" type="email" />
              <Input className="my-4" label="Reason" type="text" />
              <Input className="my-4" label="Phone" type="number" />
              <Textarea className="my-4" label="Message" />
              <button
                type="submit"
                className="justify-center self-end px-2 py-2 mt-2 text-base tracking-normal text-center text-primary whitespace-nowrap rounded-lg bg-slate-200 hover:text-black hover:scale-110 transition"
                tabIndex="0"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="order-1 md:order-2 flex flex-col md:w-6/12">
            <ContactText />
            <Spotlight className="top-0 opacity-70" fill="#AB46B4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage
