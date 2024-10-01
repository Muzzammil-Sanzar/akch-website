import hero from "../../assets/hero.png"
export default function Explore() {
  return (
    <div className="max-w-[1170px] mx-auto rounded-3xl bg-orange-250 px-10 py-5">
      <div className="flex flex-wrap lg:flex-nowrap items-center  sm:gap-y-10 justify-between">
        <div className="basis-full lg:basis-3/5 space-y-10">
          <div className="space-y-2">
            <p className="salsa tex-[16px] sm:text-[32px]">Explore</p>
            <h1 className="text-orange-150 text-center lg:text-start rammetto text-[20x] sm:text-[52px] lg:text-[40px] xl1:text-[52px]">“Traditional Taste of South India”</h1>
            <p className="text-sm sm:text-lg text-center lg:text-start text-gray-250 max-w-md mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur. Sagittis quam cras eu velit ultrices </p>
          </div>
          <div className="flex items-center justify-center">
            {/* <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md max-w-md">
              <div className="px-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                className="flex-grow px-2 py-2 text-gray-700 focus:outline-none rounded-l-full"
                placeholder="Search"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-r-full px-4 py-2 flex items-center gap-1">
                <span>Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 10h10m-9 6h8" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-auto">
          <img src={hero} alt="akch" />
        </div>
      </div>
    </div>
  )
}
