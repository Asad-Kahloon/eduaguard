import { GradualSpacing } from '@/components/ui/gradualSpacing';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeName: string;
  className: string;
  imageUrls: (string | undefined)[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, typeName, className, imageUrls }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const goToNext = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to move to the previous image
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 text-black">
      <div className="bg-white px-6 py-16 h-[90%] overflow-y-auto w-[90%] rounded-lg shadow-md flex flex-col gap-10">
        <div className='flex justify-between'>
            <h2 className="text-2xl font-semibold">Test Details</h2>
            <button onClick={onClose} className="text-xl">
            X
            </button>
        </div>
        <h1 className='text-3xl font-extrabold'><GradualSpacing text={`${typeName}`} /></h1>
        <h1 className='text-2xl font-bold'><GradualSpacing text={`${className}`} /></h1>

        <div>
          <div className="flex space-x-2">
          <div className="relative mx-auto w-full sm:w-2/3">
            <div className="flex justify-center w-auto h-full mx-auto">
            {imageUrls.length === 0 && (
                <h2 className='text-2xl text-black'>No Images for this Test</h2>
              )}
              {imageUrls.length > 0 && (
                <Image
                src={imageUrls[currentIndex] as string} // Ensure the URL is a string
                alt={`image-${currentIndex}`}
                className="w-auto h-full object-cover"
                width={650} // Width of the image (for layout='intrinsic')
                height={480} // Height of the image (for layout='intrinsic')
              />
              )}
            </div>
            {imageUrls.length > 1 && (
              <div className="absolute mt-4 left-0 right-0 flex justify-between ">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="bg-gray-300 text-black w-16 p-2 rounded-md opacity-75 hover:bg-gray-400 disabled:opacity-50"
                >
                  <ArrowBigLeft className='mx-auto' />
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex === imageUrls.length - 1}
                  className="bg-gray-300 text-black w-16 p-2 rounded-md opacity-75 hover:bg-gray-400 disabled:opacity-50"
                >
                  <ArrowBigRight className='mx-auto'/>
                </button>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
