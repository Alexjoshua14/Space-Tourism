import { FC } from 'react'

interface DestinationDetailProps {
  name: string,
  description: string,
  distance: string,
  travel: string
}

const DestinationDetail: FC<DestinationDetailProps> = ({ name, description, distance, travel }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 items-center lg:items-start text-center lg:text-left">
      <h2 className="text-[56px] md:text-[80px] lg:text-[100px] leading-8 text-serif tracking-wider">
        {name.toUpperCase()}
      </h2>
      <p className="font-sans text-secondary leading-loose ">
        {description}
      </p>
      <div className="border-b-[1px] border-b-slate-500/60 w-full" />
      <div className="flex flex-col items-center gap-4 sm:flex-row w-full">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-secondary font-header tracking-widest">
            {`Avg. Distance`.toUpperCase()}
          </p>
          <p className="font-serif text-2xl">
            {distance.toUpperCase()}
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-secondary font-header tracking-widest">
            {`Est. Travel Time`.toUpperCase()}
          </p>
          <p className="font-serif text-2xl">
            {travel.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetail