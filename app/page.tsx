import Image from "next/image";
import Link from 'next/link';
import ProductCard from "../src/components/ProductCard/ProductCard";

const products = [
  { id:1,
    imageUrl: "/handcrafted_wooden_bowl.png",
    description: "Handcrafted Wooden Bowl - Perfect for Serving and Decor",
    price: 45.99}, 
  { id:2,
    imageUrl: "/scented_candle_in_ceramic_jar.png",
    description: "Scented Candle in Ceramic Jar - Handmade candle with lavender scent, molded in a hand-painted ceramic jar. Ideal for relaxation, decoration, and aromatherapy.",
    price: 25.99}, 
  { id:3,
  imageUrl: "/handwoven_macrame_wall_hanging.png",
  description: "Handwoven Macramé Wall Hanging -  A beautiful handwoven macramé wall hanging made with natural cotton rope. Perfect for adding a bohemian touch to your living space or bedroom.",
  price: 74.90}, 
  
{ id: 4,
  imageUrl: "/handmade_ceramic_planter.png",
  description: "Handmade Ceramic Planter - Ideal for indoor plants and modern decor",
  price: 32.50 },

{ id: 5,
  imageUrl: "/recycled_glass_vase.png",
  description: "Recycled Glass Vase - Eco-friendly vase crafted from repurposed glass",
  price: 41.75 },

{ id: 6,
  imageUrl: "/bamboo_serving_tray.png",
  description: "Bamboo Serving Tray - Lightweight and durable tray for snacks and drinks",
  price: 27.90 },

{ id: 7,
  imageUrl: "/cotton_throw_blanket.png",
  description: "Cotton Throw Blanket - Soft and breathable blanket for cozy evenings",
  price: 59.99 },

{ id: 8,
  imageUrl: "/leather_journal.png",
  description: "Leather Journal - Hand-stitched journal with recycled paper pages",
  price: 38.00 },

{ id: 9,
  imageUrl: "/aroma_diffuser_set.png",
  description: "Aroma Diffuser Set - Includes ceramic diffuser and essential oils",
  price: 49.95 },

{ id: 10,
  imageUrl: "/woven_lamp_shade.png",
  description: "Woven Lamp Shade - Natural fiber lamp shade for warm ambient lighting",
  price: 66.80 }
 
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-[10px] w-[100vw]">
      <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center border-2 border-slate-800">
        {/* Imagem de fundo que ocupa 100% da largura do contêiner */}
        <Image
          src="/hero_handcrafted_heaven.png"
          alt="Hero background image with handmade products"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-90"
        />
        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight [-webkit-text-stroke:2px_black]">
            Handcrafted Heaven
          </h1>
          <Link href="/shop" passHref>
            <button className="w-64 mt-8 px-8 py-3 bg-[#8B4513] text-white font-bold rounded-lg shadow-lg hover:bg-[#A0522D] transition-colors duration-300 border-2 border-brand-500">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      
      {/* Conteúdo principal da página, abaixo do hero */}
        <hr className="my-8 border-brand-900" />
        <h1 className="text-3xl font-bold text-center text-black">Featured Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-6 mt-12">
        {/* Card grande à esquerda ocupando 1 coluna e 2 linhas */}
        <div className="col-span-1 row-span-2">
          <ProductCard
            imageUrl={products[3].imageUrl}
            description={products[3].description}
            price={products[3].price}
          />
        </div>
        {/* Linha 1: três cards pequenos à direita */}
        {products.slice(4, 7).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
        ))}

        {/* Linha 2: três cards pequenos à direita */}
        {products.slice(7, 10).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
          ))}
      </div>


      
    </div>
  );
}
