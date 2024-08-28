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
   currentDialogue: number

   selectedScene: (item: any) => void
   nextDialogue: () => void

   info: any
   placeInfo: (item: any) => void
}

export const ContextScene = createContext<ContextProps>({} as ContextProps);

export const ProviderScene = ({ children }: { children: React.ReactNode }) => {
   const [scene, setScene] = useState<any>([])
   const [sceneNumber, setSceneNumber] = useState(1)
   const [currentDialogue, setCurrentDialogue] = useState(0);

   const [info, setInfo] = useState<any>({
      name: 'Duelista',
      yugioh: ''
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

   //altera o info (ex: nome, roupa, genero etc)
   const placeInfo = (info: any) => {
      if (info.name === 'name') {
         setInfo((prevInfo: any) => ({
            ...prevInfo,
            name: info.content,
         }));
      } else if (info.name === 'yugioh') {
         setInfo((prevInfo: any) => ({
            ...prevInfo,
            yugioh: info.content,
         }));
      }
   }

   return (
      <ContextScene.Provider value={{
         scene,
         currentDialogue,
         info,
         selectedScene,
         nextDialogue,
         placeInfo,
      }}>
         {children}
      </ContextScene.Provider>
   );
};