// app/collections/page.js
'use client';

import { useState } from 'react';
import ImageGallery from "@app/components/ImageGallery/ImageGallery";
import CuratedCollection from "@app/components/CuratedCollections/CuratedCollections";

const collections = [
  {
    id: 1,
    name: 'Clay & Glaze',
    isFeatured: true,
    story: 'Our Clay & Glaze studio is dedicated to the art of pottery, where each piece is handcrafted from natural clay and finished with unique, durable glazes. We believe in creating functional art that brings warmth to your home.',
    imagePath: '/collections/clay_glaze.png',
    products: [
      { id: '1a', name: 'Ceramic Vase', url: '/ceramic_vase.png' },
      { id: '1b', name: 'Glazed Bowl', url: '/glased_bowl.png' },
      { id: '1c', name: 'Hand-thrown Mug', url: '/hand_thrown_mug.png' },
      { id: '1d', name: 'Terracotta Jar', url: '/terracotta_jar.png' },
      { id: '1e', name: 'Clay Plate', url: '/clay_plate.png' },
      { id: '1f', name: 'Figurine Sculpture', url: 'figurine_sculpture.png' },
    ],
  },
  {
    id: 2,
    name: 'Ethereal Glassworks',
    isFeatured: true,
    story: 'At Ethereal Glassworks, we capture light and color in every piece of blown glass. Our artisans use traditional techniques to create whimsical ornaments and sculptures that look like they belong in a fairytale.',
    imagePath: '/collections/ethereal_glassworks.png',
    products: [
      { id: '2a', name: 'Blown Glass Vase', url: 'https://via.placeholder.com/250/F0F9FF/009EFF?text=Blown+Glass+Vase' },
      { id: '2b', name: 'Glass Paperweight', url: 'https://via.placeholder.com/250/E0F2FF/009EFF?text=Glass+Paperweight' },
      { id: '2c', name: 'Crystal Orb', url: 'https://via.placeholder.com/250/BFE7FF/009EFF?text=Crystal+Orb' },
      { id: '2d', name: 'Stained Glass Panel', url: 'https://via.placeholder.com/250/99D4FF/009EFF?text=Stained+Glass+Panel' },
      { id: '2e', name: 'Glass Bell', url: 'https://via.placeholder.com/250/4AB9FF/009EFF?text=Glass+Bell' },
      { id: '2f', name: 'Blown Glass Ornament', url: 'https://via.placeholder.com/250/009EFF/FFFFFF?text=Blown+Glass+Ornament' },
    ],
  },
  {
    id: 3,
    name: 'Glimmerstone Jewels',
    isFeatured: true,
    story: 'Glimmerstone Jewels specializes in handmade, beaded jewelry. Our designers draw inspiration from vibrant cultures and the natural world, selecting each bead for its unique shape, color, and story.',
    imagePath: '/collections/glimmerstone_jewels.png',
    products: [
      { id: '3a', name: 'Beaded Necklace', url: 'https://via.placeholder.com/250/F5F5FF/5A5AFF?text=Beaded+Necklace' },
      { id: '3b', name: 'Gemstone Bracelet', url: 'https://via.placeholder.com/250/EBEBFF/5A5AFF?text=Gemstone+Bracelet' },
      { id: '3c', name: 'Crystal Earrings', url: 'https://via.placeholder.com/250/D6D6FF/5A5AFF?text=Crystal+Earrings' },
      { id: '3d', name: 'Pendant Charm', url: 'https://via.placeholder.com/250/C2C2FF/5A5AFF?text=Pendant+Charm' },
      { id: '3e', name: 'Silver Ring', url: 'https://via.placeholder.com/250/8E8EFF/5A5AFF?text=Silver+Ring' },
      { id: '3f', name: 'Pearl Brooch', url: 'https://via.placeholder.com/250/5A5AFF/FFFFFF?text=Pearl+Brooch' },
    ],
  },
  {
    id: 4,
    name: 'Heritage Leathers',
    isFeatured: true,
    story: 'Heritage Leathers Co. is committed to the timeless craft of leatherwork. We use full-grain leather to create wallets, bags, and accessories that are designed to last a lifetime and develop a beautiful patina over time.',
    imagePath: '/collections/heritage_leathers.png',
    products: [
      { id: '4a', name: 'Leather Wallet', url: 'https://via.placeholder.com/250/2C2C66/FFD700?text=Leather+Wallet' },
      { id: '4b', name: 'Satchel Bag', url: 'https://via.placeholder.com/250/2C2C66/A9A9A9?text=Satchel+Bag' },
      { id: '4c', name: 'Leather Belt', url: 'https://via.placeholder.com/250/2C2C66/C0C0C0?text=Leather+Belt' },
      { id: '4d', name: 'Key Fob', url: 'https://via.placeholder.com/250/2C2C66/F5F5F5?text=Key+Fob' },
      { id: '4e', name: 'Journal Cover', url: 'https://via.placeholder.com/250/2C2C66/D2B48C?text=Journal+Cover' },
      { id: '4f', name: 'Leather Card Holder', url: 'https://via.placeholder.com/250/1D1D33/FFFFFF?text=Card+Holder' },
    ],
  },
  {
    id: 5,
    name: 'Timbercraft Artisans',
    isFeatured: true,
    story: 'Timbercraft Artisans transforms raw wood into elegant, hand-carved sculptures. Each piece celebrates the natural grain and beauty of the wood, with a focus on intricate detail and organic, flowing forms.',
    imagePath: '/collections/timbercraft_artisans.png',
    products: [
      { id: '5a', name: 'Carved Wood Statue', url: 'https://via.placeholder.com/250/D2B48C/8B4513?text=Wood+Statue' },
      { id: '5b', name: 'Wooden Bowl', url: 'https://via.placeholder.com/250/A0522D/D2B48C?text=Wooden+Bowl' },
      { id: '5c', name: 'Hand-carved Spoon', url: 'https://via.placeholder.com/250/8B4513/FFFFFF?text=Carved+Spoon' },
      { id: '5d', name: 'Wooden Tray', url: 'https://via.placeholder.com/250/5A4C3D/D2B48C?text=Wooden+Tray' },
      { id: '5e', name: 'Decorative Box', url: 'https://via.placeholder.com/250/CD853F/FFFFFF?text=Decorative+Box' },
      { id: '5f', name: 'Coasters', url: 'https://via.placeholder.com/250/8B4513/A9A9A9?text=Coasters' },
    ],
  },
  {
    id: 6,
    name: 'Wool & Whimsy',
    isFeatured: true,
    story: 'Wool & Whimsy crafts cozy, hand-knitted accessories. We use only the finest natural wool to create warm, soft pieces that are as beautiful as they are comfortable, perfect for cold weather.',
    imagePath: '/collections/whool_whimsy.png',
    products: [
      { id: '6a', name: 'Knitted Scarf', url: 'https://via.placeholder.com/250/FFFFFF/5A5A5A?text=Knitted+Scarf' },
      { id: '6b', name: 'Wool Beanie', url: 'https://via.placeholder.com/250/F5F5F5/8B4513?text=Wool+Beanie' },
      { id: '6c', name: 'Hand-knit Gloves', url: 'https://via.placeholder.com/250/D3D3D3/009EFF?text=Hand-knit+Gloves' },
      { id: '6d', name: 'Wool Blanket', url: 'https://via.placeholder.com/250/A9A9A9/4B0082?text=Wool+Blanket' },
      { id: '6e', name: 'Woolen Socks', url: 'https://via.placeholder.com/250/696969/FFFFFF?text=Woolen+Socks' },
      { id: '6f', name: 'Knitted Sweater', url: 'https://via.placeholder.com/250/4682B4/FFFFFF?text=Knitted+Sweater' },
    ],
  },
  {
    id: 7,
    name: 'Paper & Ink',
    isFeatured: false,
    story: 'Paper & Ink is a collective of illustrators and printmakers. We specialize in creating custom stationery, hand-bound journals, and limited-edition prints that celebrate the art of writing and design.',
    imagePath: '/collections/paper_ink.png',
    products: [
      { id: '7a', name: 'Hand-bound Journal', url: 'https://via.placeholder.com/250/A9A9A9/2F4F4F?text=Hand-bound+Journal' },
      { id: '7b', name: 'Letterpress Prints', url: 'https://via.placeholder.com/250/D3D3D3/696969?text=Letterpress+Prints' },
      { id: '7c', name: 'Custom Stationery', url: 'https://via.placeholder.com/250/F5F5F5/4682B4?text=Custom+Stationery' },
      { id: '7d', name: 'Artistic Note Cards', url: 'https://via.placeholder.com/250/B0C4DE/5A5A5A?text=Artistic+Note+Cards' },
      { id: '7e', name: 'Sketchbook', url: 'https://via.placeholder.com/250/808080/FFFFFF?text=Sketchbook' },
      { id: '7f', name: 'Ink Pen Set', url: 'https://via.placeholder.com/250/2F4F4F/FFFFFF?text=Ink+Pen+Set' },
    ],
  },
  {
    id: 8,
    name: 'Stitch & Thread',
    isFeatured: false,
    story: 'The Stitch & Thread workshop focuses on bespoke embroidery and textile art. Every piece is a unique tapestry of intricate patterns and vibrant colors, bringing a touch of personalized elegance to any space.',
    imagePath: '/collections/stitch_thread.png',
    products: [
      { id: '8a', name: 'Embroidered Patch', url: 'https://via.placeholder.com/250/FF6347/FFFFFF?text=Embroidered+Patch' },
      { id: '8b', name: 'Textile Art', url: 'https://via.placeholder.com/250/4682B4/F5F5F5?text=Textile+Art' },
      { id: '8c', name: 'Hand-stitched Tapestry', url: 'https://via.placeholder.com/250/800080/FFFFFF?text=Hand-stitched+Tapestry' },
      { id: '8d', name: 'Patterned Cushion', url: 'https://via.placeholder.com/250/B0E0E6/4B0082?text=Patterned+Cushion' },
      { id: '8e', name: 'Silk Ribbon Art', url: 'https://via.placeholder.com/250/F08080/800080?text=Silk+Ribbon+Art' },
      { id: '8f', name: 'Custom Embroidered Bag', url: 'https://via.placeholder.com/250/5F9EA0/FFFFFF?text=Custom+Embroidered+Bag' },
    ],
  },
  {
    id: 9,
    name: 'Wicker & Weave',
    isFeatured: false,
    story: 'Wicker & Weave creates beautiful, handcrafted furniture and decor from natural fibers. Our artisans use traditional weaving techniques to produce durable and elegant pieces that blend seamlessly with any rustic or modern design.',
    imagePath: '/collections/wicker_weave.png',
    products: [
      { id: '9a', name: 'Wicker Basket', url: 'https://via.placeholder.com/250/8B4513/FFFFFF?text=Wicker+Basket' },
      { id: '9b', name: 'Woven Chair', url: 'https://via.placeholder.com/250/D2B48C/8B4513?text=Woven+Chair' },
      { id: '9c', name: 'Rattan Lamp', url: 'https://via.placeholder.com/250/A0522D/D2B48C?text=Rattan+Lamp' },
      { id: '9d', name: 'Decorative Tray', url: 'https://via.placeholder.com/250/8B4513/F0E8E0?text=Decorative+Tray' },
      { id: '9e', name: 'Woven Wall Decor', url: 'https://via.placeholder.com/250/D2B48C/A0522D?text=Woven+Wall+Decor' },
      { id: '9f', name: 'Rope Planter', url: 'https://via.placeholder.com/250/A0522D/8B4513?text=Rope+Planter' },
    ],
  },
  {
    id: 10,
    name: 'Forged Metals',
    isFeatured: false,
    story: 'Forged Metals is a studio dedicated to the ancient craft of blacksmithing. Our artisans forge unique iron and steel sculptures, tools, and home goods that combine raw strength with refined artistry.',
    imagePath: '/collections/forged_metals.png',
    products: [
      { id: '10a', name: 'Wrought Iron Candlestick', url: 'https://via.placeholder.com/250/2F4F4F/A9A9A9?text=Iron+Candlestick' },
      { id: '10b', name: 'Steel Bottle Opener', url: 'https://via.placeholder.com/250/696969/808080?text=Steel+Opener' },
      { id: '10c', name: 'Hand-forged Sculpture', url: 'https://via.placeholder.com/250/4B0082/B0C4DE?text=Forged+Sculpture' },
      { id: '10d', name: 'Iron Grill', url: 'https://via.placeholder.com/250/2F4F4F/C0C0C0?text=Iron+Grill' },
      { id: '10e', name: 'Decorative Steel Hook', url: 'https://via.placeholder.com/250/808080/4682B4?text=Steel+Hook' },
      { id: '10f', name: 'Metal Art Piece', url: 'https://via.placeholder.com/250/A9A9A9/4B0082?text=Metal+Art+Piece' },
    ],
  },
  {
    id: 11,
    name: 'Canvas & Brush',
    isFeatured: false,
    story: 'Canvas & Brush is an artist-led studio where every painting tells a story. We specialize in a variety of mediums, from vivid oil paintings to subtle watercolors, capturing landscapes and portraits with deep emotion.',
    imagePath: '/collections/canvas_brush.png',
    products: [
      { id: '11a', name: 'Oil Painting', url: 'https://via.placeholder.com/250/FF6347/FFFFFF?text=Oil+Painting' },
      { id: '11b', name: 'Watercolor Portrait', url: 'https://via.placeholder.com/250/4682B4/F5F5F5?text=Watercolor+Portrait' },
      { id: '11c', name: 'Abstract Art', url: 'https://via.placeholder.com/250/800080/FFFFFF?text=Abstract+Art' },
      { id: '11d', name: 'Landscape Painting', url: 'https://via.placeholder.com/250/B0E0E6/4B0082?text=Landscape+Painting' },
      { id: '11e', name: 'Acrylic Canvas', url: 'https://via.placeholder.com/250/F08080/800080?text=Acrylic+Canvas' },
      { id: '11f', name: 'Mixed Media', url: 'https://via.placeholder.com/250/5F9EA0/FFFFFF?text=Mixed+Media' },
    ],
  },
];

