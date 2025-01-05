import { BorderBeam } from "@/components/ui/borderBeam";
import BoxReveal from "@/components/ui/boxReveal";
import { NeonGradientCard } from "@/components/ui/magicCard";
import Link from "next/link";
import { Cog, Search, Users } from 'lucide-react';

export default function home() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center overflow-hidden pt-8 min-h-[600px] gap-6 bg-gray-100 p-8 text-center">
        <BoxReveal boxColor={"#776f34"} duration={0.5}>
          <p style={{color:'#776f34'}} className="text-[3.5rem] font-semibold">
          Make your market share data actionable<span className="text-[#776f34]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#776f34"} duration={0.5}>
            <p className="text-xl text-gray-500 font-bold">
            Turn your retail audit data into granular, actionable, and timely insights for your sales and marketing teams.
            </p>
        </BoxReveal>

        <BoxReveal boxColor={"#776f34"} duration={0.5}>
        <div className='flex gap-4 font-serif font-bold'>
            <div className="relative flex h-auto  text-white flex-col items-center justify-center overflow-hidden rounded-lg border bg-blue-500 shadow-md md:shadow-xl cursor-pointer hover:bg-blue-600">
                <Link href='#' className="px-4 py-2">
                    Learn More
                </Link>
                <BorderBeam size={100} duration={12} delay={9} />
            </div>
            <div className="relative flex h-auto text-white flex-col items-center justify-center overflow-hidden rounded-lg border bg-blue-500 shadow-md md:shadow-xl cursor-pointer hover:bg-blue-600">
                <Link href='#' className="px-4 py-2">
                    Request A Demo
                </Link>
                <BorderBeam size={100} duration={12} delay={9} />
            </div>
        </div>
        </BoxReveal>
      </div>
      <div className="p-16 flex flex-col sm:flex-row justify-start sm:justify-center items-center sm:items-start  gap-6">

        <NeonGradientCard className="text-center flex flex-col gap-y-8 sm:w-1/3 bg-none text-black">
          <p className="text-8xl font-bold">
            <Search color="#ac9e02" strokeWidth={3} size={100} className="mx-auto text-4xl"/>
          </p>
          <p className="mt-4 text-4xl font-bold">
            Search
          </p>
          <p className="mt-6 text-xl">
            Find what you&apos;re looking for quickly with our search functionality.
          </p>
        </NeonGradientCard>

        <NeonGradientCard className="text-center flex flex-col gap-y-8 sm:w-1/3 bg-none text-black">
          <p className="text-8xl font-bold">
            <Users color="#ac9e02" strokeWidth={3} size={100} className="mx-auto text-4xl"/>
          </p>
          <p className="mt-4 text-4xl font-bold">
          Community
          </p>
          <p className="mt-6 text-xl">
          Join a growing community of like-minded individuals.
          </p>
        </NeonGradientCard>
        
        <NeonGradientCard className="text-center flex flex-col gap-y-8 sm:w-1/3 bg-none text-black">
          <p className="text-8xl font-bold">
            <Cog color="#ac9e02" strokeWidth={3} size={100} className="mx-auto text-4xl"/>
          </p>
          <p className="mt-4 text-4xl font-bold">
          Tools
          </p>
          <p className="mt-6 text-xl">
          Explore a set of tools designed to enhance your experience.
          </p>
        </NeonGradientCard>

      </div>
    </>
  );
}
