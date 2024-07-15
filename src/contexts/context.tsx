import { createContext, useEffect, useState } from "react";
   
type ContextProps = {
   scene: any
   selectedScene: (item: any) => void
}

export const Context = createContext<ContextProps>({} as ContextProps);

export const Provider = ({ children }: { children: React.ReactNode }) => {
   const [scene, setScene] = useState<any>([])
   const [sceneNumber, setSceneNumber] = useState(1)

   useEffect(() => {
      async function loadScene() {
         const response = await fetch(`/scenes/scene${sceneNumber}.json`);
         const data = await response.json();
         setScene(data);
         console.log(data)
      };
      loadScene();
   }, [sceneNumber])

   function selectedScene(item: any) {
      setSceneNumber(item)
   }

   return (
      <Context.Provider value={{ scene, selectedScene }}>
         {children}
      </Context.Provider>
   );
};