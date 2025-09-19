// src/app/collections/page.js
import CollectionsClient from '@app/components/CollectionClient/CollectionClient';
import { notFound } from 'next/navigation';

export default async function CollectionsPage() {

  const res = await fetch('http://localhost:3000/api/collections');

  if (!res.ok) {
    // Lida com a falha na busca de dados
    console.error('Failed to fetch collections', res.status);
    notFound(); 
  }

  const collections = await res.json();
  
  // Passa os dados buscados do servidor para o componente de cliente
  return (
    <CollectionsClient collections={collections} />
  );
}