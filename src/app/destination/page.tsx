import Background from "@/components/background/destinationsBackground";
import Moon from '@/../public/assets/destination/image-moon.webp'
import Image from "next/image";

export default function Destination() {
  return (
    <main className="flex min-h-screen flex-col justify-end px-20 py-4">
      <Background />
      <div className="flex gap-4 tracking-widest font-header text-3xl">
        <p className="text-white/25">01</p>
        <h1 className="font-light">Pick Your Destination</h1>
      </div>
      <section className="h-fit flex items-center">

        <div className="relative h-min w-1/2 grid place-content-center">
          <Image src={Moon} alt="moon" width={445} height={445} className="object-contain aspect-square" />
        </div>

        <div className="w-1/3 h-full px-5 flex flex-col gap-8">
          <ul className="flex gap-6 font-header font-light text-sm text-secondary">
            <li className="border-b-2 border-b-white text-white py-1">
              {`Moon`.toUpperCase()}
            </li>
            <li className="border-b-2 border-b-transparent py-1">
              {`Mars`.toUpperCase()}
            </li>
            <li className="border-b-2 border-b-transparent py-1">
              {`Europa`.toUpperCase()}
            </li>
            <li className="border-b-2 border-b-transparent py-1">
              {`Titan`.toUpperCase()}
            </li>
          </ul>
          <h2 className="text-[100px] text-serif tracking-wider">
            {`Moon`.toUpperCase()}
          </h2>
          <p className="font-sans text-secondary leading-loose">
            {`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`}
          </p>
          <div className="border-b-[1px] border-b-slate-500/60" />
          <div className="flex w-full">
            <div className="w-1/2 flex flex-col gap-4">
              <p className="text-secondary font-header tracking-widest">
                {`Avg. Distance`.toUpperCase()}
              </p>
              <p className="font-serif text-2xl">
                {`384,400 km`.toUpperCase()}
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <p className="text-secondary font-header tracking-widest">
                {`Est. Travel Time`.toUpperCase()}
              </p>
              <p className="font-serif text-2xl">
                {`3 days`.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}