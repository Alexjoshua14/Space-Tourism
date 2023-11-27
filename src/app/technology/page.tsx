import Background from "@/components/background/technologyBackground";
import DetailsWrapper from "./detailsWrapper";

export default function Technology() {


  return (
    <>
      <Background />
      <main className="min-h-[90vh] overflow-x-hidden md:pl-10 lg:pl-20 pt-16 sm:pt-28 md:pt-36 pb-1">
        <section className="h-full w-full flex flex-col justify-center">
          <div className="py-3 sm:py-6 md:py-2 flex justify-center sm:justify-start px-10 md:px-0 gap-4 whitespace-nowrap">
            <h5 className="text-white/25">
              03
            </h5>
            <h5>
              {`Space Launch 101`.toUpperCase()}
            </h5>
          </div>
          <DetailsWrapper />
        </section>
      </main>
    </>
  )
}