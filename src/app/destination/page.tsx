import Background from "@/components/background/destinationsBackground";

import Image from "next/image";
import data from '@/data/data.json' assert { type: "json" };
import DetailsWrapper from "./detailsWrapper";

export default function Destination() {
  console.log(JSON.stringify(data))
  const destinations = data.destinations

  return (
    <main className="flex h-screen flex-col justify-end px-4 sm:px-20 pt-32 pb-4">
      <Background />
      <div className="flex justify-center md:justify-start gap-4 tracking-widest font-header sm:text-3xl whitespace-nowrap">
        <p className="text-white/25">01</p>
        <h1 className="font-light">Pick Your Destination</h1>
      </div>
      <DetailsWrapper destinations={destinations} />
    </main>
  )
}