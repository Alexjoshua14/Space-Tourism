'use client'

import DestinationDetail from '@/components/destinationDetail'
import { FC, useState } from 'react'
import Image from 'next/image'
import Moon from '@/../public/assets/destination/image-moon.webp'

interface DetailsWrapperProps {
  destinations:
  {
    name: string,
    description: string,
    distance: string,
    travel: string
    images: {
      png: string,
      webp: string
    }
  }[]

}

const DetailsWrapper: FC<DetailsWrapperProps> = ({ destinations }) => {
  const [destinationIndex, setDestinationIndex] = useState(0)

  return (
    <section className="flex-1 flex flex-col gap-2 sm:gap-8 lg:grid lg:grid-cols-2 py-2 sm:py-8">
      <div className="relative min-h-[16vh] md:h-[300px] lg:h-full lg:max-h-none w-full place-self-center grid place-content-center">
        <Image src={destinations[destinationIndex].images.webp} alt={`Image of ${destinations[destinationIndex].name}`} fill className="object-contain aspect-square" />
      </div>
      <div className="flex-1 md:min-w-[500px] lg:w-1/3 h-full px-4 flex flex-col gap-4 md:gap-8 lg:gap-10 items-center lg:items-start">
        <ul className="flex gap-6 font-header font-light text-sm text-secondary">
          {destinations.map((destination, index) => (
            <li
              key={`destination-${destination.name}`}
              className={`border-b-2 ${destinationIndex === index ? "border-active" : "border-idle"} text-white py-1 transition-all`}
            >
              <button
                onClick={() => setDestinationIndex(index)}
                className="h-full w-full transition-all"
              >
                {destination.name.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <DestinationDetail {...destinations[destinationIndex]} />
      </div>
    </section>
  )
}

export default DetailsWrapper