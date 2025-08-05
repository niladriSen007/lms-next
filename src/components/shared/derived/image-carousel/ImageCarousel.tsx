"use client"

import { MouseEvent, useCallback, useState } from "react";
import { ImageCaouselItem } from "./types"
import { Button } from "@/components/ui/button";
import { IMAGES } from "../data/constant";
import Image from "next/image";

const ImageCarousel = ({ images = IMAGES }: Readonly<{
  images: ReadonlyArray<ImageCaouselItem>
}>) => {

  const [currIndex, setCurrIndex] = useState(0);
  const currImage = images[currIndex];


  const changeCarouselImage = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const direction = target.dataset.direction;
    if (direction === "prev") {
      setCurrIndex(((currIndex - 1) + images?.length) % images?.length)
    } else if (direction === "next") {
      setCurrIndex(((currIndex + 1) + images?.length) % images?.length)
    } else {
      return
    }
  }, [currIndex])

  const changeCarouselImageByDots = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const imageId = target?.dataset?.imageid
    if (!imageId) return
    setCurrIndex(Number(imageId))
  }, [currIndex])

  return (
    <div className="w-[250px] h-[350px]  relative overflow-hidden rounded-md" onClick={changeCarouselImage}>
      <Image className="w-full h-full object-cover" src={currImage?.src} alt={currImage?.alt} key={currImage?.src} width={500} height={500} />
      <Button className="left-2 carousel-button" aria-label="Previous image" data-direction="prev" >&#10094;</Button>
      <Button className="right-2 carousel-button" aria-label="Next image" data-direction="next" > &#10095;</Button>
      <section className="absolute bottom-2 left-1/2 translate-x-[-50%]  flex gap-3 bg-gray-800/50 px-3 py-2 rounded-md"
        onClick={changeCarouselImageByDots}
      >
        {
          images?.map((_, index) => (
            <div
              key={index}
              data-imageid={index}
              className={`size-2 cursor-pointer rounded-full 
                ${index === currIndex ? "bg-white" : "bg-gray-400/30"}`} />
          ))
        }
      </section>
    </div>
  )
}
export default ImageCarousel