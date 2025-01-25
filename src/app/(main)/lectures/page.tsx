'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { getAllLectures } from '@/app/_actions/lectures';
import { GradualSpacing } from '@/components/ui/gradualSpacing';

type Lectures = {
  id: string; // Use `any` if the type isn't clear
  image_url: string;
  class:string,
  file_url:string,
  description:string,
  title: string,
}

function Page() {

  const [lectures, setLectures] = useState<Lectures[]>([]);
        const [loading, setLoading] = useState(true);


        const downloadFile = async (fileUrl: string): Promise<void> => {
          try {
              // Fetch the file from the URL
              const response = await fetch(fileUrl);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
      
              // Convert the response to a Blob
              const blob = await response.blob();
      
              // Create a temporary URL for the Blob
              const url = window.URL.createObjectURL(blob);
      
              // Create a link element and trigger the download
              const a = document.createElement('a');
              a.href = url;
              a.download = fileUrl.split('/').pop() || 'download'; // Use the file name from the URL or default to 'download'
              document.body.appendChild(a);
              a.click();
      
              // Clean up
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
          } catch (error) {
              console.error('Error downloading file:', error);
          }
      };
      

    const fetchData = async () => {
            try {

              const lecturesResponse = await getAllLectures()
          
              // Handle the data responses
              const lecturesData = lecturesResponse?.data || [];
          
              console.log("tests response: ", lecturesResponse);
          
              // Update the state with transformed data
              setLectures(lecturesData); 
    
          
            } catch (error) {
              console.error("An error occurred while fetching data:", error);
            } finally {
              setLoading(false);
            }
          };

          useEffect(()=> {
                  fetchData();
                },[])

  return (
    <>
      <div className='bg-gray-100 flex flex-col items-center gap-6 py-32 w-full text-black'>
        <h1 className='text-5xl font-bold font-serif w-2/3 text-center'>Welcome to Our Lectures Page</h1>
        <p className='text-3xl font-serif w-2/3 text-center'>Explore our wide range of lectures from different classes, including online study resources and apps.</p>
      </div>

      <div className='py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 px-16 text-black'>
        <h1 className='sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-4xl font-serif font-bold mb-8'>Available Lectures</h1>

        {loading && ( 
                    <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 text-center'> 
                      <GradualSpacing text={'Loading Data...'} className='text-black text-xl' />
                    </div>
        )}

      {!loading && (
        <>
          {lectures.length === 0 ? (
            <p className="text-center sm:col-span-2 md:col-span-3 lg:col-span-4 text-gray-500">No Lectures Available</p>
          ) : (
            <>
            {lectures.map((lecture) => (
            <div key={lecture.id} className='shadow-lg p-8 flex flex-col items-center gap-4 transform transition-transform hover:-translate-y-2 duration-500'>
                <Image 
                    src={lecture.image_url}
                    alt='image'
                    width={400}
                    height={400}
                    className='h-64 w-auto'
                />
                <h1 className='text-3xl font-bold text-center'>{lecture.title}</h1>
                <p className='text-xl text-gray-700 text-center'>{lecture.description}</p>
                <button onClick={() => downloadFile(lecture.file_url)} className='text-xl font-semibold text-green-600 hover:text-green-700 hover:underline transition-all duration-300'>
                    Download
                </button>
            </div>
        ))}
            </>
          )}
        </>
      )}

        
      </div>

    </>
  )
}

export default Page
