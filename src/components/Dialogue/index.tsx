type DialogueProps = {
   text: string
}

export default function Dialogue({ text }: DialogueProps) {
   return (
      <div className="w-[500px] h-[150px] bg-blue-500 text-white p-5 rounded-lg">
         <p>{text}</p>
      </div>
   )
}