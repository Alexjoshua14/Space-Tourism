'use client'

import { FC, useState } from 'react'
import data from '@/data/data.json' assert { type: "json" };
import TechDetails from '@/components/techDetails'
import TechImage from '@/components/techImage'
import TechSelector from '@/components/techSelector'

interface DetailsWrapperProps {

}

const DetailsWrapper: FC<DetailsWrapperProps> = ({ }) => {
  const [techIndex, setTechIndex] = useState(0)

  const technologies = data.technology

  return (
    <div className="w-full h-full max-h-full md:py-14 grid grid-rows-[2fr_3fr] grid-cols-1 gap-4 place-items-center md:flex md:flex-row items-center justify-between">
      <div className="flex md:hidden w-full h-full">
        <TechImage src={technologies[techIndex].images.landscape} alt={technologies[techIndex].name} />
      </div>

      <div className="min-h-fit h-full md:h-fit min-w-fit w-3/4 md:w-1/2 flex flex-col gap-4 md:flex-row justify-around md:justify-between">
        <TechSelector techIndex={techIndex} setTechIndex={setTechIndex} />
        <TechDetails name={technologies[techIndex].name} description={technologies[techIndex].description} />
      </div >

      <div className="hidden h-full min-w-[30%]  max-w-[527px] aspect-square md:flex items-center justify-center">
        <TechImage src={technologies[techIndex].images.portrait} alt={technologies[techIndex].name} />
      </div>
    </div>
  )
}

export default DetailsWrapper