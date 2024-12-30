import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
    return (
        <div className='py-8 shadow-[0_-2px_4px_rgba(0,0,0,0.1)]'>
          <p className='w-full text-center text-2xl font-serif font-bold'>
            © 2024 Simple Website. All rights reserved.
          </p>
          <div className='flex justify-center gap-16 mt-4'>
            <Link href='#' className=' p-2 text-2xl rounded-full text-white bg-blue-500 hover:bg-blue-600'>
              <Facebook />
            </Link>
            <Link href='#' className=' p-2 text-2xl rounded-full text-white bg-blue-400 hover:bg-blue-500'>
              <Twitter />
            </Link>
            <Link href='#' className='p-2 text-2xl rounded-full text-purple-400 bg-gray-900 hover:bg-gray-950'>
              <Instagram />
            </Link>
          </div>
        </div>
      );
}

export default Footer
