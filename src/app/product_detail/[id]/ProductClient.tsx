"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  imageUrl: string;
  imageUrls: string[];
  description: string;
  name: string;
  price: number;
}

export default function ProductClient({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(
    product.imageUrls.length > 0 ? product.imageUrls[0] : product.imageUrl
  );

  return (
    <div className="mx-auto max-w-7xl px-[10px] w-[100vw] mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Galeria */}
        <div className="flex-1 relative">
          {/* Imagem principal */}
          <div className="relative w-full h-[500px]">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {product.imageUrls.slice(0, 3).map((url, index) => (
              <button
                key={index}
                onClick={() => setMainImage(url)}
                className={`relative w-[80px] h-[80px] rounded-lg overflow-hidden border-2 transition ${
                  mainImage === url
                    ? "border-red-600"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                <Image
                  src={url}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Infos */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary-800">
            {product.name}
          </h1>
          <p className="text-2xl mt-4 text-gray-900 font-semibold">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="mt-6 text-lg text-gray-700">{product.description}</p>
          <button className="mt-8 w-full px-8 py-3 font-bold rounded-lg shadow-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}