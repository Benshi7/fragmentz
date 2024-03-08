import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const Projects = () => {
  const list = [
    {
      title: "Gaming App",
      img: "src/assets/app1.jpg",
      price: "$5.50",
    },
    {
      title: "Music App",
      img: "src/assets/app2.jpg",
      price: "$3.00",
    },
    {
      title: "Streaming App",
      img: "src/assets/app3.jpg",
      price: "$10.00",
    },
    {
      title: "3D Design",
      img: "src/assets/app4.jpg",
      price: "$5.30",
    },
    {
      title: "Game Design",
      img: "src/assets/app5.jpg",
      price: "$15.70",
    },
    {
      title: "App Development",
      img: "src/assets/app6.jpg",
      price: "$8.00",
    },
  ];
  return (
    <div className="flex flex-col">
        <div className="flex flex-col items-center xl:px-80">
          <h1 className="text-3xl px-16 font-bold self-start tracking-normal text-center text-violet-500 max-md:max-w-full">Projects</h1>
          <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 mt-8">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
          </div>
    </div>
  )
}

export default Projects
