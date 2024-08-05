import { Context } from '@/contexts/context';
import { useContext } from 'react';
import CharImage from '../CharImage';
import Dialogue from '../Dialogue';
import Choices from '../Choices';

export default function Scene() {
   const { scene, currentDialogue, nextDialogue } = useContext(Context)

   return scene.length !== 0 ? (
      <div
         className={`h-screen flex flex-col items-center justify-center`}
         style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         onClick={() => nextDialogue()}
      >
         <CharImage img={scene[currentDialogue].charSrc} />

         <Dialogue text={scene[currentDialogue].dialogue} />

         {scene[currentDialogue].choices.length !== 0 &&
            <div className=' absolute'>
               <Choices arr={scene[currentDialogue]} />
            </div>
         }

      </div>
   ) : (
      <div>Loading...</div>
   )
}

