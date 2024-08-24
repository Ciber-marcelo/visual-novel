export default function scene2(name: string) {

  const itens = [
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_1.png",
      dialogue: "dialogo 5"
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_2.png",
      dialogue: "dialogo 6"
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_2.png",
      dialogue: "dialogo 7",
      choices: [
        {
          text: "vai para o dialogo 1",
          nextScene: 1
        },
        {
          text: "vai para o dialogo 8",
          nextScene: 3
        }
      ]
    }
  ];

  return itens
}