import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ProductCategory } from "@prisma/client";

export async function GET() {
  try {
    const machines = await prisma.product.findMany({
      where: {
        category: ProductCategory.MACHINE,
        isActive: true,
      },
      include: {
        machineDetails: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    console.log("Machines fetched:", machines); // Add this line for debugging
    
    return NextResponse.json(machines ?? []); // Ensure it's never null
    
    
  } catch (error) {
    console.error('Error fetching machines:', error);
    return NextResponse.json(
      { error: 'Failed to fetch machines' }, 
      { status: 500 }
    );
  }
}