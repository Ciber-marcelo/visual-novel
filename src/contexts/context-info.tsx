import { createContext, useEffect, useState } from "react";
   
type ContextProps = {
   name: string
   color: string
   placeName: (item: string) => void
   selectColor: (item: string) => void
}

export const ContextInfo = createContext<ContextProps>({} as ContextProps);

export const ProviderInfo = ({ children }: { children: React.ReactNode }) => {
   const [name, setName] = useState<string>('')
   const [color, setColor] = useState<string>('')

   function placeName(name: string) {
      setName(name)
   }

   function selectColor(color: string) {
      setName(color)
   }

   return (
      <ContextInfo.Provider value={{ name, color, placeName, selectColor}}>
         {children}
      </ContextInfo.Provider>
   );
};