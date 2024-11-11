import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn01.alison-static.net',
      'thinkinginenglish.blog',
      'onlineitalianclasses.com',
      'encrypted-tbn0.gstatic.com',
      'cursa-json-routes.s3.amazonaws.com',
      'learn-portuguese-now.com',
      'bcci.edu.au',
      'www.bcci.edu.au' // Agregado el subdominio www.bcci.edu.au
    ],
  },
  // Otras configuraciones opcionales aquí
};

export default nextConfig;