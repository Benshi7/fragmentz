import React from "react";
import 'animate.css'
import CarouselComponent from "./CarouselComponent";

export default function ProjectPage() {
  const description = "ITBANK is a revolutionary banking institution at the forefront of modern financial technology"+
  "With its sleek and sophisticated design, ITBANK sets itself apart as a leader in the banking industry."+
  " Leveraging cutting-edge technologies such as Next.js for dynamic and responsive web development," +
  " SQL for robust data management, and Django Rest Framework for seamless API integration, ITBANK offers a seamless and secure banking experience for its customers."
  return (
      <div className="flex flex-col items-center">
        <div className="animate__animated animate__zoomIn my-6">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl leading-snug">Our projects</h1>
        </div>
        <div className="w-[65rem]">
          <CarouselComponent />
        </div>
        <section className="w-full">
          <h2>List of Projects</h2>
          <article className="mx-8">
            <Project name="ITBANK" description={description} img="https://uploads-ssl.webflow.com/638a9c0b679b62447407083b/638b1fa6efc521f140ebccb4_Screenshot%202022-12-03%20at%2011.04.08.png" link="https://www.google.com" />
          </article>
        </section>
      </div>
  );
}

export function Project({ name, description, img, link }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col mr-4">
        <h3 className="text-left self-start">{name}</h3>
        <p className="text-left self-start">{description}</p>
        <a href={link} target="_blank" rel="noreferrer">Go to project</a>
      </div>
      <img className="h-36" src={img} alt={name} />
    </div>
  );
}




