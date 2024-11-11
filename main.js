const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  //aqui estão as configurações da aplicaçao, como por exemplo o tamanho da janela entre outros(pesquise para entedner melhor)
  const win = new BrowserWindow({
    width: 800,
    height: 479,
    minWidth: 400,
    minHeight: 254,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      nodeIntegration: false, // Desabilitar por segurança
      contextIsolation: true,  // Habilitar isolamento de contexto
    },
  });

  //aqui eu verifico se estou rodando o projeto no modo de desenvolvimento(npm run dev) ou de produção(npm run build).
  //no modo de produção eu uso o arquivo estatico 'out/index.html', para criar o executavel.
  //no modo de desenvolvimento eu uso o servidor 'http://localhost:3000' para gerar a janela do app.
  const startURL = app.isPackaged
    ? `file://${path.join(__dirname, 'out/index.html')}`  
    : 'http://localhost:3000';                            
  
  win.loadURL(startURL);

  // Remove a barra de menu do electron no modo de produção
  if (app.isPackaged) {
    win.setMenu(null);
  }

  // Captura o evento de fechamento
  ipcMain.on('close-app', () => {
    app.quit();
  });
}

// Função para salvar o progresso do jogo ("event" deve parmanecer mesmo não sendo utilizado)
ipcMain.handle('save-game', async (event, { gameData, saveFileName }) => {
  // Define o caminho da pasta 'saves' no modo de produção ou de desenvovlimento
  const saveDir = path.join(app.isPackaged ? path.dirname(app.getPath('exe')) : __dirname, 'saves');
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
  // Define o caminho da pasta 'saves' no modo de produção ou de desenvovlimento
  const saveDir = path.join(app.isPackaged ? path.dirname(app.getPath('exe')) : __dirname, 'saves');
  const saveFilePath = path.join(saveDir, saveFileName);

  try {
    //Verifica se o arquivo de save existe
    if (fs.existsSync(saveFilePath)) {
      const fileContent = fs.readFileSync(saveFilePath, 'utf-8');
      return JSON.parse(fileContent);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao carregar o jogo:', error);
    return null;
  }
});

// Função para ler a pasta de saves
ipcMain.handle('get-save-files', async () => {
  // Define o caminho da pasta 'saves' no modo de produção ou de desenvovlimento
  const saveDir = path.join(app.isPackaged ? path.dirname(app.getPath('exe')) : __dirname, 'saves');

  try {
    // Verifica se a pasta 'saves' existe e retorna os arquivos JSON
    if (fs.existsSync(saveDir)) {
      const files = fs.readdirSync(saveDir).filter((file) => file.endsWith('.json'));

      // Mapeia o nome do arquivo com seu conteúdo
      const fileContents = files.map((file) => {
        const filePath = path.join(saveDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return { fileName: file, content: JSON.parse(content) };  // Parse para retornar como objeto
      });

      return fileContents; // Retorna o nome e o conteúdo dos arquivos
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao ler arquivos de save:', error);
    return [];
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


