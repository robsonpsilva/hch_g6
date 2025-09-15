// components/ProductCard.tsx

import Image from 'next/image';

// Definimos o tipo das propriedades (props) que o componente irá receber
interface ProductCardProps {
  imageUrl: string;
  description: string;
  price: number;
}

export default function ProductCard({ imageUrl, description, price }: ProductCardProps) {
  // A tag 'Image' do Next.js é otimizada para performance
  // e lida automaticamente com a responsividade da imagem.
  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
      {/* Imagem do Produto */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={description} // O texto alternativo é crucial para acessibilidade
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Conteúdo do Cartão */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-base mb-2 flex-grow">{description}</p>
        <p className="text-xl font-bold text-gray-900 mt-auto">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}