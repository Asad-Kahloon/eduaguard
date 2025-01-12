'use client'
import InteractiveHoverButton from "@/components/ui/interactiveHoverButton";
import { useState } from "react";
import { toast } from "sonner";
import {Input, Textarea} from "@nextui-org/react";
import { GradualSpacing } from "@/components/ui/gradualSpacing";
import { insertAdmissionData } from "@/app/_actions/admissions";


export default function Home() {


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [form, setForm] = useState<{
      title: string
      description: string
      url: string;
      last_date: string
    }>({
      title:"",
      description:"",
      url:"",
      last_date:"",
    })  

    const handleInputChange = (field: string, value: string) => {
      setForm((prevForm) => ({
        ...prevForm,
        [field]: value,
      }));
    };

    const handleDateChange = (e: { target: { value: string; }; }) => {
      setForm((prevForm) => ({
        ...prevForm,
        last_date: e.target.value,
      }));
    };

     // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];



const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();

  if (!form.title.trim() || !form.description.trim() || !form.url.trim() || !form.last_date.trim()) {
    toast.error("All fields are required");
    return;
  }


  setIsLoading(true);

  console.log("form is: ", form);
  const result = await insertAdmissionData(form);

  if (result.status) {
    toast.success(result.message);
    setForm({
      title:"",
      description:"",
      url:"",
      last_date:"",
    })
    setIsLoading(false);
  } else {
    console.error(result.error);
    toast.error(result.message);
    setIsLoading(false);
  }
};

    return (
      <div className="w-full py-24">
        <form onSubmit={handleSubmit} className="p-10 w-full md:w-2/3 lg:w-1/3 mx-auto text-black flex flex-col gap-6">
              <h1 className="text-center text-3xl font-bold">
                <GradualSpacing text={'Add Addmissions'} className='text-black' />
              </h1>
              <div className="flex gap-4 items-center">
                <Input
                  label=" Title "
                  placeholder="Enter Title"
                  type="text"
                  className="w-full"
                  value={form.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="flex gap-4 items-center">
                <Input
                  label="Url"
                  placeholder="Enter Url"
                  type="text"
                  className="w-full"
                  value={form.url}
                  onChange={(e) => handleInputChange("url", e.target.value)}
                />
              </div>
              <div className="flex flex-col px-3 py-2 bg-gray-100 rounded-xl">
                <label htmlFor="date" className="text-xs text-gray-600">Last Date</label>
                <input
                  type="date"
                  id="date"
                  value={form.last_date}
                  onChange={handleDateChange}
                  className="w-full bg-transparent"
                  min={today} // Restrict to today's and future dates
                />
              </div>
              <div className="flex gap-4 items-center">
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  type="text"
                  className="w-full"
                  value={form.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>
      
              <div className="relative justify-center mx-auto">
                <InteractiveHoverButton
                  type="submit"
                  text={isLoading ? 'Loading' : 'Submit'}
                  className="border border-gray-600 hover:bg-gray-200 text-black text-sm"
                />
              </div>
        </form>
      </div>
    );
}
