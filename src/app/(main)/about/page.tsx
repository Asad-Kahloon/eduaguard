import { BorderBeam } from '@/components/ui/borderBeam'
import { GradualSpacing } from '@/components/ui/gradualSpacing'
import React from 'react'

function page() {

  return (
    <>
        <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
            <h1 className='text-3xl sm:text-5xl font-bold font-serif w-2/3 text-center '>
                <GradualSpacing text={'About Eduaguide'} className='text-black' />
            </h1>
            <p className='text-3xl font-serif text-center'>Your trusted guide to academic excellence and career growth.</p>
        </div>

        <div className='p-8 sm:p-20 flex justify-center'>
        <div className="relative flex h-auto w-fit gap-14 px-10 py-10 sm:px-24 sm:py-32 flex-col overflow-hidden rounded-lg border bg-gray-100 shadow-md md:shadow-xl">
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold text-blue-600'>
                    Who We Are
                </h1>
                <p className='text-xl text-gray-600 font-semibold'>
                    Eduaguide is a premier educational platform dedicated to empowering students by providing high-quality academic resources, expert guidance, and personalized mentorship. Founded in [Year], we aim to revolutionize the way students approach learning by combining technology with education.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold text-blue-600'>Our Vision</h1>
                <p className='text-xl text-gray-600 font-semibold'>To be a global leader in online and offline education by offering affordable, accessible, and impactful learning solutions for students from diverse backgrounds.</p>
            </div>

            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold text-blue-600'>Our Mission</h1>
                <p className='text-xl text-gray-600 font-semibold'>We strive to bridge the gap in education by leveraging technology to deliver innovative courses, expert insights, and a supportive learning community to help students achieve their goals.</p>
            </div>
            
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold text-blue-600'>What We Offer</h1>
                <ul className='text-xl text-gray-600 font-semibold list-disc space-y-2'>
                    <li>Comprehensive courses for board exams, competitive exams, and professional skills.</li>
                    <li>Interactive video lessons and live doubt-solving sessions.</li>
                    <li>Detailed study materials, mock tests, and performance analytics.</li>
                    <li>Affordable learning plans tailored to suit every student&apos;s needs.</li>
                    <li>Guidance for college admissions, career planning, and scholarships.</li>
                </ul>
            </div>
                    
            <BorderBeam size={2000} duration={12} delay={9} />
        </div>
        </div>

      

    </>
  )
}

export default page
