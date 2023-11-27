import { FC } from 'react'

interface DestinationDetailProps {
  name: string,
  description: string,
  distance: string,
  travel: string
}

const DestinationDetail: FC<DestinationDetailProps> = ({ name, description, distance, travel }) => {
  return (
    <div className="flex-1 max-h-[420px] flex flex-col justify-around lg:justify-normal gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left">
      <h2 className="leading-none">
        {name.toUpperCase()}
      </h2>
      <p className="text-secondary bodyText">
        {description}
      </p>
      <div className="border-b-[1px] border-b-slate-500/60 w-full" />
      <div className="flex flex-col items-center gap-4 sm:flex-row w-full">
        <div className="w-1/2 flex flex-col sm:gap-3">
          <p className="text-secondary subheading2">
            {`Avg. Distance`.toUpperCase()}
          </p>
          <p className="subheading1">
            {distance.toUpperCase()}
          </p>
        </div>
        <div className="w-1/2 flex flex-col sm:gap-3">
          <p className="text-secondary subheading2">
            {`Est. Travel Time`.toUpperCase()}
          </p>
          <p className="subheading1">
            {travel.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetail