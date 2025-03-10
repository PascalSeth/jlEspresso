"use server";
import prisma from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { MachineType } from "@prisma/client";

export default async function CreateMachines(formData: FormData) {
  // Extract basic product info
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const price = parseFloat(formData.get('price') as string);
  const stock = parseInt(formData.get('stock') as string);
  
  // Extract machine-specific details
  const brand = formData.get('brand') as string;
  const model = formData.get('model') as string;
  const type = formData.get('type') as MachineType;
  const warrantyMonths = parseInt(formData.get('warrantyMonths') as string);
  const dimensions = formData.get('dimensions') as string;
  const weight = parseFloat(formData.get('weight') as string);
  const voltage = formData.get('voltage') as string;
  
  // Handle multiple image uploads
  const imageFiles = formData.getAll('images') as File[];
  const imageUrls: string[] = [];
  
  // Upload each image to Supabase storage
  for (let i = 0; i < imageFiles.length; i++) {
    const imageFile = imageFiles[i];
    
    if (imageFile && imageFile.size > 0) {
      const { data: imageData, error } = await supabase.storage
        .from("images")
        .upload(`machines/${Date.now()}-${imageFile.name}`, imageFile, {
          cacheControl: "2592000",
          contentType: imageFile.type,
        });
        
      if (error) {
        console.error("Error uploading image: ", error);
        throw new Error(`Failed to upload image ${i+1}`);
      }
      
      // Get the full URL to the image
      const imageUrl = imageData?.path || "";
      imageUrls.push(imageUrl);
    }
  }
  
  // Create the product with multiple images and machine details
  await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      category: "MACHINE",
      // Set the main image field to the first image if it exists
      image: imageUrls.length > 0 ? imageUrls[0] : null,
      // Set all image URLs in the images array
      images: imageUrls,
      machineDetails: {
        create: {
          brand,
          model,
          type,
          warrantyMonths,
          dimensions,
          weight,
          voltage
        }
      }
    }
  });
}