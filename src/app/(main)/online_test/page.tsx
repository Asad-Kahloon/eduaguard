import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import React from 'react'

function page() {


      const articles = [
        {
          title: "Class-Based Tests",
          items: [
            { name: "5th Class", url: "#" },
            { name: "6th Class", url: "#" },
            { name: "7th Class", url: "#" },
            { name: "8th Class", url: "#" },
            { name: "9th Class", url: "#" },
            { name: "10th Class", url: "#" },
            { name: "11th Class", url: "#" },
            { name: "12th Class", url: "#" },
          ],
        },
        {
          title: "Competitive Tests",
          items: [
            { name: "NAT-1 Test", url: "#" },
            { name: "NAT-2 Test", url: "#" },
            { name: "CSS", url: "#" },
            { name: "IQ Class", url: "#" },
            { name: "General Knowledge", url: "#" },
            { name: "MDCAT Test", url: "#" },
            { name: "ECAT Test", url: "#" },
            { name: "GAT General", url: "#" },
            { name: "GAT Subject", url: "#" },
          ],
        },
        {
          title: "Short Question Tests",
          items: [
            { name: "9th Class Physics Short Questions", url: "#" },
            { name: "9th Class Chemistry Short Questions", url: "#" },
            { name: "9th Class Math Short Questions", url: "#" },
            { name: "9th Class Biology Short Questions", url: "#" },
            { name: "9th Class Computer Short Questions", url: "#" },
            { name: "9th Class English Short Questions", url: "#" },
            { name: "10th Class Physics Short Questions", url: "#" },
            { name: "10th Class Chemistry Short Questions", url: "#" },
            { name: "10th Class Math Short Questions", url: "#" },
            { name: "10th Class Biology Short Questions", url: "#" },
            { name: "10th Class Computer Short Questions", url: "#" },
            { name: "10th Class English Short Questions", url: "#" },
            
            
          ],
        },
      ];

  return (
    <>
      <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
        <h1 className='text-5xl font-bold font-serif w-2/3 text-center'>Welcome to Our Online Test Portal</h1>
        <p className='text-3xl font-serif w-2/3 text-center'>Prepare for exams with online tests across various subjects and levels. Test yourself now!</p>
      </div>

      <div className="py-16 px-8 text-black">
        <h1 className="text-center text-4xl font-serif font-bold mb-8">
            Available Online Tests
        </h1>
        
        <div className="max-w-3xl mx-auto">
          {articles.length === 0 ? (
            <p className="text-center text-gray-500">No articles available</p>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4 transition-all duration-300">
              {articles.map((article) => (
                <AccordionItem
                  key={article.title}
                  value={article.title}
                  className="bg-gray-200 rounded-lg shadow-md py-2 px-8 transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg font-medium hover:no-underline transition-all duration-300">
                    {article.title}
                  </AccordionTrigger>
                  <AccordionContent className="transition-all duration-300">
                    <div className="pt-4 pb-2 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                      {article.items.map((item, index) => (
                        <Link href={item.url} key={index} className='p-2 shadow-md rounded-lg text-center hover:bg-gray-100 hover:text-blue-500 hover:font-bold hover:underline transition-all duration-300'>
                        {item.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>

    </>
  )
}

export default page
