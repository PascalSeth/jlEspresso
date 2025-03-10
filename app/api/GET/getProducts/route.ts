import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Prisma, ProductCategory } from "@prisma/client";

export async function GET(request: Request) {
  try {
    // Extract category parameter from URL
    const { searchParams } = new URL(request.url);
    const categoryParam = searchParams.get("category");
    
    // Build where clause
    const whereClause: Prisma.ProductWhereInput = {
        isActive: true,
    };
    
    // Add category filter if provided
    if (categoryParam) {
      // Convert string to enum value (case-insensitive)
      const normalizedCategory = categoryParam.toUpperCase();
      
      // Validate that the category is a valid ProductCategory enum value
      if (Object.values(ProductCategory).includes(normalizedCategory as ProductCategory)) {
        whereClause.category = normalizedCategory as ProductCategory;
      } else {
        return NextResponse.json({ error: "Invalid category" }, { status: 400 });
      }
    }
    
    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        // Include category-specific details based on the product type
        coffeeBeanDetails: true,
        machineDetails: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    console.log(`Fetched products (${categoryParam || "all categories"}):`, products.length);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}