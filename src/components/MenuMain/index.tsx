import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import ButtonMenu from "./ButtonMenu";

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
      <div className='flex flex-col pt-8 gap-4 items-center'>
         <ButtonMenu name="Iniciar" onClick={handleStartGame} />
         <ButtonMenu name="Carregar jogo" onClick={() => selectPage(3)} />
         <ButtonMenu name="Abrir configurações" />
         <ButtonMenu name="Sair do jogo" />
      </div>
   );
}