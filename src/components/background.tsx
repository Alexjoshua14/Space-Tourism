import { FC } from 'react'
import Image from 'next/image'

import desktopBackground from '../../public/assets/home/background-home-desktop.jpg'
import tabletBackground from '../../public/assets/home/background-home-tablet.jpg'
import mobileBackground from '../../public/assets/home/background-home-mobile.jpg'

interface BackgroundProps {

}

const Background: FC<BackgroundProps> = ({ }) => {
  return (
    <>
      <Image src={desktopBackground} fill sizes="100vw" alt="background" className="-z-40 absolute object-cover hidden lg:block" quality={100} priority />
      <Image src={tabletBackground} fill sizes="100vw" alt="background" className="-z-40 absolute object-cover hidden md:block lg:hidden" quality={100} priority />
      <Image src={mobileBackground} fill sizes="100vw" alt="background" className="-z-40 absolute object-cover md:hidden" quality={100} priority />
    </>
  )
}

export default Background