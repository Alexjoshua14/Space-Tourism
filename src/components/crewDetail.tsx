import { FC } from 'react'

interface CrewDetailProps {
  name: string,
  bio: string,
  role: string
}

const CrewDetail: FC<CrewDetailProps> = ({ name, bio, role }) => {
  return (
    <div className="h-full max-h-[300px] min-w-fit w-full grid grid-rows-[1fr_1fr_8fr] gap-6 text-center lg:text-left">
      <h3 className="text-[32px] leading-8 text-serif text-white/50">
        {role.toUpperCase()}
      </h3>
      <h2 className="text-[56px] leading-8 text-serif font-light whitespace-nowrap">
        {name.toUpperCase()}
      </h2>
      <div className="w-4/5">
        <p className="font-sans text-secondary leading-relaxed sm:leading-loose">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default CrewDetail