const {webContents ,app, BrowserWindow, ipcMain, dialog} = require('electron')
    const url = require("url");
    const path = require("path");
const { Menu } = require('electron/main');

var fs = require('fs');

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          // nodeIntegration: true,
          // enableRemoteModule: true,
          contextIsolation: false,
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/miniCadJs/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })
    ipcMain.on("openproject",(path)=>{
      let file = dialog.showOpenDialog(mainWindow,{
        properties: ['openFile'],
        filters: [
          { name: "project file", extensions:['mcjp']}
        ]
      }).then((filepath)=>{
        fs.readFile(filepath.filePaths[0],'utf-8',(err, data)=>{
          if(err){
            alert("An error ocurred reading the file :" + err.message);
            return;
        }
          console.log("The file content is : " + data);
          mainWindow.webContents.send("openprojectreturn",data);
        });
      })
    })
    ipcMain.on("saveproject", (event, data)=>{
      dialog.showSaveDialog(mainWindow,{
        filters:[
          { name: "project file", extensions:['mcjp']}
        ]
      }).then((filename)=>{
        fs.writeFile(filename.filePath,data,(err)=>{
          console.log(err);
        });
      })
    })
    Menu.setApplicationMenu(null);