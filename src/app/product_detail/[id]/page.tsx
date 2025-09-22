import Image from 'next/image';

interface Product {
  id: string;
  imageUrl: string;
  imageUrls: string[];
  description: string;
  name: string;
  price: number;
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Busca os dados da API
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  const products: Product[] = data.products;

  // Encontra o produto específico pelo ID
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-[10px] w-[100vw] mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {product.imageUrls && product.imageUrls.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.imageUrls.map((url, index) => (
                <div key={index} className="relative w-full h-[300px] mb-4">
                  <Image src={url} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative w-full h-[400px]">
              <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary-800">{product.name}</h1>
          <p className="text-2xl mt-4 text-gray-900 font-semibold">R$ {product.price.toFixed(2)}</p>
          <p className="mt-6 text-lg text-gray-700">{product.description}</p>
          <button className="mt-8 w-full px-8 py-3 font-bold rounded-lg shadow-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}