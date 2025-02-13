import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

// cria um type pra esse name e savefilename
export default function ButtonSave({name, saveFileName}: any) {
   const { info, sceneNumber, currentDialogue } = useContext(ContextScene)

   const handleSaveGame = async () => {
      const gameData = {
         ...info,
         name: info.name,
         yugioh: info.yugioh,  
         scene: sceneNumber,  
         dialogId: currentDialogue
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
         <button onClick={handleSaveGame}>
            {name}
         </button>
      </div>
   )
}