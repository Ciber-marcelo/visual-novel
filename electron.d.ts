//O arquivo electron.d.ts é essencial para usar o Electron com TypeScript evitando erros
//O arquivo electron.d.ts está "typando" as "funções" do arquivo "preload.js"


//na parte das promises abaixo, elas esperam algumas respostas, verifica no main.js se os returns possiveis batem com oq está aqui
//usa o chatgpt se tiver dificil, mas é pra ser facil

export { }; //indica que o arquivo é um módulo ES evitando um erro em alguns componentes

declare global {
  interface Window {
    electron: {
      saveGame: (gameData: any, saveFileName: string) => Promise<{ success: boolean, error?: string }>;
      loadGame: (saveFileName: string) => Promise<{ success: boolean, data?: any, error?: string }>;
      getSaveFiles: () => Promise<{ fileName: string, content: any }[]>;
      deleteSave: (saveFileName: string) => Promise<{ success: boolean, error?: string }>;
      closeApp: () => void;
    };
  }
}
