import { ContextScene } from '@/contexts/context-scene';
import { useContext } from 'react';
// import { fName } from '@/scenes2/allScenes';

export default function Input() {
   // const { name, placeName } = useContext(ContextInfo)
   const { name, nextDialogue, placeName } = useContext(ContextScene)

   function handleInputChange(e: string) {
      placeName(e);
    };

   // function handleInputChange(e: string) {
   //    fName(e);
   //    console.log('atata')
   //  };

   return (
      <div className='flex flex-col gap-2'>
         <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange(e.target.value)}
            className="p-2 m-2 border rounded-md"
            // placeholder="Enter your name"
          />
          <button
            onClick={name !== '' ? () => nextDialogue() : undefined}
            // onClick={() => nextDialogue()}

            className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
      </div>
   )
}