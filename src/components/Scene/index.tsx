import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import CharImage from '../CharImage';
import Dialogue from '../Dialogue';
import Choices from '../Choices';
import Input from '../Input';

export default function Scene() {
   const { scene, currentDialogue, nextDialogue } = useContext(ContextScene)

   return scene.length !== 0 ? (
      <div
         className={`h-screen flex flex-col items-center justify-center`}
         style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         onClick={!scene[currentDialogue].inputRequired && !scene[currentDialogue].choices ? () => nextDialogue() : undefined}
      >
         <CharImage img={scene[currentDialogue].charSrc} />

         {scene[currentDialogue].dialogue &&
            <div className='absolute bottom-8'>
               <Dialogue text={scene[currentDialogue].dialogue} />
            </div>
         }

         {scene[currentDialogue].choices &&
            <div className='absolute'>
               <Choices arr={scene[currentDialogue]} />
            </div>
         }

         {scene[currentDialogue].inputRequired &&
            <div className='absolute'>
               <Input />
            </div>
         }

      </div>
   ) : (
      <div>Loading...</div>
   )
}

