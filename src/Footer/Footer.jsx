import React from 'react';

const BrandImage = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const FooterText = () => (
  <footer className="self-center mt-3.5 text-sm font-light tracking-normal leading-5 text-white whitespace-nowrap">
    made by Fragmentz
  </footer>
);

const Footer = () => {
  const brandImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/654413f8a34d19202bacdb7b5c91a26aba221dc1fa77ab38e0218e0711600?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Brand Logo 1",
      className: "self-stretch my-auto aspect-[1.02] fill-neutral-300 w-[50px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa31b6e12071841065dfbe03a0add6785dff77350f392095122b414902bbe7b3?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Brand Logo 2",
      className: "aspect-square w-[54px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/58c3f3bbbff3cf2e22e8975e13a56373404d21310e1ad233b6c856cdbe71ea56?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Brand Logo 3",
      className: "aspect-square w-[53px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b07c243edc3ec4ae340e586461346a8051e1f2c5153522ab0a75e4369f3360ef?apiKey=50330f3fd48f47a5b9d1c8ef649e9298&",
      alt: "Brand Logo 4",
      className: "mt-1 aspect-square w-[51px]"
    }
  ];

  return (
    <div className="flex flex-col items-center px-16 pt-10 pb-3.5 bg-zinc-900 max-md:px-5">
      <div className="flex flex-col max-w-full w-[274px]">
        <div className="flex gap-5 justify-between items-start">
          {brandImages.map((img, index) => (
            <BrandImage key={index} src={img.src} alt={img.alt} className={img.className} />
          ))}
        </div>
        <FooterText />
      </div>
    </div>
  );
};

export default Footer;