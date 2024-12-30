'use client'
import React, { useState } from 'react'
import { GradualSpacing } from '../ui/gradualSpacing';
import { BorderBeam } from '../ui/borderBeam';
import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

function Header() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'News',
          url: '/news',
        },
        {
          label: 'Courses',
          options: [
            {
              label: 'Web Development',
              url: '#',
            },
            {
              label: 'App Development',
              url: '#',
            },
            {
              label: 'SEO',
              url: '#',
            },
          ],
        },
        {
          label: 'Admissions',
          url: '#',
        },
        {
          label: 'Lectures',
          url: '#',
        },
        {
          label: 'Online Tests',
          url: '#',
        },
        {
          label: 'About',
          url: '#',
        },
        {
          label: 'Contact Us',
          url: '#',
        },
      ];
      

  return (
    <>
      <div className='w-full flex justify-between py-4 px-4 sm:px-16 items-center'>
        <Image
            src="/images/logo.png"
            alt="Logo"
            width={400}
            height={400}
            className='h-32 w-auto hidden sm:block'
        />
        <h1 className='text-4xl sm:text-6xl font-bold sm:font-extrabold sm:tracking-widest'>
            <GradualSpacing text={'EDUAGUIDE'} />
        </h1>
        <div className='flex gap-4 sm:gap-8'>
            <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-100 shadow-md md:shadow-xl cursor-pointer hover:bg-gray-200">
                <Link href='/login' className="px-4 py-2">
                    Log In
                </Link>
                <BorderBeam size={100} duration={12} delay={9} />
            </div>
            <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-100 shadow-md md:shadow-xl cursor-pointer hover:bg-gray-200">
                <Link href='/register' className="px-4 py-2">
                    Register
                </Link>
                <BorderBeam size={100} duration={12} delay={9} />
            </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-4 px-8 items-center relative shadow-md mt-4 bg-gray-300">
      {/* Show first three links on small screens */}
      <div className="sm:hidden flex justify-between w-full">
        {links.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent bubbling to document
          >
            {item.options ? (
              <Dropdown>
                <DropdownTrigger className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                <span className="flex gap-2">{item.label} <ChevronDown /></span>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="shadow-md bg-white">
                  {item.options.map((option, idx) => (
                    <DropdownItem key={idx} className="border-gray-300 hover:text-blue-500">
                      <Link href={option.url} className="block px-4 py-2 hover:text-blue-500 hover:underline hover:decoration-blue-500 underline-offset-4 transition-all duration-300">
                      {option.label}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link href={item.url} className="hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-300">
                {item.label}
              </Link>
            )}
          </div>
        ))}
        
        {/* Menu button on small screens */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-2xl p-2"
        >
          <Menu />
        </button>
      </div>

      {/* Show all links on medium, large, and extra-large screens */}
      <div className="hidden sm:flex justify-between w-full">
        {links.map((item, index) => (
          <div
            key={index}
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent bubbling to document
          >
            {item.options ? (
              <Dropdown>
                <DropdownTrigger className="cursor-pointer hover:text-blue-500 transition-all duration-300">
                  <span className="flex gap-2">{item.label} <ChevronDown /></span>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="shadow-md bg-white">
                  {item.options.map((option, idx) => (
                    <DropdownItem key={idx} className="border-gray-300 hover:text-blue-500">
                      <Link href={option.url} className="block px-4 py-2 hover:text-blue-500 hover:underline hover:decoration-blue-500 underline-offset-4 transition-all duration-300">
                        {option.label}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link href={item.url} className="hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-300">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="w-64 bg-white h-full p-4 relative">
            {/* Close button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              <X />
            </button>

            {/* Links in the sidebar */}
            <div className="space-y-4">
              {links.slice(3).map((item, index) => (
                <div key={index}>
                  {item.options ? (
                    <Dropdown>
                      <DropdownTrigger className="cursor-pointer hover:text-blue-500">
                        <span className="flex gap-2">{item.label} <ChevronDown /></span>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions" className="border-0 shadow-md ring-0 focus:border-0 focus:outline-none">
                        {item.options.map((option, idx) => (
                          <DropdownItem key={idx} className="border-gray-300 hover:text-blue-500">
                          <Link href={option.url} className="block px-4 py-2 hover:text-blue-500 hover:underline hover:decoration-blue-500 underline-offset-4 transition-all duration-300">
                            {option.label}
                          </Link>
                        </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Link href={item.url} className="hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-300">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Header
