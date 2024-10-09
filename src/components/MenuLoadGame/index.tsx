import { useState, useEffect } from 'react';
import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

export default function MenuLoadGame() {
   const { loadData, selectPage } = useContext(ContextScene)
   const [saveFiles, setSaveFiles] = useState<{ fileName: string; content: any }[]>([]);

   useEffect(() => {
      const fetchSaveFiles = async () => {
         const files = await window.electron.getSaveFiles();
         setSaveFiles(files);
      };
      fetchSaveFiles();
   }, []);

   const handleStartGame = (content: any) => {
      const gameData = {
         name: content.name,
         yugioh: content.yugioh,
         scene: content.scene,
         dialogId: content.dialogId,
      }

      loadData(gameData);
      selectPage(2)
   };

   return (
      <div className='flex flex-col pt-8 gap-4 items-center'>
         {saveFiles.length > 0 ? (
            saveFiles.map((file) => (
               <button 
                  key={file.fileName} 
                  onClick={() => handleStartGame(file.content)}
               >
                  {file.fileName}
               </button>
            ))
         ) : (
            <p>Não há arquivos de save disponíveis.</p>
         )}

         <button onClick={() => selectPage(1)}>MENU</button>
      </div>
   );
}
