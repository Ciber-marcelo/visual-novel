import { useEffect, useState } from 'react';

export default function ResponsiveDiv({ children }: any) {
   const [scale, setScale] = useState(1);

   const updateScale = () => {
      const container = document.getElementById('container');

      if (container) {
         const containerWidth = container.offsetWidth;

         // Cálculo da escala baseado na largura, mantendo a proporção 16:9
         const baseWidth = 1920; // Largura de referência para escala 1.0
         const newScale = containerWidth / baseWidth;

         setScale(newScale);
      }
   };

   useEffect(() => {
      updateScale(); // Ajusta a escala ao carregar a página
      window.addEventListener('resize', updateScale);

      return () => {
         window.removeEventListener('resize', updateScale);
      };
   }, []);

   return (
      <div 
         id="container" 
         className="w-full h-full bg-blue-800"             
         style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
         {children}
      </div>
   );
}
