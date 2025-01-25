'use client'
import InteractiveHoverButton from "@/components/ui/interactiveHoverButton";
import { useEffect, useState } from "react";
import { getAllClasses } from "@/app/_actions/online_test";
import { toast } from "sonner";
import {Input, Select, SelectItem,Textarea} from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";
import { GradualSpacing } from "@/components/ui/gradualSpacing";
import { insertLectureData, UploadImage, UploadPdf } from "@/app/_actions/lectures";

type Class = {
  id: string; // Use `any` if the type isn't clear
  name: string; // Use `any` if needed
};

export default function Home() {


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [classes, setClasses] = useState<Class[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    const [form, setForm] = useState<{
      class: string
      image_url: string
      file_url: string;
      description: string;
      title: string;
    }>({
      class: "",
      title: "",
      description: "",
      file_url: "",
      image_url: "",
    })  




      const handleClassChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            class: value,
        }));
        console.log(e.target.value)
    };

    const handleInputChange = (field: string, value: string) => {
      setForm((prevForm) => ({
        ...prevForm,
        [field]: value,
      }));
    };

      const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            setImage(uploadedFile);
        }
      };
      
      const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            setPdf(uploadedFile);
        }
      };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (!form.class.trim() || !form.description.trim() || !image || !pdf) {
          toast.error("All fields are required");
          return;
        }
      
        setIsLoading(true);
      
        try {
          console.log("Uploading image...");
          const imageUpload = await UploadImage(image);
          if (imageUpload.status === "false") throw new Error("Image upload failed");
      
          console.log("Uploading file...");
          const fileUpload = await UploadPdf(pdf);
          if (fileUpload.status === "false") throw new Error("File upload failed");
      
          const formData = {
            class: form.class,
            description: form.description,
            image_url: imageUpload.filename as string,
            file_url: fileUpload.filename as string,
            title: form.title,
          };
      
          console.log("Submitting data...");
          const result = await insertLectureData(formData, );
      
          if (result.status) {
            toast.success(result.message);
            resetFormState(); // Reset form and other states
          } else {
            console.error(result.error);
            toast.error(result.message);
          }
        } catch (error) {
          console.error(error);
          toast.error("Error submitting data at the moment");
        } finally {
          setIsLoading(false); // Ensure loading state is cleared in all cases
        }
      };
      
      // Utility to reset form state
      const resetFormState = () => {
        setForm({
          class: "",
          description: "",
          image_url: "",
          file_url: "",
          title:"",
        });
        setImage(null);
        setPdf(null);
      };
      

    const fetchData = async () => {
      try {
        setLoading(true);
        const classesResponse = await getAllClasses()
    
        // Handle the data responses
        const classesData = classesResponse?.data || [];
    
        setClasses(classesData); // Set the classes data
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
                  <GradualSpacing text={'Add Lectures'} className='text-black' />
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
      
                <Select
                  className="w-full text-black"
                  label="Class"
                  placeholder="Select Class"
                  selectionMode="single"
                  onChange={handleClassChange}
                >
                  {classes?.map((classItem) => (
                    <SelectItem className="text-black" key={classItem.id}>{classItem.name}</SelectItem>
                  ))}
                </Select>
      
                <div className="flex gap-4 items-center">
                  <Textarea
                    label="Description"
                    placeholder="Enter Description"
                    type="text"
                    className="w-full text-black"
                    value={form.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>
      
                <div className="flex flex-col bg-gray-100 py-1 rounded-xl">
                    <label htmlFor="image" className="text-xs font-light text-gray-600 ml-4">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="block w-full cursor-pointer text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:border-0
                        file:text-sm file:font-semibold
                        file:bg-transparent file:text-blue-700"
                    />
                </div>

                <div className="flex flex-col bg-gray-100 py-1 rounded-xl">
                    <label htmlFor="pdf" className="text-xs font-light text-gray-600 ml-4">Upload PDF</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className="block w-full cursor-pointer text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:border-0
                        file:text-sm file:font-semibold
                        file:bg-transparent file:text-blue-700"
                    />
                </div>
      
                <div className="relative justify-center mx-auto">
                  <InteractiveHoverButton
                    type="submit"
                    text={isLoading ? 'Loading' : 'Submit'}
                    className="border border-gray-600 hover:bg-gray-200 text-black text-sm"
                  />
                </div>
              </>
            )}
          </form>
        </div>
      );
}
