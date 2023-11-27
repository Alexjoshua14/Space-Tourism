import { FC } from 'react'

interface TechDetailsProps {
  name: string,
  description: string
}

const TechDetails: FC<TechDetailsProps> = ({ name, description }) => {
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

export default TechDetails