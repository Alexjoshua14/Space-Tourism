import Background from '@/components/background/homeBackground'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-end p-40 min-h-screen">
      <Background />
      <section className="w-full h-1/2 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between px-20">
        <div className="flex flex-col gap-6 w-[450px] h-1/2 lg:h-full text-center lg:text-left">
          <h2 className="text-2xl leading-none tracking-[.35rem] font-header text-secondary">
            {`So, you want to travel to`.toUpperCase()}
          </h2>
          <h1 className="text-center text-[150px] leading-none font-serif">
            {`Space`.toUpperCase()}
          </h1>
          <p className="leading-loose font-sans text-lg text-secondary font-light">
            {`Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[242px] lg:w-[274px] aspect-square flex items-center justify-center bg-white text-black font-serif text-4xl rounded-full">
            Explore
          </div>
        </div>
      </section>
    </main>
  )
}
