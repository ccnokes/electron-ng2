import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow;


app.on('ready', () => {

  mainWindow = new BrowserWindow({ show: false, width: 1000, height: 1000 });
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));
  // mainWindow.webContents.openDevTools({detach: false});

  mainWindow.once('ready-to-show', () => mainWindow.show());

});
