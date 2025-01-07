"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getAllClasses() {
  const supabase = createServerComponentClient({ cookies });

  const { data: classes, error } = await supabase
    .from("classes")
    .select("id, name"); // Explicitly select the required columns

  if (error) {
    return {
      status: false,
      message: "Error retrieving the classes at the moment",
      data: [],
    };
  }

  return {
    status: true,
    message: "Classes retrieved successfully",
    data: classes,
  };
}


export async function getAllTestTypes() {
  const supabase = createServerComponentClient({ cookies });

  const { data: classes, error } = await supabase
    .from("test_types")
    .select("id, name"); // Explicitly select the required columns

  if (error) {
    return {
      status: false,
      message: "Error retrieving the test types at the moment",
      data: [],
    };
  }

  return {
    status: true,
    message: "Test Types retrieved successfully",
    data: classes,
  };
}


export async function insertTestData(form: { class: string; type: string; urls: string[]; }) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("online_tests") // Replace with your table name if different
    .insert([{ class: form.class,
               type : form.type,
               image_url: form.urls }]);

  if (error) {
    return {
      status: false,
      message: "Error inserting data into the table",
      error: error.message,
    };
  }

  return {
    status: true,
    message: "Data inserted successfully",
    data,
  };
}