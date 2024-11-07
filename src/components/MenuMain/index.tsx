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

   return (
      <div className='w-[1920px] h-[1080px] bg-green-900 '>
         <div className="flex flex-col justify-center pl-[200px] pt-[50px] gap-[120px]">
            <Image
               width={630}
               height={195}
               src={'/icons/Logo.png'}
               alt='Character image'
            />

            <div className="w-[500px] h-[680px] flex flex-col ml-[100px] gap-5 justify-center items-center bg-[#1D265D] border-[8px] border-black">
               <ButtonMenu name="NOVO JOGO" onClick={handleStartGame} />
               <ButtonMenu name="CARREGAR JOGO" onClick={() => selectPage(3)} />
               <ButtonMenu name="CONQUISTAS" />
               <ButtonMenu name="OPÇÕES" />
               <ButtonMenu name="CREDITOS" />
               <ButtonMenu name="SAIR" />
            </div>
         </div>
      </div>
   );
}