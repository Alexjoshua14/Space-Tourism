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
    <section className="flex-1 flex flex-col gap-8">
      <div className="flex-1 relative sm:absolute sm:bottom-0 lg:right-0 h-[45vh] lg:h-4/5 w-full sm:w-1/2 place-self-center grid place-content-center border-b-[1px] sm:border-0 border-b-slate-500/60 pointer-events-none">
        <Image src={crew[crewIndex].images.webp} alt={`Image of crew member: ${crew[crewIndex].name}`} fill className="object-contain aspect-square" quality={100} />
      </div>
      <div className="w-full lg:w-1/2 h-1/3 px-5 flex flex-col gap-4 items-center lg:items-start lg:justify-end">
        <CrewDetail {...crew[crewIndex]} />
        <ul className="flex gap-1 text-secondary">
          {crew.map((crew, index) => (
            <li key={`crew-member-${crew.name}`}>
              <button onClick={() => setCrewIndex(index)} className="w-full h-full p-2">
                <div className={`h-[10px] w-[10px] lg:h-4 lg:w-4 rounded-full transition-all ${crewIndex === index ? "bg-white" : "bg-[#979797]/20 hover:bg-[#979797]/75"}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DetailsWrapper