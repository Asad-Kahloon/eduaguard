import Link from 'next/link';
import React from 'react'

function page() {


    const admissions = [
        {
          name: "Admissions Alerts",
          description: "Stay updated with the latest admission alerts and announcements. Never miss a deadline!",
          href: "#",
        },
        {
          name: "Admission Guides",
          description: "Access detailed admission guides to help you navigate the admission process with ease.",
          href: "#",
        },
        {
          name: "1st Year Admissions",
          description: "Find all the information you need about first-year admissions, eligibility, and deadlines.",
          href: "#",
        },
        {
          name: "Bachelors Admissions",
          description: "Discover the requirements for undergraduate programs, including application deadlines and criteria.",
          href: "#",
        },
        {
          name: "Masters Admissions",
          description: "Get all the details about Master's degree admissions, including eligibility and application forms.",
          href: "#",
        },
        {
          name: "Admissions Android Apps",
          description: "Explore apps that make the admission process simpler and more efficient for you.",
          href: "#",
        },
        
      ];

      const programs = [
        {
          name: "MBBS",
          url: "#",
        },
        {
          name: "LLB",
          url: "#",
        },
        {
          name: "BDS",
          url: "#",
        },
        {
          name: "B.ED",
          url: "#",
        },
        {
          name: "PHARM D",
          url: "#",
        },
        {
          name: "BBA",
          url: "#",
        },
        {
          name: "BSCS",
          url: "#",
        },
        {
          name: "ECAT",
          url: "#",
        },
        {
          name: "MDCAT",
          url: "#",
        },
      ];

  return (
    <>
      <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
        <h1 className='text-5xl font-bold font-serif w-2/3 text-center'>Welcome to Our Admissions Page</h1>
        <p className='text-3xl font-serif w-2/3 text-center'>Explore various admission processes and guidelines for different courses, alerts, and merit lists.</p>
      </div>

      <div className='py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 px-16 text-black'>
        <h1 className='sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-4xl font-serif font-bold mb-8'>Admissions</h1>
        {admissions.map((feature) => (
            <div key={feature.name} className='shadow-lg p-8 flex flex-col items-center gap-4 transform transition-transform hover:-translate-y-2 duration-500'>
                <h1 className='text-3xl font-bold text-center'>{feature.name}</h1>
                <p className='text-xl text-gray-700 text-center'>{feature.description}</p>
                <Link href={feature.href} className='font-semibold text-green-600 hover:text-green-700 hover:underline transition-all duration-300'>
                    Read More
                </Link>
            </div>
        ))}
      </div>

      <div className='py-24 px-8 text-black'>
        <h1 className="text-center text-4xl font-serif font-bold mb-8">
        Programs Offered
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-8 text-black'>
            {programs.map((topic) => (
                <Link href={topic.url} key={topic.name} className='p-2 shadow-md rounded-lg text-center hover:bg-gray-100 hover:text-blue-500 hover:font-bold hover:underline transition-all duration-300'>
                {topic.name}
                </Link>
            ))}
            
        </div>
      </div>
      
      <div className='py-24 px-8 text-black'>
        <h1 className="text-center text-4xl font-serif font-bold mb-8">
        Merit List
        </h1>
        <div className='flex flex-col items-center px-8 text-black gap-4'>
                <p className='text-xl text-gray-700'>Check out the latest merit list for various courses. Make sure you are on the list!</p>
                <Link href='#' className='p-2 text-center font-semibold text-green-500 hover:text-green-600 hover:underline transition-all duration-300'>
                View Merit List
                </Link>
        </div>
      </div>
    </>
  )
}

export default page
