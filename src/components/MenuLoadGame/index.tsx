import { useState, useEffect } from 'react';
import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import CardLoadSaveGame from '../CardLoadSaveGame';
import ButtonMenu from '../ButtonMenu';

export default function MenuLoadGame() {
   const { loadData, selectPage } = useContext(ContextScene)
   const [saveFiles, setSaveFiles] = useState<{ fileName: string; content: any }[]>([]);

   const fetchSaveFiles = async () => {
      const files = await window.electron.getSaveFiles();
      setSaveFiles(files);
   };

   useEffect(() => {
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

   const handleDeleteSave = async (fileName: string) => {
      const response = await window.electron.deleteSave(fileName);
      if (response.success) {
         console.log('Save deletado com sucesso!');
         fetchSaveFiles();
      } else {
         console.error('Erro ao deletar save:', response.error);
      }
   }

   return (
      <div className='screen-FHD bg-gradient1 flex flex-col gap-5 justify-center items-center'>
         <div className='text-colorText1 font-extrabold text-[36px] font-border'>
            CARREGAR
         </div>
         <div className="container-menu h-[670px] p-3 gap-3 overflow-y-auto scrollbar">
            {saveFiles.length > 0 && (
               saveFiles.map((file) => (
                  <CardLoadSaveGame
                     key={file.fileName}
                     onclick={() => handleStartGame(file.content)}
                     deleteSave={() => handleDeleteSave(file.fileName)}
                  />
               ))
            )}
         </div>
         <div className="container-menu p-3">
            <ButtonMenu name="VOLTAR" onClick={() => selectPage(1)} />
         </div>
      </div>
   );
}
