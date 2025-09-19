import type { NextConfig } from "next";

const nextConfig = {
  images: {
  // A propriedade 'domains' lista todos os domínios externos de onde seu aplicativo
  // pode carregar imagens de forma segura. Isso é uma medida de segurança.
  remotePatterns: [
  {
  protocol: 'https',
  hostname: 'placehold.co',
  },
  ],
  },
};

export default nextConfig;
