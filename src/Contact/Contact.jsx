import React from "react";

// Reusable TextInput component
const TextInput = ({ label, type }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="mt-5 sr-only">{label}</label>
    <input
      type={type}
      id={label.toLowerCase()}
      placeholder={label}
      className="shrink-0 mt-4 h-8 w-full rounded-lg border border-solid bg-neutral-800 border-[color:var(--Jacarta-800,#5D3A9D)]"
      aria-label={label}
    />
  </>
);

// Reusable TextArea component
const TextArea = ({ label }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="mt-6 sr-only">{label}</label>
    <textarea
      id={label.toLowerCase()}
      placeholder={label}
      className="shrink-0 mt-4 h-24 w-full rounded-lg border border-solid bg-neutral-800 border-[color:var(--Jacarta-800,#5D3A9D)]"
      aria-label={label}
    />
  </>
);

function Contact() {
  return (
    <section className="flex justify-center items-center px-16 py-6 bg-zinc-900 max-md:px-5">
      <div className="w-full max-w-[897px] md:max-w-full">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex flex-col md:w-6/12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0efcc974d3ecdb445f4ade649842a5ed77ab4134a0029c7aea53343685c0ca18?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&"
              alt="Contact Us Image"
              className="self-stretch my-auto w-full aspect-[1.27] md:mt-10 max-w-[400px] md:max-w-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col md:w-6/12">
            <form className="flex flex-col grow text-base font-semibold tracking-normal text-white md:mt-10">
              <div className="text-5xl font-bold tracking-wide md:text-4xl">
                Get in touch!
              </div>
              <TextInput label="Name" type="text" />
              <TextInput label="Email" type="email" />
              <TextArea label="Message" />
              <button
                type="submit"
                className="justify-center self-start px-2 py-3.5 mt-6 text-base tracking-normal text-center text-white whitespace-nowrap rounded-lg bg-violet-950"
                tabIndex="0"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;