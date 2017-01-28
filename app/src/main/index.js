import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import shortid from 'shortid';
import AWS from 'aws-sdk';

import { app, BrowserWindow } from 'electron';

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.post('/upload', (req, res) => {
  if (!req.body.path) {
    reply(500);
  }

  fs.readFile(req.body.path, (err, data) => {
    if (err) {
      console.error(err);
      reply(500);
    }

    const ext = path.extname(req.body.path);

    AWS.config.update({
      credentials: {
        accessKeyId: req.body.accessKeyId,
        secretAccessKey: req.body.secretAccessKey
      }
    });

    const s3 = new AWS.S3();
    const params = {
      Bucket: req.body.bucket,
      Key: `${shortid.generate()}${ext}`,
      Body: new Buffer(data),
      ContentType: req.body.type
    };

    s3
      .putObject(params)
      .promise()
      .then((data) => {
        console.log('SUCCESS', data);
      }, (err) => console.log(err));
  });
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
