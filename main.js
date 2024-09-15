const { app, BrowserWindow } = require('electron');
const path = require('path');


//aqui estão as configurações da aplicaçao, como por exemplo o tamanho da janela entre outros(pesquise para entedner melhor)
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  //aqui eu verifico se estou rodando o projeto no modo de desenvolvimento(npm run dev) ou de produção(npm run build).
  //se tiver rodando no modo de desenvolvimento usarei como base o servidor 'http://localhost:3000' para gerar a janela da aplicação.
  //se tiver rodando no modo de produção usarei como base o arquivo estatico 'out/index.html', como base para criar o executavel do electron.
  const startURL = app.isPackaged
    ? `file://${path.join(__dirname, 'out/index.html')}`
    : 'http://localhost:3000';

  win.loadURL(startURL);

  // Remove a barra de menu do electron no modo de produção
  if (app.isPackaged) {
    win.setMenu(null);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


