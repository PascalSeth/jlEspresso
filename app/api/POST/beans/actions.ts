"use server";
import prisma from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { RoastLevel, GrindType } from "@prisma/client";

export default async function CreateBeans(formData: FormData) {
  try{
  // Extract basic product info
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const price = parseFloat(formData.get('price') as string);
  const stock = parseInt(formData.get('stock') as string);
  
  // Extract coffee bean-specific details
  const origin = formData.get('origin') as string;
  const roastLevel = formData.get('roastLevel') as RoastLevel;
  const flavorNotesString = formData.get('flavorNotes') as string;
  const processMethod = formData.get('processMethod') as string;
  const weightGrams = parseInt(formData.get('weightGrams') as string);
  
  // Get available grind types
  const availableGrindsArray = formData.getAll('availableGrinds') as string[];
  const availableGrinds = availableGrindsArray.map(grind => grind as GrindType);
  
  // Convert comma-separated flavor notes to array
  const flavorNotes = flavorNotesString
    .split(',')
    .map(note => note.trim())
    .filter(note => note.length > 0);
  
  // Handle multiple image uploads
  const imageFiles = formData.getAll('images') as File[];
  const imageUrls: string[] = [];
  
  // Upload each image to Supabase storage
  for (let i = 0; i < imageFiles.length; i++) {
    const imageFile = imageFiles[i];
    
    if (imageFile && imageFile.size > 0) {
      const { data: imageData, error } = await supabase.storage
        .from("images")
        .upload(`coffee-beans/${Date.now()}-${imageFile.name}`, imageFile, {
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
  
  // Create the product with multiple images and coffee bean details
  await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      category: "COFFEE_BEAN",
      // Set the main image field to the first image if it exists
      image: imageUrls.length > 0 ? imageUrls[0] : null,
      // Set all image URLs in the images array
      images: imageUrls,
      coffeeBeanDetails: {
        create: {
          origin,
          roastLevel,
          flavorNotes,
          processMethod,
          weightGrams,
          availableGrinds
        }
      }
    }
  });
      // ✅ Return success response
      return { success: true, message: "Machine added successfully" };
    } catch (error) {
      console.error("Error creating machine:", error);
      return { success: false, message: "Server error" };
    }
  }
