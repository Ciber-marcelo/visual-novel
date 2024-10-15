import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import ButtonSave from './ButtonSave';
import { currentDateTime } from '@/utils/currentDateTime';

export default function MenuSaveGame() {
   const { info, sceneNumber, currentDialogue, selectPage } = useContext(ContextScene)
   const [saveFiles, setSaveFiles] = useState<{ fileName: string; content: any }[]>([]);

   useEffect(() => {
      const fetchSaveFiles = async () => {
         const files = await window.electron.getSaveFiles();
         setSaveFiles(files);
      };
      fetchSaveFiles();
   }, [saveFiles]);

   const handleSaveGame = async () => {
      const gameData = {
         ...info,
         name: info.name,
         yugioh: info.yugioh,
         scene: sceneNumber,
         dialogId: currentDialogue,
      }

      const cdt = currentDateTime()

      const result = await window.electron.saveGame(gameData, `savegame${cdt}.json`);

      if (result.success) {
         console.log('Progresso salvo com sucesso!', gameData);
      } else {
         console.error('Erro ao salvar o progresso:', result.error);
      }
   };

   return (
      <div className='flex flex-col pt-8 gap-4 items-center'>
         {saveFiles.length}

         <button
            onClick={handleSaveGame}
            disabled={saveFiles.length >= 9 ? true : false}
         >
            {saveFiles.length >= 9 ? "chego a 9 não pode criar mais save" : "Criar novo save"}
         </button>

         {saveFiles.map((file, i) => (
            <ButtonSave
               key={file.fileName}
               // name={file.fileName}
               name={`save${i + 1}${file.content.yugioh}`}
               saveFileName={file.fileName}
            />
         ))}

         {/* <ButtonSave name={'Salvar Jogo 1'} saveFileName={'savegame1.json'}/> */}
         {/* <ButtonLoad name={'Carregar Jogo 1'} saveFileName={'savegame1.json'}/> */}

         <button onClick={() => selectPage(1)}>MENU</button>
         <button onClick={() => selectPage(2)}>GAME</button>
      </div>
   );
}
