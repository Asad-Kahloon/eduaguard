'use client'
import InteractiveHoverButton from "@/components/ui/interactiveHoverButton";
import { ChangeEvent, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { getAllClasses, getAllTestTypes, insertTestData } from "../_actions/online_test";
import { toast } from "sonner";


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
    const [classes, setClasses] = useState<Class[]>([]);
    const [testTypes, setTestTypes] = useState<Test[]>([]);
    const [form, setForm] = useState<{
      class: string
      type: string
      url: string
    }>({
      class: "",
      type: "",
      url:"",
    })  


      const handleClassChange = (selectedOption: SingleValue<Class>) => {
        setForm((prev) => ({
            ...prev,
            class: selectedOption ? selectedOption.id : "",
        }));
    };

    const handleTypeChange = (selectedOption: SingleValue<Test>) => {
      setForm((prev) => ({
          ...prev,
          type: selectedOption ? selectedOption.id : "",
      }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      if(!form.class.trim() || !form.type.trim() || !form.url.trim()){
        toast.error("all fields are required");
        return
      }

      setIsLoading(true)
      
      console.log("form is : ", form)
      const result = await insertTestData(form);

      if (result.status) {
        toast.success(result.message); // Success message
        setIsLoading(false)
      } else {
        console.error(result.error);
        toast.error(result.message); // Error message
        setIsLoading(false)
      }
    }

    const fetchData = async () => {
      try {
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
      }
    };
    
    useEffect(() => {
      fetchData(); // Call the function inside useEffect
    }, []);

  return (
    <div className="w-full py-24">
      <form onSubmit={handleSubmit} className="p-10 mx-auto text-black w-fit flex flex-col gap-6">
        <h1 className="text-center text-3xl font-bold">Add Lectures</h1>

        <div>
          <Select
            options={classes}
            placeholder="Select Class..."
            isSearchable={true} // Enable search
            onChange={handleClassChange} // Use custom handler
            getOptionLabel={(option) => option.name} // Show country label
            getOptionValue={(option) => option.id} // Set country value
            className="w-full rounded-lg border-2 border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            noOptionsMessage={() => "No class found"}
          />
        </div>

        <div>
          <Select
            options={testTypes}
            placeholder="Select test type..."
            isSearchable={true} // Enable search
            onChange={handleTypeChange} // Use custom handler
            getOptionLabel={(option) => option.name} // Show country label
            getOptionValue={(option) => option.id} // Set country value
            className="w-full rounded-lg border-2 border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            noOptionsMessage={() => "No test types found"}
          />
        </div>

          <input type="text" name="url" onChange={handleInputChange} placeholder="enter image url" className=" w-96 p-2 rounded-lg border-2 border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"/>

        <div className="relative justify-center mx-auto">
            <InteractiveHoverButton type="submit" text={isLoading ? `loading` : `Insert`} className="border border-gray-600 hover:bg-gray-200 text-black text-sm " />
          </div>
      </form>
    </div>
  );
}
