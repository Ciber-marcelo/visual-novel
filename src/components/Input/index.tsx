import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';

export default function Input() {
   const { info, nextDialogue, placeInfo } = useContext(ContextScene)

   const handleInputChange = (e: string) => {
      placeInfo({
         name: 'name',
         content: e
      });
   };

   return (
      <div className='flex flex-col gap-2'>
         <input
            type="text"
            value={info.name}
            onChange={(e) => handleInputChange(e.target.value)}
            className="p-2 m-2 border rounded-md"
            placeholder="Digite seu nome"
            maxLength={15}
         />
         <button
            onClick={info.name !== '' ? () => nextDialogue() : undefined}
            className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-700"
         >
            Continue
         </button>
      </div>
   )
}