export default function Collections() {
  const [selectedCollectionName, setSelectedCollectionName] = useState('');
  
  // Encontra a coleção completa baseada no nome selecionado
  const selectedCollection = collections.find(c => c.name === selectedCollectionName);
  
  // Condicionalmente obtém a história da coleção selecionada
  const story = selectedCollection ? selectedCollection.story : null;
  const collectionName = selectedCollection ? selectedCollection.name : null;

  const curatedCollectionImages = selectedCollection ? selectedCollection.products : [];


  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-800">Our Collections</h1>
      
      {/* Passa a lista completa e a função de atualização para o componente filho */}
      <ImageGallery 
        collections={collections}
        selectedCollection={selectedCollectionName}
        setSelectedCollection={setSelectedCollectionName}
      />
      
      {/* Exibe a história e a coleção curada se uma coleção estiver selecionada */}
      {story && (
        <div className="my-10 mx-auto max-w-7xl px-4 md:px-8">
          <hr className="my-6" />
          <h2 className="text-2xl font-bold mb-4 text-center">My Story</h2>
          {/* Adiciona o nome da empresa aqui */}
          <h3 className="text-xl font-semibold mb-4 text-center">{collectionName}</h3>
          <p className="text-black leading-relaxed">{story}</p>
          
          <hr className="my-6" />
          {/* Insere o componente CuratedCollection e passa as imagens mockadas */}
          <CuratedCollection images={curatedCollectionImages} />
        </div>
      )}
    </div>
  );
}