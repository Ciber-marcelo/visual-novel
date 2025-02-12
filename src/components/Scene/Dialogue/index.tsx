type DialogueProps = {
   name?: string
   text: string
}

export default function Dialogue({ name, text }: DialogueProps) {
   return (
      <div className="w-[600px] h-[150px] flex flex-col bg-blue-500 text-white p-4 rounded-lg">
         {name &&
            <div className="flex w-fit px-4 border-b-2 border-b-black">
               <p className="h-5 flex items-center">{name}</p>
            </div>
         }
         <p className="pt-2">{text}</p>
      </div>
   )
}