import ProductClient from "./ProductClient";

interface Product {
  id: string;
  imageUrl: string;
  imageUrls: string[];
  description: string;
  name: string;
  price: number;
}

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // ✅ agora funciona sem erro

  // Busca os dados da API no lado do servidor
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // garante dados frescos
  });
  const data = await res.json();
  const products: Product[] = data.products;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  // Passa os dados para o Client Component
  return <ProductClient product={product} />;
}