
export default function Destination() {
  return (
    <main className="flex min-h-screen flex-col justify-end p-20">
      <section className="h-full flex items-end">
        <div className="w-1/2">
          <h1>Pick Your Destination</h1>

        </div>
        <div className="w-1/3 px-5 flex flex-col gap-8">
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
          <h2 className="text-6xl text-serif tracking-wider">
            {`Moon`.toUpperCase()}
          </h2>
          <p className="font-sans text-secondary leading-loose">
            {`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`}
          </p>
          <div className="border-b-[1px] border-b-slate-500/60" />
          <div className="w-1/2">
            <div>
              <p>
                {`Avg. Distance`.toUpperCase()}
              </p>
              <p>
                {`384,400 km`}
              </p>
            </div>
            <div>
              <p>
                {`Est. Travel Time`.toUpperCase()}
              </p>
              <p>
                {`3 days`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}