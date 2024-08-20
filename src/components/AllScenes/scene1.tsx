export default function scene1(name: string) {

  const itens = [
    //EXEMPLO
    // {
    //   background: "/bg/naruto.png",
    //   char1: {
    //     charSrc: "/jaden/jaden_1.png",
    //     charSrc2: "/jaden/jaden_1.png",
    //     charCss: "bg-red-500",
    //     charCss2: "bg-red-500"
    //   },
    //   char2: {
    //     charSrc: "/jaden/jaden_1.png",
    //     charSrc2: "/jaden/jaden_1.png",
    //     charCss: "bg-red-500",
    //     charCss2: "bg-red-500"
    //   },
    //   dialogueName: 'nome do personagem',
    //   dialogue: "dialogo do personagem",
    //   inputRequired: false,
    //   choices: [
    //     {
    //       text: "escolha 1",
    //       nextScene: 2
    //     },
    //     {
    //       text: "escolha 2",
    //       nextScene: 3
    //     }
    //   ]
    // },
    {
      background: "/backgrounds/naruto.png",
      char1: {
        charSrc: "/characters/jaden/jaden_1.png",
        charCss: "bg-red-500"
      },
      dialogue: "dialogo 1, qual é o seu nome ?",
      dialogueName: '',
    },
    {
      background: "/backgrounds/naruto.png",
      char1: {
        charSrc: "/characters/jaden/jaden_1.png",
        charCss: "bg-red-500"
      },
      inputRequired: true
    },
    {
      background: "/backgrounds/naruto.png",
      char1: {
        charSrc: "/characters/jaden/jaden_1.png",
        charCss: "bg-red-500"
      },
      dialogue: name === "marcelo" ? `dialogo 2, ok seu nome é ${name}` : `dialogo 2, seu nome não é marcelo, seu nome é ${name}`,
      dialogueName: name
    },
    {
      background: "/backgrounds/naruto.png",
      char1: {
        charSrc: "/characters/jaden/jaden_1.png",
        charCss: "bg-red-500"
      },
      dialogue: "dialogo 3",
      dialogueName: name,
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
      background: "/backgrounds/naruto.png",
      char1: {
        charSrc: "/characters/jaden/jaden_1.png",
        charCss: "bg-red-500"
      },
      dialogue: "dialogo 4, ok {name}, vamos para o dialogo que vc selecionou",
      dialogueName: name,
    }
  ];

  return itens
}
