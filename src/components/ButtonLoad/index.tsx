import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

export default function ButtonLoad({name, saveFileName}: any) {
   const { loadData } = useContext(ContextScene)

   const handleLoadGame = async () => {
      const gameData = await window.electron.loadGame(saveFileName);
      if (gameData) {
         console.log('Progresso carregado:', gameData);
         loadData(gameData)
      } else {
         console.log('Nenhum progresso salvo encontrado.');
      }
   };

   return (
      <div className="bg-blue-500">
         <button onClick={handleLoadGame}>{name}</button>
      </div>
   )
}