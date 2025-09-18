import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@app/components/ProductCard/ProductCard";

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
        {/* Background image that occupies 100% of the container width */}
        <Image
          src="/hero_handcrafted_heaven.png"
          alt="Hero background image with handmade products"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-90"
        />
        {/* Content over the image */}
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
      
      {/* Main page content, below the hero */}
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
        {/* Large card on the left occupying 1 column and 2 rows */}
        <div className="col-span-1 row-span-2">
          <ProductCard
            imageUrl={products[3].imageUrl}
            description={products[3].description}
            price={products[3].price}
          />
        </div>
        {/* Row 1: three small cards on the right */}
        {products.slice(4, 7).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
        ))}

        {/* Row 2: three small cards on the right */}
        {products.slice(7, 10).map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            price={product.price}
          />
          ))}
      </div>

      {/* --- About Us --- */}
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