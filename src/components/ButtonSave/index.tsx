import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

export default function ButtonSave({name, saveFileName}: any) {
   const { info, sceneNumber, currentDialogue } = useContext(ContextScene)

   const handleSaveGame = async (info: any, sceneNumber: any, currentDialogue: any) => {
      const gameData = {
         ...info,
         name: info.name,
         yugioh: info.yugioh,  
         scene: sceneNumber,  
         dialogId: currentDialogue,  
      }

      const result = await window.electron.saveGame(gameData, saveFileName);

      if (result.success) {
         console.log('Progresso salvo com sucesso!', gameData);
      } else {
         console.error('Erro ao salvar o progresso:', result.error);
      }
   };

   return (
      <div className="bg-red-500">
         <button onClick={() => handleSaveGame(info, sceneNumber, currentDialogue)}>{name}</button>
      </div>
   )
}