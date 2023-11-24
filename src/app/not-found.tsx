import Image from 'next/image'
import { FC } from 'react'


export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-2 sm:p-24">
      <div className=" relative h-1/2 w-full">
        <Image src="/error.png" fill sizes="100vw" alt="error" className="object-contain" />
      </div>
      <div className="max-w-[800px] flex flex-col items-center justify-center text-center p-4 sm:p-14">
        <h1 className="text-4xl">
          This Page is Lost in Space
        </h1>
        <p className="text-secondary">
          {`You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.`}
        </p>
      </div>
    </div>
  )
}