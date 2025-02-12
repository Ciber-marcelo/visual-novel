import { useState, useEffect } from 'react';
import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import LoadCard from '../CardLoadSaveGame';
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
      <div className='w-[1920px] h-[1080px] bg-gradient-to-b from-[#1D265D] to-[#3E4EB1] flex flex-col gap-5 justify-center items-center'>
         <div className='text-white font-extrabold text-[36px] font-border'>
            CARREGAR
         </div>

         <div className="
            w-[481px] 
            h-[670px] 
            flex 
            flex-col 
            box-border 
            p-3 
            gap-3
            border-8 
            border-black 
            bg-[#1D265D]
            overflow-y-auto
            scrollbar
         ">
            {saveFiles.length > 0 && (
               saveFiles.map((file) => (
                  <LoadCard
                     key={file.fileName}
                     onclick={() => handleStartGame(file.content)}
                     deleteSave={() => handleDeleteSave(file.fileName)}
                  />
               ))
            )}
         </div>
         <div className="
            w-[481px] 
            h-[120px] 
            flex
            box-border 
            p-3 
            border-8 
            border-black 
            bg-[#1D265D]
         ">
            <ButtonMenu name="VOLTAR" onClick={() => selectPage(1)} />
         </div>
      </div>
   );
}
