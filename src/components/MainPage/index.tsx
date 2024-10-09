import { useContext } from "react";
import { ContextScene } from "@/contexts/context-scene";
import MenuMain from "../MenuMain";
import Scene from "../Scene";
import MenuData from "../MenuData";

export default function MainPage() {
   const { page } = useContext(ContextScene)

   if (page === 1) {
      return <div><MenuMain /></div>;
   };
   
   if (page === 2) {
      return <div><Scene /></div>;
   };

   if (page === 3) {
      return <div><MenuData /></div>;
   };
}