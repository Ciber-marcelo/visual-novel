type DialogueProps = {
   name?: string
   text: string
}

export default function Dialogue({name, text}: DialogueProps) {
   return (
      <div className="w-[600px] h-[150px] flex flex-col bg-blue-500 text-white p-4 rounded-lg">
         <p className="h-5 flex items-center pl-2">{name}</p>
         <div className="h-[2px] w-[150px] bg-black opacity-30"></div>
         <p className="pt-2">{text}</p>
      </div>
   )
}