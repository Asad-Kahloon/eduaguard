"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/lecture`


export async function UploadImage(image : File ) {
    const supabase = createServerComponentClient({ cookies });
    const filename = `${Date.now()}_${image.name}`;
    const { data, error } = await supabase.storage
      .from("lecture")
      .upload(`images/${filename}`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("Error while uploading image");
      return { status: "false", message: "Failed to upload image." };
    }

    console.log("Upload success: ", data);
    return {
      status: "true",
      message: "image successfully uploaded.",
      filename: `${baseUrl}/images/${filename}`,
      data,
    };
}

export async function UploadPdf(pdf : File ) {
    const supabase = createServerComponentClient({ cookies });
    const filename = `${Date.now()}_${pdf.name}`;
    const { data, error } = await supabase.storage
      .from("lecture")
      .upload(`pdf/${filename}`, pdf, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("Error while uploading pdf");
      return { status: "false", message: "Failed to upload pdf." };
    }

    console.log("Upload success: ", data);
    return {
      status: "true",
      message: "pdf successfully uploaded.",
      filename: `${baseUrl}/pdf/${filename}`,
      data,
    };
}

export async function insertLectureData(form: { class: string; description: string; image_url: string; file_url: string; title: string }) {
    const supabase = createServerComponentClient({ cookies });
  
    const { data, error } = await supabase
      .from("lectures") // Replace with your table name if different
      .insert([{ class: form.class,
                 description : form.description,
                 image_url: form.image_url,
                 file_url: form.file_url,
                 title: form.title,
               }]);
  
    if (error) {
      return {
        status: false,
        message: "Error inserting lectures info into the table",
        error: error.message,
      };
    }
  
    return {
      status: true,
      message: "Data inserted successfully",
      data,
    };
  }


  export async function getAllLectures() {
    const supabase = createServerComponentClient({ cookies });
  
    const { data, error } = await supabase
    .from("lectures")
    .select("*,classes(*)");
  
    if (error) {
      console.log("lectures error is : ",error)
      return {
        status: false,
        message: "Error retrieving the lectures at the moment",
        data: [],
      };
    }

    const transformedData = data.map(item => ({
        id: item.id,
        image_url: item.image_url,
        file_url: item.file_url,
        class: item.classes.name,  // Transform classes to { name: "class name" }
        description: item.description,
        title: item.title,
      }));
  
    
    return {
      status: true,
      message: "Lectures retrieved successfully",
      data: transformedData,
    };
  }