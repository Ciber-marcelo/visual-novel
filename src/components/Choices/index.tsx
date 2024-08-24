import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

type ChoicesProps = {
   arr: any
}

export default function Choices({ arr }: ChoicesProps) {
   const { selectedScene, placeInfo, nextDialogue } = useContext(ContextScene)

   return (
      <div className='flex flex-col gap-2'>
         {arr.choices.map((choice: any, index: any) => (
            <div 
               key={index} 
               className='rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-600 select-none'
               onClick={() => { 
                  choice.nextScene ? selectedScene(choice.nextScene) : nextDialogue(); 
                  choice.placeInfo && placeInfo(choice.placeInfo); 
               }}
            >
               {choice.text}
            </div>
         ))}
      </div>
   )
}