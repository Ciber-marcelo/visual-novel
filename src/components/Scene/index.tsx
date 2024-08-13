import { ContextScene } from '@/contexts/context-scene';
import { useContext, useState } from 'react';
import CharImage from '../CharImage';
import Dialogue from '../Dialogue';
import Choices from '../Choices';
import Input from '../Input';

type SceneProps = {
   scene: any
}

export default function Scene() {
   const {scene, currentDialogue, nextDialogue } = useContext(ContextScene)
   // const AllScenesData = AllScenes()
   // const rrr = Scene1()

   // const [currentDialogue, setCurrentDialogue] = useState(0);

   // //avança o dialogo
   // function nextDialogue() {
   //    if (currentDialogue < scene.length - 1) {
   //       setCurrentDialogue(currentDialogue + 1);
   //       // console.log('batat', currentDialogue)
   //    }

   // };

   // const scene = sceneTESTE()


   return scene.length !== 0 ? (
      <div
         className={`h-screen flex flex-col items-center justify-center bg`}
         style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         onClick={!scene[currentDialogue].inputRequired && !scene[currentDialogue].choices ? () => nextDialogue() : undefined}
      // onClick={() => console.log('batata', nextDialogue)}
      >
         {scene[currentDialogue].charSrc &&
            <CharImage img={scene[currentDialogue].charSrc} />
         }

         {scene[currentDialogue].dialogue &&
            <div className='absolute bottom-8'>
               <Dialogue text={scene[currentDialogue].dialogue} />
               {/* <div>{rrr[2].dialogue}</div> */}
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
////////////////
// import { ContextScene } from '@/contexts/context-scene';
// import { useContext } from 'react';
// import CharImage from '../CharImage';
// import Dialogue from '../Dialogue';
// import Choices from '../Choices';
// import Input from '../Input';
// import AllScenes from '@/scenes2/allScenes';
// import AllScenes666 from '../Scenes666/allScenes';
// import Scene1 from '../Scenes666/scene1';

// export default function Scene() {
//    const { scene, currentDialogue, nextDialogue } = useContext(ContextScene)
//    // const AllScenesData = AllScenes()
//    // const rrr = Scene1()

//    return scene.length !== 0 ? (
//       <div
//          className={`h-screen flex flex-col items-center justify-center`}
//          style={{ backgroundImage: `url(${scene[currentDialogue].background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//          onClick={!scene[currentDialogue].inputRequired && !scene[currentDialogue].choices ? () => nextDialogue() : undefined}
//       >
//          {scene[currentDialogue].charSrc &&
//             <CharImage img={scene[currentDialogue].charSrc} />
//          }

//          {scene[currentDialogue].dialogue &&
//             <div className='absolute bottom-8'>
//                <Dialogue text={scene[currentDialogue].dialogue} />
//                {/* <div>{rrr[2].dialogue}</div> */}
//             </div>
//          }

//          {scene[currentDialogue].choices &&
//             <div className='absolute'>
//                <Choices arr={scene[currentDialogue]} />
//             </div>
//          }

//          {scene[currentDialogue].inputRequired &&
//             <div className='absolute'>
//                <Input />
//             </div>
//          }

//       </div>
//    ) : (
//       <div>Loading...</div>
//    )
// }

