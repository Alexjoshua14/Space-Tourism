'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'


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

const MobileNavBar = ({ pathname }: { pathname: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger role='Open navigation' aria-label='Main' className="absolute right-0 p-8">
        <Image src="/assets/shared/icon-hamburger.svg" width={24} height={24} alt="hamburger" />
      </SheetTrigger>
      <SheetContent className="bg-opacity-10 backdrop-blur-2xl border-0 text-white">
        <SheetDescription>
          <nav>
            <ul className="h-full min-w-fit w-1/2 flex flex-col gap-8 px-5 py-20">
              {navOptions.map((option, index) => (
                <li key={`nav-link-${option.name}`}
                  className={`h-full border-b-2 transition-colors ${pathname === option.path ? "border-white" : "border-transparent"}`}>
                  <Link href={option.path} className="flex gap-3 tracking-widest text-lg text-white font-header" onClick={() => setOpen(false)}>
                    <p className="font-bold tracking-[0.2rem]">
                      {`0${index}`}
                    </p>
                    <p className="font-extralight">
                      {option.name.toUpperCase()}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetDescription>

      </SheetContent>
    </Sheet>
  )
}

const NavBar: FC<NavBarProps> = ({ }) => {
  const pathname = usePathname()

  return (
    <div className="absolute top-0 lg:top-8 left-0 min-w-fit w-full flex h-24">
      {/** Desktop */}
      <nav className="hidden min-w-fit w-full sm:flex h-full">
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
              <Link href={option.path} className="flex gap-3 tracking-widest font-header">
                <p className="hidden lg:block font-bold tracking-[0.2rem]">
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
      {/** Mobile */}
      <div className="sm:hidden">
        <MobileNavBar pathname={pathname} />
      </div>
    </div>
  )
}

export default NavBar