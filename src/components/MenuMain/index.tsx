import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import Link from "next/link";
import ButtonMenu from "./ButtonMenu";

export default function MenuMain() {
   const { loadData } = useContext(ContextScene)

   const handleStartGame = () => {
      const gameData = {
         name: "Duelista",
         yugioh: "",
         scene: 1,
         dialogId: 0,
      }

      loadData(gameData);
   };

   return (
      <div className='flex flex-col gap-4 items-center'>
         <Link href="/pageGame" >
            <ButtonMenu name="Iniciar" onClick={handleStartGame} />
         </Link>
         <Link href="/pageData" >
            <ButtonMenu name="Carregar jogo" />
         </Link>
         <ButtonMenu name="Abrir configurações" />
         <ButtonMenu name="Sair do jogo" />
      </div>
   );
}