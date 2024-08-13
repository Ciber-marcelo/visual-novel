import Scene1 from './scene1';
import Scene2 from './scene2';
import Scene3 from './scene3';

export default function AllScenes(name: string) {
   const itens = [Scene1(name), Scene2(name), Scene3(name)];

   return itens;
}

