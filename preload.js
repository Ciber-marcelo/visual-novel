//O preload.js é um arquivo esencial para a estrutura de um projeto electron

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveGame: (gameData, saveFileName) => ipcRenderer.invoke('save-game', {gameData, saveFileName}),
  loadGame: (saveFileName) => ipcRenderer.invoke('load-game', saveFileName),
  getSaveFiles: () => ipcRenderer.invoke('get-save-files'),
  closeApp: () => ipcRenderer.send('close-app'),
});