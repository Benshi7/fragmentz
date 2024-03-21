import React from "react";

const CommunicationOption = ({ src, alt, text }) => (
  <div className="flex gap-4 justify-between">
    <img loading="lazy" src={src} alt={alt} className="self-start aspect-square w-[15px]" />
    <div>{text}</div>
  </div>
);

const ContactText = () => {
  const communicationOptions = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccbfc5fd80ef01ab4766025d6cc7962c6272e48b11f5ad305d3627f7834eb0b1?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Phone icon",
      text: "Phone",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddbdded480d5238554384e39f4044cc22fc846141739ea8411ed5fc5a494ed08?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Email icon",
      text: "Email",
    },
  ];

  return (
    <section className="flex flex-col justify-center text-center bg-black bg-opacity-0 max-w-[554px] mt-10">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 min-h-[344px] md:min-h-[774px] max-md:px-5 max-md:mr-1 max-md:max-w-full">
        <header className="flex relative flex-col mb-24 mt-0 max-w-full w-[257px] max-md:mt-10">
          <h1 className="text-3xl  text-christalle-300">We'd love to</h1>
          <div className="flex gap-2 justify-between mt-6 whitespace-nowrap">
            <h2 className="my-auto text-4xl  text-christalle-300">hear</h2>
            <h2 className="grow text-5xl  text-christalle-600">from you</h2>
          </div>
          <p className="mt-1.5 text-2xl mb-8 md:mb-24 text-christalle-100">fragmentz@dev.com</p>
          <p className="mt-24 text-base whitespace-nowrap text-slate-400 max-md:mt-10"> Preferred method of communication </p>
          <div className="flex gap-5 justify-between pr-20 mt-6 text-lg whitespace-nowrap max-md:pr-5">
            {communicationOptions.map((option, index) => (
              <CommunicationOption key={index} {...option} />
            ))}
          </div>
        </header>
      </div>
    </section>
  );
};

export default ContactText;