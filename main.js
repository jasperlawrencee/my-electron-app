// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

// import 'css/css.css';

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "icons/discord.ico",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  
}

// Pag g na, create window
app.whenReady().then(createWindow).catch((e) => {
  console.log(e);
})

// Pag close tanan windows, close app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
