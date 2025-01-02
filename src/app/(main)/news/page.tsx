import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BentoCard} from '@/components/ui/bento';
import Link from 'next/link';
import React from 'react'

function page() {


    const news = [
        {
          ImageUrl: '/images/nep.jpg',
          name: "New Education Policy Announced",
          description: "The government has announced a sweeping reform aimed at modernizing the curriculum and improving access to education. Here's everything you need to know about the new policy changes...",
          href: "#",
        },
        {
          ImageUrl: '/images/ttol.jpg',
          name: "Top 10 Online Learning Platforms for 2024",
          description: "These platforms are revolutionizing education, offering quality courses from top universities. Explore our list of the best online learning platforms...",
          href: "#",
        },
        {
          ImageUrl: '/images/AI.jpg',
          name: "AI in Education: A Revolution",
          description: "Artificial intelligence is transforming education by providing personalized learning experiences and automating tasks. Learn about its impact...",
          href: "#",
        },
        
      ];

      const articles = [
        {
          title: "Digital Classrooms: The Future of Education",
          description: "Digital classrooms are quickly becoming the norm. Here's how schools are integrating virtual tools to enhance learning...",
          url: "#",
          id:'1',
        },
        {
          title: "How Technology is Shaping the Future of Teaching",
          description: "From virtual reality to artificial intelligence, technology is changing the way teachers engage with students...",
          url: "#",
          id:'2',
        },
        {
          title: "The Role of Teachers in Shaping Future Generations",
          description: "Teachers are not just instructors, but also mentors who guide students to succeed. Discover the evolving role of educators...",
          url: "#",
          id:'3',
        },
        {
          title: "Bridging the Education Gap: What Needs to Be Done?",
          description: "Despite advances in education, inequality still exists. This article explores potential solutions to make education more accessible...",
          url: "#",
          id:'4',
        },
      ];

      const topics = [
        {
          name: "Innovative Teaching Methods",
          url: "#",
          id:'1',
        },
        {
          name: "Top Online Courses for Students",
          url: "#",
          id:'2',
        },
        {
          name: "The Future of Remote Learning",
          url: "#",
          id:'3',
        },
        {
          name: "Educational Technology Startups",
          url: "#",
          id:'4',
        },
        {
          name: "AI and Its Role in Education",
          url: "#",
          id:'5',
        },
      ];

  return (
    <>
      <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
        <h1 className='text-5xl font-bold font-serif w-2/3 text-center'>Stay Informed with the Latest in Education</h1>
        <p className='text-3xl font-serif w-2/3 text-center'>Get updates on the most recent education news, trends, and insights from around the world. Discover policies, innovations, and new learning platforms reshaping the future.</p>
      </div>

      <div className='py-32 grid grid-cols-1 sm:grid-cols-3 gap-6 px-8 text-black'>
        <h1 className='sm:col-span-3 text-center text-4xl font-serif font-bold mb-8'>Featured Stories</h1>
        {news.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
        ))}
      </div>

      <div className="py-16 px-8 text-black">
        <h1 className="text-center text-4xl font-serif font-bold mb-8">
          Latest Articles
        </h1>
        
        <div className="max-w-3xl mx-auto">
          {articles.length === 0 ? (
            <p className="text-center text-gray-500">No articles available</p>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4 transition-all duration-300">
              {articles.map((article) => (
                <AccordionItem
                  key={article.id}
                  value={article.id}
                  className="bg-gray-200 rounded-lg shadow-md  py-2 px-8 transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg font-medium hover:no-underline transition-all duration-300">
                    {article.title}
                  </AccordionTrigger>
                  <AccordionContent className='transition-all duration-300'>
                    <div className="pt-4 pb-2">
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 p-2 mt-4 rounded-lg hover:text-blue-800 border-b border-blue-600 transition-all duration-300"
                      >
                        Read more →
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>

      <div className='py-24 px-8 text-black'>
        <h1 className="text-center text-4xl font-serif font-bold mb-8">
          Related Topics
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 text-black'>
            {topics.map((topic) => (
                <Link href={topic.url} key={topic.id} className='p-2 shadow-md rounded-lg text-center hover:bg-gray-100 hover:text-blue-500 hover:font-bold hover:underline transition-all duration-300'>
                {topic.name}
                </Link>
            ))}
            
        </div>
      </div>
    </>
  )
}

export default page
