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
         className={`h-screen flex flex-col items-center justify-center bg`}
         style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         onClick={!scene[currentDialogue].inputRequired && !scene[currentDialogue].choices ? () => nextDialogue() : undefined}
      >
         {scene[currentDialogue].char1 &&
            <div className={`${scene[currentDialogue].char1.charCss && scene[currentDialogue].char1.charCss}`}>
               <CharImage img={scene[currentDialogue].char1.charSrc} />
            </div>
         }

         {scene[currentDialogue].char2 &&
            <div className={`${scene[currentDialogue].char2.charCss && scene[currentDialogue].char2.charCss}`}>
               <CharImage img={scene[currentDialogue].char2.charSrc} />
            </div>
         }

         {scene[currentDialogue].dialogue &&
            <div className='absolute bottom-8'>
               <Dialogue
                  name={scene[currentDialogue].dialogueName}
                  text={scene[currentDialogue].dialogue}
               />
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

