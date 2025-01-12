"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export async function getAllAdmissions() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
  .from("admissions")
  .select("*");

  if (error) {
    console.log("online tests error is : ",error)
    return {
      status: false,
      message: "Error retrieving the test types at the moment",
      data: [],
    };
  }

  
  return {
    status: true,
    message: "Test Types retrieved successfully",
    data: data,
  };
}


export async function insertAdmissionData(form: { title: string; description: string; url: string; last_date: string }) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("admissions") // Replace with your table name if different
    .insert([{ title: form.title,
               description : form.description,
               url: form.url,
               last_date: form.last_date,
             }]);

  if (error) {
    return {
      status: false,
      message: "Error inserting admission info into the table",
      error: error.message,
    };
  }

  return {
    status: true,
    message: "Data inserted successfully",
    data,
  };
}