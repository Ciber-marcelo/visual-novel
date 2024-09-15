import Scene1 from './scene1';
import Scene2 from './scene2';
import Scene3 from './scene3';

export default function AllScenes(info: any) {
   const itens = [
      Scene1(info), 
      Scene2(info), 
      Scene3(info)
   ];

   return itens;
}

