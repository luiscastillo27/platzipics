'use strict'

const { app, BrowserWindow } = require('electron')
const devTools = require('./devTools')

if (process.env.NODE_ENV === 'development') {
  devTools()
}

app.on('before-quit', () => {
  console.log('saliendo....')
})

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'hola mundo',
    maximizable: false,
    show: false
  })

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(`file://${__dirname}/html/index.html`)

  win.on('closed', () => {
    win = null
    app.quit()
  })
})
