// import { ContextInfo } from "@/contexts/context-info"
// import { useContext } from "react"
// const { name } = useContext(ContextInfo)

// const nome = () => {}
/////////
// import { UseName } from '@/hooks/useName'

// export const GetNameByNome = () => {
//   const name = UseName();
//   return name;
// };
////////
// import { useName} from "./allScenes"
// import { useName } from "../info/info"

var name = 'marcelo'

export const scene1 = [
  {
    background: "/bg/naruto.png",
    charSrc: "/jaden/jaden_1.png",
    dialogue: "dialogo 1, qual é o seu nome ?"
  },
  {
    background: "/bg/naruto.png",
    charSrc: "/jaden/jaden_1.png",
    inputRequired: true 
  },
  {
    background: "/bg/naruto.png",
    charSrc: "/jaden/jaden_2.png",
    dialogue: name === "marcelo" ? "dialogo 2, ok seu nome é +++ {name}" : "n é marcelo"
  },
  {
    background: "/bg/naruto.png",
    charSrc: "/jaden/jaden_2.png",
    dialogue: "dialogo 3",
    choices: [
      {
        text: "vai para o dialogo 5",
        nextScene: 2
      },
      {
        text: "vai para o dialogo 8",
        nextScene: 3
      }
    ]
  },
  {
    background: "/bg/naruto.png",
    charSrc: "/jaden/jaden_1.png",
    dialogue: "dialogo 4, ok {name}, vamos para o dialogo que vc selecionou"
  }
]
