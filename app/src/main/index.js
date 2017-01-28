import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { app, BrowserWindow } from 'electron';

const server = express();
server.use(bodyParser());
server.use(cors());

server.post('/upload', (req, res) => {
  res.send(req.body.path);
});

server.listen(3000);

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`;

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 400,
    height: 240,
    frame: false,
    transparent: true
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // eslint-disable-next-line no-console
  console.log('mainWindow opened');
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
