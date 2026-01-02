import { Container } from "@/components/container";
import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] ">
      {/* fisrstly try to make the div seperately than you can take the container to the bottom or back of the main div or main page<div className="h-40 w-full absolute bg-red-500 inset-0 bg-radial from-white-to-transparent rounded-full"/> */}
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full ">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container className="flex items-center flex-col">
       <Navbar />
       <Hero />
      </Container>
       <div className="relative w-full flex">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via neutral-200 to-transparent pointer-events-none z-0">
        <div className="max-w-7xl mx-auto p-4">
        <Image
        src="/banner.webp"
        alt="banner image"
        width={1000}
        height={1000}
        className="rounded-2xl w-full object-cover object-left-top shadow-md border-neutral-200 mask-b-from-0% to-100% "
        />
        </div>
        </div>
       </div>
    </div>
  )
}