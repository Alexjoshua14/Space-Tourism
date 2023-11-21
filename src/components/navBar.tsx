'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'


interface NavBarProps {

}

const navOptions = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Destination',
    path: '/destination'
  },
  {
    name: 'Crew',
    path: '/crew'
  },
  {
    name: 'Technology',
    path: '/technology'
  },
]

const NavBar: FC<NavBarProps> = ({ }) => {
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 lg:top-8 left-0 min-w-fit w-full flex h-24">
      <div className="z-10 w-1/2 px-4 translate-x-6 lg:translate-x-10 flex flex-row gap-16 items-center">
        <div className="min-w-fit">
          <Image src="/assets/shared/logo.svg" width={48} height={48} alt="logo" />
        </div>
        <div className="hidden lg:block z-10 w-full h-[1px] bg-white" />
      </div>
      <ul className="h-full min-w-fit w-1/2 flex items-center justify-center gap-12 bg-white bg-opacity-5 backdrop-blur px-14">
        {navOptions.map((option, index) => (
          <li key={`nav-link-${option.name}`}
            className={`h-full grid place-items-center border-b-2 ${pathname === option.path ? "border-white" : "border-transparent"}`}>
            <Link href={option.path} className="flex gap-3 tracking-widest">
              <p className="hidden lg:block font-medium">
                {`0${index}`}
              </p>
              <p className="text-sm lg:text-base font-extralight">
                {option.name.toUpperCase()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar