import { ContextInfo } from "@/contexts/context-info"
import { useContext } from "react"

type DialogueProps = {
   text: string
}

export default function Dialogue({ text }: DialogueProps) {
   const { name } = useContext(ContextInfo)

   const replaceName = (t: string) => {
      return text.replace('{name}', name);
   };

   return (
      <div className="w-[500px] h-[150px] bg-blue-500 text-white p-5 rounded-lg">
         <p>{replaceName(text)}</p>
      </div>
   )
}