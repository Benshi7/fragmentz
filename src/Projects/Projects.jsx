import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col px-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-normal text-center text-violet-500 max-md:max-w-full">Projects</h1>
          <div className="flex flex-col items-center w-full max-w-[1440px]">
            <div className="flex flex-row items-center justify-center w-full">
              <div className="flex items-center justify-center w-5/12">
              <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
          </div>
    </div>
  )
}

export default Projects

