import { createContext, useState } from "react";
   
type ContextProps = {
   name: string
   placeName: (item: string) => void
}

export const ContextInfo = createContext<ContextProps>({} as ContextProps);

export const ProviderInfo = ({ children }: { children: React.ReactNode }) => {
   const [name, setName] = useState<string>('marcelor')

   function placeName(name: string) {
      setName(name)
   }

   return (
      <ContextInfo.Provider value={{ name, placeName}}>
         {children}
      </ContextInfo.Provider>
   );
};