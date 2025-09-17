// app/collections/page.js
'use client';

import { useState } from 'react';
import ImageGallery from "@/components/ImageGallery/ImageGallery";

// A lista completa de coleções agora contém todos os dados
const collections = [
  { id: 1, name: 'Clay & Glaze', isFeatured: true, story: 'Our Clay & Glaze studio is dedicated to the art of pottery, where each piece is handcrafted from natural clay and finished with unique, durable glazes. We believe in creating functional art that brings warmth to your home.', imagePath: '/collections/clay_glaze.png' },
  { id: 2, name: 'Ethereal Glassworks', isFeatured: true, story: 'At Ethereal Glassworks, we capture light and color in every piece of blown glass. Our artisans use traditional techniques to create whimsical ornaments and sculptures that look like they belong in a fairytale.', imagePath: '/collections/ethereal_glassworks.png' },
  { id: 3, name: 'Glimmerstone Jewels', isFeatured: true, story: 'Glimmerstone Jewels specializes in handmade, beaded jewelry. Our designers draw inspiration from vibrant cultures and the natural world, selecting each bead for its unique shape, color, and story.', imagePath: '/collections/glimmerstone_jewels.png' },
  { id: 4, name: 'Heritage Leathers', isFeatured: true, story: 'Heritage Leathers Co. is committed to the timeless craft of leatherwork. We use full-grain leather to create wallets, bags, and accessories that are designed to last a lifetime and develop a beautiful patina over time.', imagePath: '/collections/heritage_leathers.png' },
  { id: 5, name: 'Timbercraft Artisans', isFeatured: true, story: 'Timbercraft Artisans transforms raw wood into elegant, hand-carved sculptures. Each piece celebrates the natural grain and beauty of the wood, with a focus on intricate detail and organic, flowing forms.', imagePath: '/collections/timbercraft_artisans.png' },
  { id: 6, name: 'Wool & Whimsy', isFeatured: true, story: 'Wool & Whimsy crafts cozy, hand-knitted accessories. We use only the finest natural wool to create warm, soft pieces that are as beautiful as they are comfortable, perfect for cold weather.', imagePath: '/collections/whool_whimsy.png' },
  { id: 7, name: 'Paper & Ink', isFeatured: false, story: 'Paper & Ink is a collective of illustrators and printmakers. We specialize in creating custom stationery, hand-bound journals, and limited-edition prints that celebrate the art of writing and design.', imagePath: '/collections/paper_ink.png' },
  { id: 8, name: 'Stitch & Thread', isFeatured: false, story: 'The Stitch & Thread workshop focuses on bespoke embroidery and textile art. Every piece is a unique tapestry of intricate patterns and vibrant colors, bringing a touch of personalized elegance to any space.', imagePath: '/collections/stitch_thread.png' },
  { id: 9, name: 'Wicker & Weave', isFeatured: false, story: 'Wicker & Weave creates beautiful, handcrafted furniture and decor from natural fibers. Our artisans use traditional weaving techniques to produce durable and elegant pieces that blend seamlessly with any rustic or modern design.', imagePath: '/collections/wicker_weave.png' },
  { id: 10, name: 'Forged Metals', isFeatured: false, story: 'Forged Metals is a studio dedicated to the ancient craft of blacksmithing. Our artisans forge unique iron and steel sculptures, tools, and home goods that combine raw strength with refined artistry.', imagePath: '/collections/forged_metals.png' },
  { id: 11, name: 'Canvas & Brush', isFeatured: false, story: 'Canvas & Brush is an artist-led studio where every painting tells a story. We specialize in a variety of mediums, from vivid oil paintings to subtle watercolors, capturing landscapes and portraits with deep emotion.', imagePath: '/collections/canvas_brush.png' },
];

export default function Collections() {
  const [selectedCollectionName, setSelectedCollectionName] = useState('');
  
  // Encontra a coleção completa baseada no nome selecionado
  const selectedCollection = collections.find(c => c.name === selectedCollectionName);
  
  // Condicionalmente obtém a história da coleção selecionada
  const story = selectedCollection ? selectedCollection.story : null;
  const collectionName = selectedCollection ? selectedCollection.name : null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Our Collections</h1>
      
      {/* Passa a lista completa e a função de atualização para o componente filho */}
      <ImageGallery 
        collections={collections}
        selectedCollection={selectedCollectionName}
        setSelectedCollection={setSelectedCollectionName}
      />
      
      {/* Exibe a história se uma coleção estiver selecionada */}
      {story && (
        <div className="my-10 mx-auto max-w-7xl px-4 md:px-8">
          <hr className="my-6 border-gray-300" />
          <h2 className="text-2xl font-bold mb-4 text-center">My Story</h2>
          {/* Adiciona o nome da empresa aqui */}
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">{collectionName}</h3>
          <p className="text-gray-700 leading-relaxed">{story}</p>
        </div>
      )}
    </div>
  );
}