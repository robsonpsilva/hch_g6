import ProductClient from './ProductClient';

interface Product {
  id: string;
  imageUrl: string;
  imageUrls: string[];
  description: string;
  name: string;
  price: number;
  rating: number;
}

interface Collection {
  id: number;
  isFeatured: boolean;
  productIds: string[];
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = params.id;

  // Busca os dados da API
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  const products: Product[] = data.products;
  const collections: Collection[] = data.collections;

  // Encontra o produto específico pelo ID
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  // Encontra a coleção do produto atual
  const currentCollection = collections.find(c => c.productIds.includes(product.id));
  
  // Filtra os produtos da mesma coleção (excluindo o produto atual)
  const similarProducts = products.filter(p => 
    currentCollection?.productIds.includes(p.id) && p.id !== product.id
  );

  // Classifica os produtos por avaliação (rating) em ordem decrescente e pega os 6 primeiros
  const topRatedSimilarProducts = similarProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <ProductClient product={product} similarProducts={topRatedSimilarProducts} />
  );
}