import Background from "@/components/background/crewBackground"
import DetailsWrapper from "./detailsWrapper"
import data from '@/data/data.json' assert { type: "json" };

export default function Crew() {
  const crew = data.crew

  return (
    <>
      <Background />
      <main className="flex min-h-[90vh] flex-col justify-start gap-2 px-4 sm:px-20 pt-16 sm:pt-36 pb-1 sm:pb-4">
        <div className="flex justify-center md:justify-start gap-4 tracking-widest font-header sm:text-3xl whitespace-nowrap">
          <p className="text-white/25">02</p>
          <h1 className="font-light">{`Meet your crew`.toUpperCase()}</h1>
        </div>
        <DetailsWrapper crew={crew} />
      </main>
    </>
  )
}