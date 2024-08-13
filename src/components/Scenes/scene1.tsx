export default function scene1(name: string) {

  const itens = [
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_1.png",
      dialogue: "dialogo 1, qual é o seu nomeeee ?"
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_1.png",
      inputRequired: true
    },
    {
      background: "/bg/naruto.png",
      charSrc: "/jaden/jaden_2.png",
      dialogue: name === "marcelo" ? "dialogo 2, ok seu nome é +++ {name}" : `n é marcelo ${name}`
      // dialogue: name
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
  ];

  return itens
}
