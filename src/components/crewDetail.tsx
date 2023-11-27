import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface CrewDetailProps extends HTMLAttributes<HTMLDivElement> {
  name: string,
  bio: string,
  role: string
}

const CrewDetail: FC<CrewDetailProps> = ({ name, bio, role, className }) => {
  return (
    <div className={cn("min-h-[250px] h-full w-full max-w-[600px] lg:max-w-[600px] flex flex-col gap-4 leading-none text-center lg:text-left", className)}>
      <h4 className="text-white/50">
        {role.toUpperCase()}
      </h4>
      <h3 className="whitespace-nowrap">
        {name.toUpperCase()}
      </h3>
      <div className="lg:w-4/5 place-self-center lg:place-self-start">
        <p className="bodyText font-sans text-secondary leading-relaxed sm:leading-loose">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default CrewDetail