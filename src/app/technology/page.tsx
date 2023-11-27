'use client'

import Background from "@/components/background/technologyBackground";
import { useState } from "react";
import data from '@/data/data.json' assert { type: "json" };

export default function Technology() {
  const [techIndex, setTechIndex] = useState(1)

  const technologies = data.technology

  return (
    <>
      <Background />
      <main className="h-[90vh] max-w-screen overflow-x-hidden pl-4 sm:pl-20 pt-16 sm:pt-28 lg:pt-36 pb-1 sm:pb-4 grid lg:grid-cols-[2fr_1fr] gap-32 border-2 border-teal-800">
        <div className="h-fit w-full my-auto grid lg:grid-cols-[1fr_4fr] gap-20 border-2 border-pink-700">
          <div className="h-auto flex flex-col gap-8 items-center justify-center border-2 border-fuchsia-500">
            <button className={`w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 1 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
              onClick={() => setTechIndex(1)}
            >
              <h4>
                1
              </h4>
            </button>
            <button className={`w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 2 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
              onClick={() => setTechIndex(2)}
            >
              <h4>
                2
              </h4>
            </button>
            <button className={`w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === 3 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
              onClick={() => setTechIndex(3)}
            >
              <h4>
                3
              </h4>
            </button>
          </div>

          <div className="h-auto w-full border-2 border-orange-500">
            <div className="h-full w-full border-2 border-orange-300">
              <p className="navText text-secondary">
                {`The terminology...`.toUpperCase()}
              </p>
              <h3 className="whitespace-nowrap">
                {technologies[techIndex - 1].name.toUpperCase()}
              </h3>
              <p className="bodyText text-secondary max-w-[480px]">
                {technologies[techIndex - 1].description}
              </p>
            </div>
          </div>
        </div>

        <div className="h-auto lg:min-w-[400px] w-full border-2 border-yellow-700">
          <div className="h-full w-full bg-yellow-600/60">

          </div>
        </div>
      </main>
    </>
  )
}