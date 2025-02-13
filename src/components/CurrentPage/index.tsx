import { useContext } from "react";
import { ContextScene } from "@/contexts/context-scene";
import MenuMain from "../MenuMain";
import Scene from "../Scene";
import MenuLoadGame from "../MenuLoadGame";
import MenuSaveGame from "../MenuSaveGame";

export default function CurrentPage() {
   const { page } = useContext(ContextScene)
   const pages : { [key: number]: JSX.Element } = {
      1: <MenuMain />,
      2: <Scene />,
      3: <MenuLoadGame />, 
      4: <MenuSaveGame />,
   };
   return pages[page];
}