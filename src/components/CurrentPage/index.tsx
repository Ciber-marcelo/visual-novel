import { useContext } from "react";
import { ContextScene } from "@/contexts/context-scene";
import MenuMain from "../MenuMain";
import Scene from "../Scene";
import MenuLoadGame from "../MenuLoadGame";
import MenuSaveGame from "../MenuSaveGame";

export default function CurrentPage() {
   const { page } = useContext(ContextScene)

   if (page === 1) {
      return <MenuMain />;
   };
   
   if (page === 2) {
      return <div><Scene /></div>;
   };

   if (page === 3) {
      return <div><MenuLoadGame /></div>;
   };

   if (page === 4) {
      return <div><MenuSaveGame /></div>;
   };
}