//O arquivo electron.d.ts é essencial para usar o Electron com TypeScript de forma eficaz

export {}; //indicar que o arquivo é um módulo ES evitando um erro em alguns componentes

declare global {
  interface Window {
    electron: {
      saveGame: (gameData: any, saveFileName: string) => Promise<{ success: boolean, error?: string }>;
      loadGame: (saveFileName: string) => Promise<{ success: boolean, data?: any, error?: string }>;
    };
  }
}
