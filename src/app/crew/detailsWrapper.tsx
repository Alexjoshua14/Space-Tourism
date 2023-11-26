'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import CrewDetail from '@/components/crewDetail'

interface DetailsWrapperProps {
  crew:
  {
    name: string,
    images: {
      png: string,
      webp: string
    },
    role: string,
    bio: string,
  }[]

}

const DetailsWrapper: FC<DetailsWrapperProps> = ({ crew }) => {
  const [crewIndex, setCrewIndex] = useState(0)

  return (
    <section className="flex-1 grid grid-rows-[1fr_3fr] md:grid-rows-[1fr_2fr] gap-2 sm:gap-8 lg:grid-rows-1 lg:grid-cols-2">
      <div className="absolute bottom-0  lg:right-0 min-h-[100px] h-1/2 lg:h-4/5 w-1/2 place-self-center grid place-content-center">
        <Image src={crew[crewIndex].images.webp} alt={`Image of crew member: ${crew[crewIndex].name}`} fill className="object-contain aspect-square" quality={100} />
      </div>
      <div className="md:min-w-[500px] lg:w-full h-1/3 lg:h-full px-5 flex flex-col gap-6 sm:gap-12 items-center lg:items-start lg:justify-end">
        <CrewDetail {...crew[crewIndex]} />
        <ul className="flex gap-1 text-secondary">
          {crew.map((crew, index) => (
            <li key={`crew-member-${crew.name}`}>
              <button onClick={() => setCrewIndex(index)} className="w-full h-full p-2">
                <div className={`h-4 w-4 rounded-full transition-all ${crewIndex === index ? "bg-white" : "bg-[#979797]/20 hover:bg-[#979797]/75"}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DetailsWrapper