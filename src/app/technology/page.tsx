'use client'

import { useState } from "react";
import Image from 'next/image'

import Background from "@/components/background/technologyBackground";
import data from '@/data/data.json' assert { type: "json" };

const Selector = ({ techIndex, setTechIndex }: { techIndex: any, setTechIndex: (index: number) => void }) => {
  return (
    <div className="min-h-fit h-auto md:px-2 lg:px-4 flex md:flex-col gap-8 items-center justify-center">
      <button className={`w-16 lg:w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 0 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
        onClick={() => setTechIndex(0)}
      >
        <h4>
          1
        </h4>
      </button>
      <button className={`w-16 lg:w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 1 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
        onClick={() => setTechIndex(1)}
      >
        <h4>
          2
        </h4>
      </button>
      <button className={`w-16 lg:w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 2 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
        onClick={() => setTechIndex(2)}
      >
        <h4>
          3
        </h4>
      </button>
    </div>
  )
}

const TechDetails = ({ name, description }: { name: string, description: string }) => {
  return (
    <div className="min-h-fit h-auto w-full max-w-[460px] md:max-w-none md:w-fit px-4 mx-auto flex flex-col gap-4 sm:gap-1 items-center justify-center text-center md:block md:text-left">
      <p className="navText text-secondary">
        {`The terminology...`.toUpperCase()}
      </p>
      <h3 className="whitespace-nowrap">
        {name.toUpperCase()}
      </h3>
      <p className="bodyText text-secondary md:w-[90%] md:max-w-[300px] lg:min-w-[400px]">
        {description}
      </p>
    </div>
  )
}

const TechImage = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className="relative h-full max-h-full w-full max-w-full md:aspect-square">
      <Image fill src={src} alt={alt} className="object-contain" />
    </div>
  )
}

export default function Technology() {
  const [techIndex, setTechIndex] = useState(0)

  const technologies = data.technology

  return (
    <>
      <Background />
      <main className="min-h-[90vh] overflow-x-hidden md:pl-10 lg:pl-20 pt-16 sm:pt-28 md:pt-36 pb-1">
        <section className="h-full w-full flex flex-col justify-center">
          <div className="py-3 sm:py-6 md:py-2 flex justify-center sm:justify-start px-10 md:px-0 gap-4 whitespace-nowrap">
            <h5 className="text-white/25">
              03
            </h5>
            <h5>
              {`Space Launch 101`.toUpperCase()}
            </h5>
          </div>

          <div className="w-full h-full max-h-full md:py-14 grid grid-rows-[2fr_3fr] grid-cols-1 gap-4 place-items-center md:flex md:flex-row items-center justify-between">
            <div className="flex md:hidden w-full h-full">
              <TechImage src={technologies[techIndex].images.landscape} alt={technologies[techIndex].name} />
            </div>

            <div className="min-h-fit h-full md:h-fit min-w-fit w-3/4 md:w-1/2 flex flex-col gap-4 md:flex-row justify-around md:justify-between">
              <Selector techIndex={techIndex} setTechIndex={setTechIndex} />
              <TechDetails name={technologies[techIndex].name} description={technologies[techIndex].description} />
            </div >

            <div className="hidden h-full min-w-[30%]  max-w-[527px] aspect-square md:flex items-center justify-center">
              <TechImage src={technologies[techIndex].images.portrait} alt={technologies[techIndex].name} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

//grid lg:grid-cols-[2fr_1fr]