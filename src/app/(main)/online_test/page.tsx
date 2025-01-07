'use client'
import { getAllOnlineTests, getAllTestTypes } from '@/app/_actions/online_test';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useEffect, useState } from 'react'
import Modal from '@/components/admin/admin-online-test/online_test_modal';
import { GradualSpacing } from '@/components/ui/gradualSpacing';

type Test = {
  id: string; // Use `any` if the type isn't clear
  name: string; // Use `any` if needed
};

type Tests = {
  id: string; // Use `any` if the type isn't clear
  image_url: string[];
  class:string,
  type:string,
}


function Page() {

      const [testTypes, setTestTypes] = useState<Test[]>([]);
      const [tests, setTests] = useState<Tests[]>([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState({
    className:'',
    typeName:'',
    imageUrls:[''],
  });

      const fetchData = async () => {
        try {
          // Fetch both tests and types data concurrently
          const [testsResponse, typesResponse] = await Promise.all([
            getAllOnlineTests(),
            getAllTestTypes(),
          ]);
      
          // Handle the data responses
          const testsData = testsResponse?.data || [];
          const typesData = typesResponse?.data || [];
      
          console.log("tests response: ", testsResponse);
          console.log("types response: ", typesResponse);
      
          // Update the state with transformed data
          setTests(testsData); // Set the classes data
          setTestTypes(typesData); // Set the test types data

      
        } catch (error) {
          console.error("An error occurred while fetching data:", error);
        } finally {
          setLoading(false);
        }
      };


      useEffect(()=> {
        fetchData();
      },[])


  const openModal = (typeName: string, className: string, imageUrls: string[]) => {
    setModalData({ typeName, className, imageUrls });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({
      className:'',
      typeName:'',
      imageUrls:[''],
    });
  };

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

        {loading && ( 
            <> 
              <GradualSpacing text={'Loading Data...'} className='text-black text-xl' />
            </>
          )}

        {!loading && (
          <div className="max-w-3xl mx-auto">
          {testTypes.length === 0 ? (
            <p className="text-center text-gray-500">No Online Tests Available</p>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4 transition-all duration-300">
              {testTypes.map((type) => (
                <AccordionItem
                  key={type.name}
                  value={type.name}
                  className="bg-gray-200 rounded-lg shadow-md py-2 px-8 transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg font-medium hover:no-underline transition-all duration-300">
                    {type.name}
                  </AccordionTrigger>
                  <AccordionContent className="transition-all duration-300">
                    <div className="pt-4 pb-2 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {tests
                    .filter((test) => test.type === type.name) // Filter tests based on type.name
                    .map((test, index) => (
                      <button
                    key={index}
                    className="p-2 shadow-md rounded-lg text-center hover:bg-gray-100 hover:text-blue-500 hover:font-bold hover:underline transition-all duration-300"
                    onClick={() => openModal(type.name, test.class, test.image_url)} // Pass data to modal
                  >
                    {test.class}
                  </button>
                    ))}
                    {tests.filter((test) => test.type === type.name).length === 0 && (
                      <p className="text-center text-gray-500">No tests for this category</p>
                    )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
        )}
        
        
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        typeName={modalData.typeName}
        className={modalData.className}
        imageUrls={modalData.imageUrls || []}
      />

    </>
  )
}

export default Page
