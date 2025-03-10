import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ProductCategory } from "@prisma/client";

export async function GET() {
  try {
    const coffeeBeans = await prisma.product.findMany({
      where: {
        category: ProductCategory.COFFEE_BEAN,
        isActive: true,
      },
      include: {
        coffeeBeanDetails: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    console.log("Fetched coffee beans:", coffeeBeans.length);
    return NextResponse.json(coffeeBeans);
  } catch (error) {
    console.error("Error fetching coffee beans:", error);
    return NextResponse.json({ error: "Failed to fetch coffee beans" }, { status: 500 });
  }
}