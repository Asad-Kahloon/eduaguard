'use client'
import InteractiveHoverButton from "@/components/ui/interactiveHoverButton";
import { useEffect, useState } from "react";
import { getAllClasses, getAllTestTypes, insertTestData } from "@/app/_actions/online_test";
import { toast } from "sonner";
import {Select, SelectItem, Input} from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";
import { GradualSpacing } from "@/components/ui/gradualSpacing";
import { CirclePlus, CircleX } from 'lucide-react';

type Class = {
  id: string; // Use `any` if the type isn't clear
  name: string; // Use `any` if needed
};

type Test = {
  id: string; // Use `any` if the type isn't clear
  name: string; // Use `any` if needed
};

export default function Home() {


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [classes, setClasses] = useState<Class[]>([]);
    const [testTypes, setTestTypes] = useState<Test[]>([]);
    const [form, setForm] = useState<{
      class: string
      type: string
      urls: string[];
    }>({
      class: "",
      type: "",
      urls: [""],
    })  




      const handleClassChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            class: value,
        }));
        console.log(e.target.value)
    };

    const handleTypeChange = (e: { target: { value: string; }; }) => {
      const value = e.target.value;
      setForm((prev) => ({
          ...prev,
          type: value,
      }));
      console.log(e.target.value)
  };

  const handleUrlChange = (index: number, value: string) => {
    setForm((prev) => {
      const updatedUrls = [...prev.urls];
      updatedUrls[index] = value;
      return { ...prev, urls: updatedUrls };
    });
    console.log(`value of input ${index} is : `, value)
  };

  const handleAddUrl = () => {
    setForm((prev) => ({ ...prev, urls: [...prev.urls, ""] }));
  };

  const handleRemoveUrl = (index: number) => {
    setForm((prev) => {
      const updatedUrls = [...prev.urls];
      updatedUrls.splice(index, 1);
      return { ...prev, urls: updatedUrls };
    });
  };


const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();

  if (!form.class.trim() || !form.type.trim() || form.urls.some((url) => !url.trim())) {
    toast.error("All fields are required");
    return;
  }

  setIsLoading(true);

  console.log("form is: ", form);
  const result = await insertTestData(form);

  if (result.status) {
    toast.success(result.message);
    setIsLoading(false);
  } else {
    console.error(result.error);
    toast.error(result.message);
    setIsLoading(false);
  }
};

    const fetchData = async () => {
      try {
        setLoading(true);
        const [classesResponse, typesResponse] = await Promise.all([
          getAllClasses(),
          getAllTestTypes(),
        ]);
    
        // Handle the data responses
        const classesData = classesResponse?.data || [];
        const typesData = typesResponse?.data || [];
    
        setClasses(classesData); // Set the classes data
        setTestTypes(typesData); // Set the test types data
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setLoading(false)
      }
    };
    
    useEffect(() => {
      fetchData(); // Call the function inside useEffect
    }, []);

    return (
      <div className="w-full py-24">

        <form onSubmit={handleSubmit} className="p-10 w-full md:w-2/3 lg:w-1/3 mx-auto text-black flex flex-col gap-6">
          {loading && ( 
            <> 
              <Spinner color="default" />
              <GradualSpacing text={'Loading Data...'} className='text-black text-xl' />
            </>
          )}

          {!loading && (  
            <>

              <h1 className="text-center text-3xl font-bold">
                <GradualSpacing text={'Add Tests'} className='text-black' />
              </h1>
      
              <Select
                className="w-full"
                label="Class"
                placeholder="Select Class"
                selectionMode="single"
                onChange={handleClassChange}
              >
                {classes?.map((classItem) => (
                  <SelectItem className=" text-black" key={classItem.id}>{classItem.name}</SelectItem>
                ))}
              </Select>
      
              <Select
                className="w-full"
                label="Test Type"
                placeholder="Select Type"
                selectionMode="single"
                onChange={handleTypeChange}
              >
                {testTypes.map((type) => (
                  <SelectItem className="text-black" key={type.id}>{type.name}</SelectItem>
                ))}
              </Select>
      
              {form.urls.map((url, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Input
                  label={`Image URL ${index + 1}`}
                  placeholder="Enter URL"
                  type="text"
                  className="w-full"
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveUrl(index)}
                  className="px-4 py-4 bg-gray-100  rounded hover:bg-gray-200 text-red-700"
                >
                  <CircleX/>
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddUrl}
              className="px-4 w-fit py-2 bg-gray-100 text-blue-700 rounded hover:bg-gray-200"
            >
              <CirclePlus />
            </button>
      
              <div className="relative justify-center mx-auto">
                <InteractiveHoverButton
                  type="submit"
                  text={isLoading ? 'Loading' : 'Add Test'}
                  className="border border-gray-600 hover:bg-gray-200 text-black text-sm"
                />
              </div>
            </>
          )}
        </form>
      </div>
    );
}
