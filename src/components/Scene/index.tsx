import Image from 'next/image';
import { Context } from '@/contexts/context';
import { useContext, useState } from 'react';

export default function Scene() {
   const { scene, selectedScene } = useContext(Context)
   const [currentScene, setCurrentScene] = useState(0);

   function nextScene() {
      if (currentScene < scene.length - 1) {
         setCurrentScene(currentScene + 1);
      }
   };

   return scene.length !== 0 ? (
      <div
         className={`h-screen flex flex-col items-center justify-center`}
         style={{ backgroundImage: `url(${scene[currentScene].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         onClick={() => nextScene()}
      >
         <div>
            <Image src={scene[currentScene].charSrc} alt={''} width={400} height={800} />
         </div>

         <div className="bg-blue-500 text-white p-5 rounded-lg">
            <p>{scene[currentScene].dialogue}</p>
         </div>

         {scene[currentScene].choices.length !== 0 &&
            <div>
               {scene[currentScene].choices.map((choice: any, index: any) => (
                  <div 
                     key={index} 
                     onClick={() => {selectedScene(choice.nextScene), setCurrentScene(0)}} 
                  >{choice.text}</div>
               ))}
            </div>
         }

      </div>
   ) : (
      <div>Loading...</div>
   )
}

