import { Context } from '@/contexts/context';
import { useContext } from 'react';

type ChoicesProps = {
   arr: any
}

export default function Choices({ arr }: ChoicesProps) {
   const { selectedScene,  } = useContext(Context)

   return (
      <div>
         {arr.choices.map((choice: any, index: any) => (
            <div 
               key={index} 
               onClick={() => { selectedScene(choice.nextScene) }}
               className='bg-red-500'
            >
               {choice.text}
            </div>
         ))}
      </div>
   )
}