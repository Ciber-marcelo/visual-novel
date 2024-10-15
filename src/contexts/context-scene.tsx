import AllScenes from "@/components/AllScenes/allScenes";
import { createContext, useEffect, useState } from "react";

type SceneProps = {
   background?: string
   music?: string
   char1?: any
   char2?: any
   dialogueName?: string
   dialogue?: string
   inputRequired?: boolean
   choices?: any[]
}

type ContextProps = {
   scene: SceneProps[]
   sceneNumber: number
   currentDialogue: number

   selectedScene: (item: any) => void
   nextDialogue: () => void

   info: any
   placeInfo: (item: any) => void
   loadData: (item: any) => void

   page: any
   selectPage: (item: any) => void
}

export const ContextScene = createContext<ContextProps>({} as ContextProps);

export const ProviderScene = ({ children }: { children: React.ReactNode }) => {
   const [scene, setScene] = useState<any>([])
   const [sceneNumber, setSceneNumber] = useState(1)
   const [currentDialogue, setCurrentDialogue] = useState(0);
   const [page, setPage] = useState(1);

   const [info, setInfo] = useState<any>({
      name: 'Duelista',
      yugioh: '',
      scene: 1,
      dialogId: 0
   })

   useEffect(() => {
      const loadScene = (sceneN: number) => {
         const AllScenesData = AllScenes(info)
         setScene(AllScenesData[sceneN - 1]);
      };

      loadScene(sceneNumber);
   }, [sceneNumber, info])

   //muda a cena e zera o dialogo para a cena começar do primeiro dialogo
   const selectedScene = (item: any) => {
      setSceneNumber(item)
      setCurrentDialogue(0)
   }

   //avança o dialogo de uma cena
   const nextDialogue = () => {
      if (currentDialogue < scene.length - 1) {
         setCurrentDialogue(currentDialogue + 1);
      }
   };

   //altera UMA informção do info (ex: nome, roupa ou genero)
   const placeInfo = (info: any) => {
      setInfo((prevInfo: any) => ({
         ...prevInfo,
         [info.name]: info.content
      }));
   };

   //Altera o info com os dados do save
   const loadData = (gameData: any) => {
      setInfo((prevInfo: any) => ({
         ...prevInfo,
         ...gameData,  
         // Carrega todos os dados do save, exceto `scene` e `dialogId`
         name: gameData.name, 
         yugioh: gameData.yugioh, 
         scene: prevInfo.scene,  // Garante que `scene` não seja alterado
         dialogId: prevInfo.dialogId,  // Garante que `dialogId` não seja alterado
      }));

      setCurrentDialogue(gameData.dialogId)
      setSceneNumber(gameData.scene)
   };

   //troca a pagina
   const selectPage = (n: any) => {
      setPage(n)
   }

   return (
      <ContextScene.Provider value={{
         scene,
         sceneNumber,
         currentDialogue,
         info,
         selectedScene,
         nextDialogue,
         placeInfo,
         loadData,
         selectPage,
         page
      }}>
         {children}
      </ContextScene.Provider>
   );
};