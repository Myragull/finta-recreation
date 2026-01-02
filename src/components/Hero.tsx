
export const Hero = () => {
  return (
    <div className="flex items-center px-2 py-2 flex-col w-full my-20">
      <button className="border px-4 py-1 rounded-full border-gray-300 hover:bg-gray-200 transition cursor-pointer duration-200 bg-[#e2e8ee] text-gray-700 font-semibold">
        We are hiring Founding Ruby Engineers
      </button>

     <div>
      <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
        Magically simplify <br />accounting and taxes
      </h1>
      <p className="max-w-2xl text-center mt-4 mx-auto text-lg text-neutral-700">
        Automated bookkeeping effortless tax filing, real-time insights. Set up in 10 mins. Back to building by 4:09pm.
      </p>
     </div>

     <div className="flex items-center gap-4 mt-10">
      <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer">
        Get started
      </button>
      <button className="px-4 py-2 rounded-lg text-black font-regular tracking-wide cursor-pointer">
        Pricing &rarr;
      </button>
     </div>

    </div>
  )
}

