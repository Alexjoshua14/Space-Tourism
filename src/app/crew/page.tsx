import Background from "@/components/background/crewBackground"
import DetailsWrapper from "./detailsWrapper"
import data from '@/data/data.json' assert { type: "json" };

export default function Crew() {
  const crew = data.crew

  return (
    <>
      <Background />
      <main className="flex min-h-[90vh] flex-col justify-start gap-2 px-4 sm:px-20 pt-16 sm:pt-28 lg:pt-36 pb-1 sm:pb-4">
        <div className="py-6 flex justify-center md:justify-start gap-4 whitespace-nowrap">
          <h5 className="text-white/25">02</h5>
          <h5 className="font-light">{`Meet your crew`.toUpperCase()}</h5>
        </div>
        <DetailsWrapper crew={crew} />
      </main>
    </>
  )
}