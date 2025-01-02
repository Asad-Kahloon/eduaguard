"use client";

import { cn } from "@/lib/utils";
import {DotPattern}  from "@/components/ui/dotPattern";
import { BorderBeam } from "@/components/ui/borderBeam";
import {LetterPullup} from "@/components/ui/letterPullup";
import InteractiveHoverButton from "@/components/ui/interactiveHoverButton"
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  }
    
  return (
    <div className="relative py-8 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <form className="relative flex flex-col items-center gap-10 rounded-lg border bg-none md:shadow-xl px-24 py-16">

        <h1>
          <LetterPullup words={"Sign In"} delay={0.05} />
        </h1>

        <div className="flex flex-col gap-2 w-96 border-b border-gray-600 rounded-lg p-2">
          <input type="text" placeholder="username"className=" w-full focus:outline-none text-black placeholder-gray-500"/>
        </div>
        
        <div className="flex flex-col gap-2 w-96 border-b border-gray-600 rounded-lg p-2 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full focus:outline-none text-black placeholder-gray-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.506 1.7-1.53 3.203-2.917 4.388M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223C5.613 4.423 8.74 2 12 2c4.478 0 8.268 2.943 9.542 7-.506 1.7-1.53 3.203-2.917 4.388M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex flex-col gap-4 w-96">

          <div className="relative justify-center mx-auto">
            <InteractiveHoverButton text="Submit" className="border border-gray-600 hover:bg-gray-200 text-black " />
          </div>

          <div className="flex flex-col gap-2 w-96 text-sm">
            <Link href='/register' className="hover:border-b hover:border-blue-500 text-blue-500 w-fit transition-all duration-300">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>

        </div>

      <BorderBeam size={450} duration={12} delay={9} />
      </form>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
