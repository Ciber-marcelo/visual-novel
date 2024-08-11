import { ContextInfo } from '@/contexts/context-info';
import { useContext } from 'react';
import Scene from '../Scene';

export default function Scene3() {
  const { name } = useContext(ContextInfo);
  const itens = [
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_1.png",
      dialogue: "dialogo 8"
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_2.png",
      dialogue: "dialogo 9"
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_2.png",
      dialogue: "dialogo 10",
      choices: [
        {
          text: "vai para o dialogo 1",
          nextScene: 1
        },
        {
          text: "vai para o dialogo 5",
          nextScene: 2
        }
      ]
    }
  ];

  return (
    <Scene scene={itens} />
  );
} 