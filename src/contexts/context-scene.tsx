import AllScenes from "@/components/Scenes/allScenes";
import { createContext, useEffect, useState } from "react";
   
type ContextProps = {
   scene: any
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

   function loadScene(sceneN: number) {
      const AllScenesData = AllScenes(name)
      setScene(AllScenesData[sceneN - 1]);
      // console.log(AllScenesData, 'BATATA')
   };

   useEffect(() => {
      loadScene(sceneNumber);
   }, [sceneNumber, name])

   function placeName(name: string) {
      setName(name)
   }

   //muda a cena e zera o dialogo para a cena começar do primeiro dialogo
   function selectedScene(item: any) {
      setSceneNumber(item)
      setCurrentDialogue(0)
      // console.log('batata', item)
   }

   //avança o dialogo
   //"".props.scene" serve para acessar o arr itens dentro do compoenente scene1(exemplo)
   function nextDialogue() {
      if (currentDialogue < scene.length - 1) {
         setCurrentDialogue(currentDialogue + 1);
         // console.log('batat', currentDialogue)
      }
      // console.log('batat', scene.props.scene)
   };

   return (
      <ContextScene.Provider value={{name, placeName, scene, currentDialogue, selectedScene, nextDialogue }}>
         {children}
      </ContextScene.Provider>
   );
};