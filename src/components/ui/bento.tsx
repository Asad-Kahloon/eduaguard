import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import Image from "next/image";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  background: ReactNode;
  ImageUrl: string;
  description: string;
  href: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  background,
  ImageUrl,
  description,
  href,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-gray-100 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="w-full flex justify-center">
        <Image 
            src={ImageUrl}
            alt="image"
            width={400}
            height={400}
            className="h-80 w-auto"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 text-center">
        {name}
      </h3>
      <p className="max-w-lg text-gray-700 text-center">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
        <button className="p-2 border-b text-blue-500 rounded-lg cursor-pointer">
            <a href={href} className="w-full flex gap-2 items-center">
            Read More
            <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
        </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };