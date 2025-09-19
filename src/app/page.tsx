import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@app/components/ProductCard/ProductCard";

// 1. Defina a interface para o tipo 'Product'
interface Product {
  id: number;
  imageUrl: string;
  description: string;
  price: number;
}

// O componente agora é uma função assíncrona
export default async function Page() {
  const res = await fetch('http://localhost:3000/api/products');
  // 2. Converta a resposta JSON para o tipo 'Product[]'
  const products: Product[] = await res.json();
  
  if (!products) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-[10px] w-[100vw]">
      <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center border-2 border-slate-800">
        <Image
          src="/hero_handcrafted_heaven.png"
          alt="Hero background image with handmade products"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-90"
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight [-webkit-text-stroke:2px_black]">
            Handcrafted Heaven
          </h1>
          <Link href="/shop" passHref>
            <button className="w-64 mt-8 px-8 py-3 font-bold rounded-lg shadow-lg hover:bg-red-500 transition-colors duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      
      <hr className="my-8 border-brand-900" />
      <h1 className="text-3xl font-bold text-center text-primary-800">Featured Products</h1>
      
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
        <div className="col-span-1 row-span-2">
          {products[3] && (
            <ProductCard
              imageUrl={products[3].imageUrl}
              description={products[3].description}
              price={products[3].price}
            />
          )}
        </div>
        {products.slice(4, 7).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
        ))}

        {products.slice(7, 10).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <hr className="my-8 border-brand-900" />
      <h2 className="text-3xl font-bold text-center text-black">About Us</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-6 gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/handcrafted_about_us.png"
              alt="Hands of a person crafting a ceramic mug on a pottery wheel"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-gray-700 p-4">
          <p className="text-lg leading-relaxed">
            Welcome to Handcrafted Heaven, your paradise for artisanal products. Our mission is to celebrate the beauty, uniqueness, and passion hidden in every handmade piece. We believe that a house truly becomes a home when it is filled with objects that tell stories — products created with care, purpose, and the dedication of a skilled artisan.
          </p>
          <br/>
          <p className="text-lg leading-relaxed">
            Founded with the vision of connecting talented creators with people who value authenticity, Handcrafted Heaven is more than just an online store. We are a community that supports independent artists and designers, offering them a platform to share their unique creations with the world. Each item in our collection, from ceramics to textiles and jewelry, is carefully selected for its quality, durability, and exceptional design.
          </p>
          <br/>
          <p className="text-lg leading-relaxed">
            We are committed to sustainability and ethical production. Many of our artisans use recycled or sustainably sourced materials, ensuring that the beauty of our products does not harm our planet. By shopping with us, you are not just acquiring an object; you are investing in a tradition, an art form, and a more conscious future. Join us in discovering the magic of handmade goods and transform your space with the soul of a work of art.
          </p>
        </div>
      </div>
    </div>
  );
}