const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  //aqui estão as configurações da aplicaçao, como por exemplo o tamanho da janela entre outros(pesquise para entedner melhor)
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      nodeIntegration: false, // Desabilitar por segurança
      contextIsolation: true,  // Habilitar isolamento de contexto
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
  // if (app.isPackaged) {
  //   win.setMenu(null);
  // }
}

// Função para salvar o progresso do jogo
//pesquise o "event" se n ta usando pra nada
ipcMain.handle('save-game', async (event, { gameData, saveFileName }) => {

  // Define o caminho da pasta e do arquivo de save
  const saveDir = path.join(path.dirname(app.getPath('exe')), 'saves');
  const saveFilePath = path.join(saveDir, saveFileName);

  try {
    // Cria a pasta 'saves' se ela não existir
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir);
    }

    // Cria/substitui o arquivo de save na pasta 'saves'
    fs.writeFileSync(saveFilePath, JSON.stringify(gameData));
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar o jogo:', error);
    return { success: false, error: error.message };
  }
});

// Função para carregar o progresso do jogo
ipcMain.handle('load-game', async (event, saveFileName) => {
  // Define o caminho do arquivo de save
  const saveFilePath = path.join(path.dirname(app.getPath('exe')), 'saves', saveFileName);

  try {
    //Verifica se o arquivo de save existe
    if (fs.existsSync(saveFilePath)) {
      const fileContent = fs.readFileSync(saveFilePath, 'utf-8');
      return JSON.parse(fileContent);
    } else {
      return null; // Arquivo não existe
    }
  } catch (error) {
    console.error('Erro ao carregar o jogo:', error);
    return null;
  }
});

//O codigo a baixo serve para o electron funcinar tanto no windows quanto no mac(reveja essa parte para entender melhor)
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


