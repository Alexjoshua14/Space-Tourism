import Background from '@/components/background/homeBackground'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Background />
      <main className="w-full pt-14 sm:pt-28 pb-8 min-h-[90vh] h-full md:min-h-screen lg:min-h-none lg:h-1/2 flex flex-col lg:flex-row gap-8 items-center justify-around">
        <div className="flex flex-col lg:gap-6 px-8 md:px-1 w-full md:w-3/5 max-w-[450px] h-1/2 lg:h-full text-center lg:text-left">
          <h5 className="text-secondary">
            {`So, you want to travel to`.toUpperCase()}
          </h5>
          <h1 className="leading-none">
            {`Space`.toUpperCase()}
          </h1>
          <p className="leading-loose font-sans text-lg text-secondary font-light">
            {`Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/destination" className="relative w-[150px] sm:w-[242px] lg:w-[274px] aspect-square flex items-center justify-center bg-white text-black font-serif text-4xl rounded-full">
            <h4 className="h-full w-full flex items-center justify-center peer">
              Explore
            </h4>
            <div className="-z-10 absolute w-full h-full peer-hover:scale-150 bg-white/25 rounded-full transition-all" />
          </Link>
        </div>
      </main>
    </>
  )
}
