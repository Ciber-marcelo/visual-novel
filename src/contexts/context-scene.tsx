import AllScenes from "@/components/AllScenes/allScenes";
import { createContext, useEffect, useState } from "react";

type SceneProps = {
   background?: string
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

   name: string
   placeName: (item: string) => void
}

export const ContextScene = createContext<ContextProps>({} as ContextProps);

export const ProviderScene = ({ children }: { children: React.ReactNode }) => {
   const [scene, setScene] = useState<any>([])
   const [sceneNumber, setSceneNumber] = useState(1)
   const [currentDialogue, setCurrentDialogue] = useState(0);
   const [name, setName] = useState<string>('marcelot')

   useEffect(() => {
      const loadScene = (sceneN: number) => {
         const AllScenesData = AllScenes(name)
         setScene(AllScenesData[sceneN - 1]);
      };

      loadScene(sceneNumber);
   }, [sceneNumber, name])

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

   //altera o nome
   const placeName = (name: string) => {
      setName(name)
   }

   return (
      <ContextScene.Provider value={{
         name,
         placeName,
         scene,
         currentDialogue,
         selectedScene,
         nextDialogue
      }}>
         {children}
      </ContextScene.Provider>
   );
};