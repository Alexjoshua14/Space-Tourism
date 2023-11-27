'use client'

import { FC } from 'react'

interface TechSelectorProps {
  techIndex: number
  setTechIndex: (index: number) => void
}

const TechSelector: FC<TechSelectorProps> = ({ techIndex, setTechIndex }) => {
  return (
    <div className="min-h-fit h-auto md:px-2 lg:px-4 flex md:flex-col gap-8 items-center justify-center">
      {
        Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
          <button key={i} className={`w-16 lg:w-20 aspect-square rounded-full grid place-content-center border-[1px] ${techIndex === i - 1 ? "bg-white text-black border-white" : "bg-transparent border-white/25 hover:border-white"} transition-colors`}
            onClick={() => setTechIndex(i - 1)}
          >
            <h4>
              {i}
            </h4>
          </button>
        ))
      }
    </div>
  )
}

export default TechSelector