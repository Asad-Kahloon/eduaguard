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

export async function getAllOnlineTests() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
  .from("online_tests")
  .select(`
    id,
    image_url,
    classes(name),
  `)
  .select("*,classes(*),test_types(*)");

  if (error) {
    console.log("online tests error is : ",error)
    return {
      status: false,
      message: "Error retrieving the test types at the moment",
      data: [],
    };
  }

  const transformedData = data.map(item => ({
    id: item.id,
    image_url: item.image_url,
    class: item.classes.name,  // Transform classes to { name: "class name" }
    type: item.test_types.name,  // Transform test_types to { name: "test type" }
  }));

  
  return {
    status: true,
    message: "Test Types retrieved successfully",
    data: transformedData,
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