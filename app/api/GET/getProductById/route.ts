import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    // Extract product ID from URL search parameters
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("id");

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    // Fetch the product with its category-specific details
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        // Include category-specific details based on product type
        coffeeBeanDetails: Boolean(productId),
        machineDetails: Boolean(productId),
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    console.log(`Fetched details for product: ${product.name} (${product.id})`);
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
  }
}