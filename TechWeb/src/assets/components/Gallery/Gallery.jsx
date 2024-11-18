import React from 'react'
import g1 from "../GalleryImg/belleza.jpg"
import g2 from "../GalleryImg/cabello.jpg"
import g3 from "../GalleryImg/gadget.jpg"
import g4 from "../GalleryImg/ropa.jpg"
import g5 from "../GalleryImg/pose.jpg"
import g6 from "../GalleryImg/zapatos.jpg"


const Gallery = () => {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1 " >
                    <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block " src={g1}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={g2}/>
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src={g3}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src={g4}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={g5}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src={g6}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default Gallery