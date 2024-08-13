
export default function scene3(name: string) {

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

  return itens
}
