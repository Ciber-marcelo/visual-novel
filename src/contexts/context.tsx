import { createContext, useEffect, useState } from "react";
   
type ContextProps = {
   scene: any
   currentDialogue: number
   selectedScene: (item: any) => void
   nextDialogue: () => void
}

export const Context = createContext<ContextProps>({} as ContextProps);

export const Provider = ({ children }: { children: React.ReactNode }) => {
   const [scene, setScene] = useState<any>([])
   const [sceneNumber, setSceneNumber] = useState(1)
   const [currentDialogue, setCurrentDialogue] = useState(0);

   useEffect(() => {
      async function loadScene() {
         const response = await fetch(`/scenes/scene${sceneNumber}.json`);
         const data = await response.json();
         setScene(data);
         console.log(data)
      };
      loadScene();
   }, [sceneNumber])

   //muda a cena e zera o dialogo para a scena começar do primeiro dialogo
   function selectedScene(item: any) {
      setSceneNumber(item)
      setCurrentDialogue(0)
   }

   //avança o dialogo
   function nextDialogue() {
      if (currentDialogue < scene.length - 1) {
         setCurrentDialogue(currentDialogue + 1);
      }
   };

   return (
      <Context.Provider value={{ scene, currentDialogue, selectedScene, nextDialogue }}>
         {children}
      </Context.Provider>
   );
};