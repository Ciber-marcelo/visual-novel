import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
import CharImage from '../CharImage';
import Dialogue from '../Dialogue';
import Choices from '../Choices';
import Input from '../Input';
import Music from '../Music';
import ButtonSave from '../ButtonSave';
import ButtonLoad from '../ButtonLoad';

export default function Scene() {
   const { scene, currentDialogue, nextDialogue, selectPage } = useContext(ContextScene)

   if (scene.length === 0) {
      return <div>Loading...</div>;
   }

   return (
      <div
         className={`h-screen flex flex-col items-center justify-center`}
         style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         
      >  
         <button onClick={!scene[currentDialogue].inputRequired && !scene[currentDialogue].choices ? () => nextDialogue() : undefined}>
            NEXT
         </button>
         <ButtonSave name={'Salvar Jogo 1'} saveFileName={'savegame1.json'}/>
         <ButtonSave name={'Salvar Jogo 2'} saveFileName={'savegame2.json'}/>

         <ButtonLoad name={'Carregar Jogo 1'} saveFileName={'savegame1.json'}/>
         <ButtonLoad name={'Carregar Jogo 2'} saveFileName={'savegame2.json'}/>

         <button onClick={() => selectPage(1)}>MENU</button>

         {scene[currentDialogue].music &&
            <Music musicSrc={scene[currentDialogue].music} />
         }

         {scene[currentDialogue].char1 &&
            <div className={`${scene[currentDialogue].char1.charCss && scene[currentDialogue].char1.charCss}`}>
               <CharImage
                  charImg={scene[currentDialogue].char1.charSrc}
                  faceImg={scene[currentDialogue].char1.faceSrc}
               />
            </div>
         }

         {scene[currentDialogue].char2 &&
            <div className={`${scene[currentDialogue].char2.charCss && scene[currentDialogue].char2.charCss}`}>
               charImg={scene[currentDialogue].char1.charSrc}
               faceImg={scene[currentDialogue].char1.faceSrc}
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
            <div className=''>
               <Choices arr={scene[currentDialogue]} />
            </div>
         }

         {scene[currentDialogue].inputRequired &&
            <div className='absolute'>
               <Input />
            </div>
         }
      </div>
   )
}

