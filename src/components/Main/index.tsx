import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

export default function Main() {
   const { scene } = useContext(ContextScene)

   return scene
}

