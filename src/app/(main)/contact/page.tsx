import { GradualSpacing } from '@/components/ui/gradualSpacing'
import { LetterPullup } from '@/components/ui/letterPullup'
import React from 'react'

function page() {

  return (
    <>
        <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
            <h1 className='text-3xl sm:text-5xl font-bold font-serif w-2/3 text-center '>
                <GradualSpacing text={'Contact Eduaguide'} className='text-black' />
            </h1>
            <p className='text-3xl font-serif text-center'>Have questions or need assistance? We&apos;re here to help!</p>
        </div>

        <div className='py-16 px-8 text-black'>
            <h1 className="text-center text-4xl font-serif font-bold mb-8">
                <GradualSpacing text={'Get In Touch'} className='text-black' />
            </h1>
            <p className='text-2xl font-serif text-center sm:w-2/3 mx-auto'>If you have any queries or require support, feel free to contact us using the form below or via the provided details.</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-24 px-8 py-16 w-full sm:w-2/3 mx-auto'>

            <div className='border-l-4 border-gray-600 px-16 py-10 flex flex-col justify-center gap-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl text-gray-600 font-semibold'>Email</h1>
                    <p className='text-lg text-gray-600'>support@eduaguide.com</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl text-gray-600 font-semibold'>Phone</h1>
                    <p className='text-lg text-gray-600'>+1 234-567-890</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl text-gray-600 font-semibold'>Address</h1>
                    <p className='text-lg text-gray-600'>123 Eduaguide Street, <br/>
                    Education City, ED 12345</p>
                </div>
            </div>

            <div className="relative px-16 py-10 flex flex-col gap-4">
                <div className="absolute inset-0 pointer-events-none">
                    {/* Top-left */}
                    <div className="absolute top-0 left-0 border-t-4 border-l-4 border-gray-600 w-10 h-10"></div>
                    {/* Top-right */}
                    <div className="absolute top-0 right-0 border-t-4 border-r-4 border-gray-600 w-10 h-10"></div>
                    {/* Bottom-left */}
                    <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-gray-600 w-10 h-10"></div>
                    {/* Bottom-right */}
                    <div className="absolute bottom-0 right-0 border-b-4 border-r-4 border-gray-600 w-10 h-10"></div>
                </div>
                <h1>
                    <LetterPullup words={"Contact Us Form"} delay={0.05} className="text-2xl font-bold text-gray-600" />
                </h1>
                <div className="flex flex-col gap-2 w-full border-b border-gray-600 p-2">
                    <input
                    type="text"
                    placeholder="Name"
                    className="w-full focus:outline-none text-black placeholder-gray-500"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full border-b border-gray-600 p-2">
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full focus:outline-none text-black placeholder-gray-500"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full border-b border-gray-600 p-2">
                    <textarea
                    placeholder="Message"
                    rows={2}
                    className="w-full focus:outline-none text-black placeholder-gray-500"
                    />
                </div>
                <button className='mx-auto py-2 px-4 bg-gray-600 rounded-lg hover:bg-gray-700 transition-all duration-300'>
                    Submit
                </button>
            </div>
        </div>
    </>
  )
}

export default page
