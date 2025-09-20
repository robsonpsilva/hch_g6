// src/app/collections/CollectionsClient.js

'use client';

import { useState } from 'react';
import ImageGallery from "@app/components/ImageGallery/ImageGallery";
import CuratedCollection from "@app/components/CuratedCollections/CuratedCollections";
import ProductCard from "@app/components/ProductCard/ProductCard";

// Defina as interfaces para os dados
interface RecommendedProduct {
  id: string;
  name: string;
  url: string;
  url_external?: string;
  price: number;
  description: string;
}

interface Collection {
  id: number;
  name: string;
  isFeatured: boolean;
  story: string;
  imagePath: string;
  products: { id: string; name: string; url: string }[];
  recommendedProducts: RecommendedProduct[];
}

// Atualize o tipo das props para o componente
export default function CollectionsClient({ collections }: { collections: Collection[] }) {
  const [selectedCollectionName, setSelectedCollectionName] = useState('');

  const selectedCollection = collections.find(c => c.name === selectedCollectionName);

  const story = selectedCollection ? selectedCollection.story : null;
  const collectionName = selectedCollection ? selectedCollection.name : null;
  const curatedCollectionImages = selectedCollection ? selectedCollection.products : [];
  const recommendedProducts = selectedCollection ? selectedCollection.recommendedProducts : [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-800">Our Collections</h1>

      <ImageGallery 
        collections={collections}
        selectedCollection={selectedCollectionName}
        setSelectedCollection={setSelectedCollectionName}
      />

      {story && (
        <div className="my-10 mx-auto max-w-7xl px-4 md:px-8">
          <hr className="my-6" />
          <h2 className="text-2xl font-bold mb-4 text-center">My Story</h2>
          <h3 className="text-xl font-semibold mb-4 text-center">{collectionName}</h3>
          <p className="text-black leading-relaxed">{story}</p>

          <hr className="my-6" />
          <CuratedCollection images={curatedCollectionImages} />

          <hr className="my-6" />
          <h2 className="text-2xl font-bold mb-4 text-center">Recommended products</h2>
          <p className="text-black leading-relaxed mb-8 text-center">
            Discover the perfect piece to complete your collection! Our recommended products are handpicked to offer the same quality and exclusivity you love. Don't miss the chance to add a special touch to your life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* O aviso na linha 50 será resolvido aqui */}
            {recommendedProducts.map(product => (
              <ProductCard
                key={product.id}
                description={product.description}
                price={product.price}
                imageUrl={product.url}
                url_external={product.url_external}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}