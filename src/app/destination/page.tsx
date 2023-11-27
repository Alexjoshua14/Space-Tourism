import Background from "@/components/background/destinationsBackground";

import Image from "next/image";
import data from '@/data/data.json' assert { type: "json" };
import DetailsWrapper from "./detailsWrapper";

export default function Destination() {
  const destinations = data.destinations

  return (
    <>
      <Background />
      <main className="flex min-h-[90vh] flex-col justify-start gap-2 px-4 sm:px-20 pt-16 sm:pt-28 lg:pt-36 pb-1">
        <div className="py-6 md:py-2 flex justify-center md:justify-start gap-4 whitespace-nowrap">
          <h5 className="text-white/25">01</h5>
          <h5 className="font-light">{`Pick Your Destination`.toUpperCase()}</h5>
        </div>
        <DetailsWrapper destinations={destinations} />
      </main>
    </>
  )
}