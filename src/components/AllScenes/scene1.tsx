export default function scene1(info: any) {
  const itens = [
    //EXEMPLO/////////////////////////////////////////////////////////
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
    //       placeInfo: {name: 'yugioh', content:'slifer'},
    //       nextScene: 2,
    //       addItem: 'itemName',
    //       friendship: {name: 'pedro', content: +3}
    //     },
    //     {
    //       text: "escolha 2",
    //       placeInfo: {name: 'name', content:'marcelo'},
    //       nextScene: 3,
    //       addItem: 'itemName',
    //       friendship: {name: 'emili', content: -2}
    //     }
    //   ]
    // },///////////////////////////////////////////////////////////////
    
    // {
    //   background: "/backgrounds/naruto.png",
    //   char1: {
    //     charSrc: "/characters/jaden/jaden_1.png",
    //     charCss: "bg-red-500"
    //   },
    //   dialogue: "dialogo 1, qual é o seu nome ?",
    //   dialogueName: '',
    // },
    // {
    //   background: "/backgrounds/naruto.png",
    //   char1: {
    //     charSrc: "/characters/jaden/jaden_1.png",
    //     charCss: "bg-red-500"
    //   },
    //   inputRequired: true
    // },
    // {
    //   background: "/backgrounds/naruto.png",
    //   char1: {
    //     charSrc: "/characters/jaden/jaden_1.png",
    //     charCss: "bg-red-500"
    //   },
    //   dialogue: name === "marcelo" ? `dialogo 2, ok seu nome é ${name}` : `dialogo 2, seu nome não é marcelo, seu nome é ${name}`,
    //   dialogueName: name
    // },
    // {
    //   background: "/backgrounds/naruto.png",
    //   char1: {
    //     charSrc: "/characters/jaden/jaden_1.png",
    //     charCss: "bg-red-500"
    //   },
    //   dialogue: "dialogo 3",
    //   dialogueName: name,
    //   choices: [
    //     {
    //       text: "vai para o dialogo 5",
    //       nextScene: 2
    //     },
    //     {
    //       text: "vai para o dialogo 8",
    //       nextScene: 3
    //     }
    //   ]
    // },
    // {
    //   background: "/backgrounds/naruto.png",
    //   char1: {
    //     charSrc: "/characters/jaden/jaden_1.png",
    //     charCss: "bg-red-500"
    //   },
    //   dialogue: "dialogo 4, ok {name}, vamos para o dialogo que vc selecionou",
    //   dialogueName: name,
    // }

    {
      id: 1,
      background: "./backgrounds/da.jpg",
      music: "./musics/m1.mp3",
      dialogue: "Esse é o seu primeiro dia na academia de duelos, escolha seu dormitorio.",
    },
    {
      id: 2,
      background: "./backgrounds/da.jpg",
      // music: "./musics/m1.mp3",
      dialogue: "(O dormitorio Ra amarelo não esta disponivel, já tem muito duelista merda la.)",
      choices: [
        {
          text: "Slifer Vermelho",
          placeInfo: {name: 'yugioh', content:'slifer'},
        },
        {
          text: "Obelisco Azul",
          placeInfo: {name: 'yugioh', content:'obelisk'},
        }
      ]
    },
    {
      id: 3,
      background: "./backgrounds/da.jpg",
      music: "./musics/m1.mp3",
      char1: {
        charSrc: info.yugioh === 'slifer' ? './characters/Vagabond/0.png' : './characters/Vagrant/0.png',
        faceSrc: info.yugioh === 'slifer' ? './characters/Vagabond/1.png' : './characters/Vagrant/1.png',
        // charCss: "bg-red-500"
      },
      dialogue: `Esse é o seu uniforme do dormitorio ${info.yugioh === 'slifer' ? 'slifer vermelho' : 'obelisco azul'}`,
    },
    {
      id: 4,
      background: "./backgrounds/da.jpg",
      music: "./musics/m1.mp3",
      char1: {
        charSrc: info.yugioh === 'slifer' ? './characters/Vagabond/0.png' : './characters/Vagrant/0.png',
        faceSrc: info.yugioh === 'slifer' ? './characters/Vagabond/1.png' : './characters/Vagrant/1.png',
      },
      dialogue: "Qual é o seu nome, duelista ?",
      inputRequired: true
    },
    {
      id: 5,
      background: "./backgrounds/da.jpg",
      music: "./musics/m1.mp3",
      char1: {
        charSrc: info.yugioh === 'slifer' ? './characters/Vagabond/0.png' : './characters/Vagrant/0.png',
        faceSrc: info.yugioh === 'slifer' ? './characters/Vagabond/1.png' : './characters/Vagrant/1.png',
      },
      dialogue: `Ok ${info.name}, se prepare para iniciar na cademia de duelos.`,
    },
    {
      id: 6,
      background: "./backgrounds/da.jpg",
      music: "./musics/m2.mp3",
      char1: {
        charSrc: info.yugioh === 'slifer' ? './characters/Vagabond/0.png' : './characters/Vagrant/0.png',
        faceSrc: info.yugioh === 'slifer' ? './characters/Vagabond/1.png' : './characters/Vagrant/1.png',
      },
      dialogue: `Certo, está na hora de eu derrotar uns otarios, quem será o meu primeiro oponente nessa escola.`,
      dialogueName: info.name
    },
  ];

  return itens
}
