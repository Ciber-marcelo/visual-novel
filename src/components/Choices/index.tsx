import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

type ChoicesProps = {
   arr: any
}

export default function Choices({ arr }: ChoicesProps) {
   const { selectedScene } = useContext(ContextScene)

   return (
      <div className='flex flex-col gap-2'>
         {arr.choices.map((choice: any, index: any) => (
            <div 
               key={index} 
               onClick={() => { selectedScene(choice.nextScene) }}
               className='rounded-lg p-2 bg-blue-500 text-white'
            >
               {choice.text}
            </div>
         ))}
      </div>
   )
}