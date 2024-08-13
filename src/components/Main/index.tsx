import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import Scene from '../Scene';

export default function Main() {
   const { scene } = useContext(ContextScene)

   return (
      scene
      // <Scene scene={scene} />
   )
}

