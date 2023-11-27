import { FC } from 'react'
import Image from 'next/image'

interface TechImageProps {
  src: string,
  alt: string
}

const TechImage: FC<TechImageProps> = ({ src, alt }) => {
  return (
    <div className="relative h-full max-h-full w-full max-w-full md:aspect-square">
      <Image fill src={src} alt={alt} className="object-contain" />
    </div>
  )
}

export default TechImage