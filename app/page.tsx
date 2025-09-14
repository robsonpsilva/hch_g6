import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center mx-auto w-[75vw] max-w-7xl px-[10px] border-2 border-slate-800">
        {/* Imagem de fundo que ocupa 100% da largura da tela */}
        <Image
          src="/hero_handcrafted_heaven.png"
          alt="Hero background image with handmade products"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-90"
        />
        {/* Conteúdo sobre a imagem, alinhado com o restante da página */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight [-webkit-text-stroke:2px_black]">
            Handcrafted Heaven
          </h1>
          <Link href="/shop" passHref>
            <button className="w-64 mt-8 px-8 py-3 bg-[#8B4513] text-white font-bold rounded-lg shadow-lg hover:bg-[#A0522D] transition-colors duration-300 border-2">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
