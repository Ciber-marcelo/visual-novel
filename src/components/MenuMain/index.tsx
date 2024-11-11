import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import ButtonMenu from "./ButtonMenu";
import Image from 'next/image';

export default function MenuMain() {
   const { loadData, selectPage } = useContext(ContextScene)

   const handleStartGame = () => {
      const gameData = {
         name: "Duelista",
         yugioh: "",
         scene: 1,
         dialogId: 0,
      }

      loadData(gameData);
      selectPage(2)
   };

   const handleCloseApp = () => {
      if (typeof window !== 'undefined' && window.electron) {
         window.electron.closeApp();
      }
   };

   return (
      <div className='w-[1920px] h-[1080px] bg-gradient-to-b from-[#1D265D] to-[#3E4EB1]'>
         <Image
            width={730}
            height={0}
            src={'./icons/Logo.png'}
            alt=''
            className="pl-[100px] pt-[50px]"
            draggable={false}
         />

         <div className="w-[500px] h-[680px] flex flex-col ml-[165px] mt-[100px] gap-5 justify-center items-center bg-[#1D265D] border-[8px] border-black">
            <ButtonMenu name="NOVO JOGO" onClick={handleStartGame} />
            <ButtonMenu name="CARREGAR JOGO" onClick={() => selectPage(3)} />
            <ButtonMenu name="CONQUISTAS" disabled={true}/>
            <ButtonMenu name="OPÇÕES" disabled={true}/>
            <ButtonMenu name="CREDITOS" disabled={true}/>
            <ButtonMenu name="SAIR" onClick={handleCloseApp}/>
         </div>
      </div>
   );
}