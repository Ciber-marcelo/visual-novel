/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', //serve para gerar o arquivo estatico do projeto, a pasta "out" e o arquivo serão criados quando rodar o comando "next build".
   images: { unoptimized: true }, // corrigi um problema nas imagens do arquivo estatico
   assetPrefix: './', //adiciona um prefixo para os caminhos do arquivo estatico do Next.js (out/index.html) isso resolve o problema do arquivo estatico não achar a pasta de imagens por exemplo entre outros.

};

export default nextConfig;
