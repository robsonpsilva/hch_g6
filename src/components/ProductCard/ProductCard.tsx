// components/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';

// Definimos o tipo das propriedades (props) que o componente irá receber,
// tornando 'url_external' opcional com o `?`
interface ProductCardProps {
  imageUrl: string;
  description: string;
  price: number;
  url_external?: string;
}

export default function ProductCard({
  imageUrl,
  description,
  price,
  url_external = '#' // Definimos o valor padrão aqui
}: ProductCardProps) {

  // A partir do Next.js 13, as props são aplicadas diretamente no Link.
  return (
    <Link
      href={url_external}
      target={url_external === '#' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="h-full flex flex-col rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl"
    >
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
    </Link>
  );
}