"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import coffeeData from "@/data";

// Union type of all possible product types
type Product = 
  | typeof coffeeData.coffeeBeans[0] 
  | typeof coffeeData.coffeeMachines[0] 
  | typeof coffeeData.machineParts[0] 
  | typeof coffeeData.repairServices[0] 
  | typeof coffeeData.additionalServices[0];

// Loading component for Suspense fallback
function ProductDetailLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

// Extract the content to a separate component that uses useSearchParams
function ProductDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [productType, setProductType] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      if (!productId) {
        setLoading(false);
        return;
      }
      
      // Search through all product types
      let foundProduct: Product | null = null;
      
      // Check coffee beans
      foundProduct = coffeeData.coffeeBeans.find(item => item.id === productId) as Product | null;
      if (foundProduct) {
        setProductType("Coffee Bean");
      }
      
      // Check coffee machines
      if (!foundProduct) {
        foundProduct = coffeeData.coffeeMachines.find(item => item.id === productId) as Product | null;
        if (foundProduct) {
          setProductType("Coffee Machine");
        }
      }
      
      // Check machine parts
      if (!foundProduct) {
        foundProduct = coffeeData.machineParts.find(item => item.id === productId) as Product | null;
        if (foundProduct) {
          setProductType("Machine Part");
        }
      }
      
      // Check repair services
      if (!foundProduct) {
        foundProduct = coffeeData.repairServices.find(item => item.id === productId) as Product | null;
        if (foundProduct) {
          setProductType("Repair Service");
        }
      }
      
      // Check additional services
      if (!foundProduct) {
        foundProduct = coffeeData.additionalServices.find(item => item.id === productId) as Product | null;
        if (foundProduct) {
          setProductType("Additional Service");
        }
      }
      
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  const renderProductDetails = () => {
    if (!product) return null;

    // Common fields for all products
    const commonDetails = (
      <>
        {product.description && (
          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-2 text-gray-700">{product.description}</p>
          </div>
        )}
      </>
    );

    // Specific fields based on product type
    const specificDetails = () => {
      // Coffee Bean specific fields
      if ('origin' in product && 'roastLevel' in product) {
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium">Origin</h3>
                <p>{product.origin}, {product.region}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Roast Level</h3>
                <p>{product.roastLevel}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Certifications</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.certification.length > 0 ? (
                  product.certification.map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {cert}
                    </span>
                  ))
                ) : (
                  <span>No certifications</span>
                )}
              </div>
            </div>
          </>
        );
      }
      
      // Coffee Machine specific fields
      if ('condition' in product && 'brand' in product) {
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium">Brand</h3>
                <p>{product.brand} {product.model}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Type</h3>
                <p>{product.type}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Condition</h3>
              <p>{product.condition}</p>
              {product.refurbishmentDetails && product.refurbishmentDetails !== "N/A" && (
                <p className="mt-1 text-sm text-gray-600">{product.refurbishmentDetails}</p>
              )}
            </div>
          </>
        );
      }
      
      // Machine Part specific fields
      if ('partName' in product && 'compatibility' in product) {
        return (
          <>
            <div>
              <h3 className="text-lg font-medium">Part Type</h3>
              <p>{product.type}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Compatibility</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.compatibility.map((item) => (
                  <span key={item} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </>
        );
      }
      
      // Repair Service specific fields
      if ('serviceType' in product && 'package' in product) {
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium">Service Type</h3>
                <p>{product.serviceType}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Package</h3>
                <p>{product.package}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Turnaround Time</h3>
              <p>{product.turnaroundTime}</p>
            </div>
            {product.certification && (
              <div>
                <h3 className="text-lg font-medium">Certification</h3>
                <p>{product.certification}</p>
              </div>
            )}
          </>
        );
      }
      
      // Additional Service specific fields
      if ('service' in product && 'terms' in product) {
        return (
          <>
            <div>
              <h3 className="text-lg font-medium">Terms</h3>
              <p>{product.terms}</p>
            </div>
          </>
        );
      }
      
      return null;
    };

    return (
      <div className="space-y-6">
        {commonDetails}
        <div className="space-y-4">
          {specificDetails()}
        </div>
      </div>
    );
  };

  const getProductName = () => {
    if (!product) return "";
    
    if ('name' in product) return product.name;
    if ('brand' in product) return `${product.brand} ${product.model}`;
    if ('partName' in product) return product.partName;
    if ('serviceType' in product) return `${product.serviceType} - ${product.package}`;
    if ('service' in product) return product.service;
    
    return "Product";
  };

  const getProductCategory = () => {
    if (!product) return "";
    
    if ('category' in product) return product.category;
    if ('serviceType' in product) return product.serviceType;
    if ('service' in product) return "Additional Service";
    
    return productType;
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={handleBack}>Return to Previous Page</Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-6 sm:p-10"
    >
      <button 
        onClick={handleBack}
        className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 border-none bg-transparent cursor-pointer"
      >
        <ArrowLeft size={18} />
        <span>Back to products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.imageUrl || "/placeholder-image.jpg"}
            alt={getProductName()}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg bg-gray-50"
          />
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">{getProductName()}</h2>
            <p className="text-gray-600">{getProductCategory()}</p>
          </div>

          {renderProductDetails()}

          {/* <div className="pt-6">
            <Button className="w-full md:w-auto">
              {productType.includes("Service") ? "Book Now" : "Add to Cart"}
            </Button>
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Main component with Suspense
export default function ProductDetailPage() {
  return (
    <Suspense fallback={<ProductDetailLoading />}>
      <ProductDetailContent />
    </Suspense>
  );
}