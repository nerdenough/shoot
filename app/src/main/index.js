import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import shortid from 'shortid';
import AWS from 'aws-sdk';
import ElectronConfig from 'electron-config';

import { app, BrowserWindow } from 'electron';

const config = new ElectronConfig();
const server = express();
server.use(bodyParser({ limit: '10mb' }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.post('/upload', (req, res) => {
  if (!req.body.buffer || !req.body.type) {
    return res.sendStatus(500);
  }

  const ext = req.body.type.split('/')[1];
  const key = `${shortid.generate()}.${ext}`;

  AWS.config.update({
    credentials: {
      accessKeyId: config.get('aws.accessKeyId'),
      secretAccessKey: config.get('aws.secretAccessKey')
    }
  });

  const s3 = new AWS.S3();
  const params = {
    Bucket: config.get('aws.bucket'),
    Key: key,
    Body: Buffer.from(req.body.buffer),
    ContentType: req.body.type
  };

  s3
    .putObject(params)
    .promise()
    .then((data) => {
      return res.json({
        url: `${config.get('aws.url')}/${key}`
      });
    }, (err) => {
      console.log(err);
      return res.sendStatus(500);
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
    icon: `${__dirname}/../../icons/icon.png`,
    width: 400,
    height: 600,
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
