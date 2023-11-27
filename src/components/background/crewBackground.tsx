import { FC } from 'react'
import Image from 'next/image'

import desktopBackground from '@/../public/assets/crew/background-crew-desktop.jpg'
import tabletBackground from '@/../public/assets/crew/background-crew-tablet.jpg'
import mobileBackground from '@/../public/assets/crew/background-crew-mobile.jpg'

interface BackgroundProps {

}

const Background: FC<BackgroundProps> = ({ }) => {
  return (
    <div className="-z-40 fixed w-screen h-screen">
      <Image src={desktopBackground} fill sizes="100vw" alt="background" className="object-cover hidden lg:block" quality={100} priority />
      <Image src={tabletBackground} fill sizes="100vw" alt="background" className="object-cover hidden md:block lg:hidden" quality={100} priority />
      <Image src={mobileBackground} fill sizes="100vw" alt="background" className="object-cover md:hidden" quality={100} priority />
    </div>
  )
}

export default Background