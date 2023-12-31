// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

// require('./ipcMain/menu');

const fs = require("fs")


// 创建一个窗口
// 窗口加载一个界面。该界面使用web技术，运行在渲染进程中
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,  // <== important
      preload: path.join(__dirname, 'preload.js')
    }
  })



  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  fs.readFile("test.txt", (err, data) => {
    if (err) {
      console(err)
      return
    }

    console.log(data.toString())
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
