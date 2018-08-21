'use strict'

import url from 'url'
import path from 'path'
import applyfilter from './filters'
import fs from 'fs'
const app = require('electron').remote;
const dialog = app.dialog;

window.addEventListener('load', () => {
  //openFiles
  //selectFilter
  //save
  //searchBox
  addImagesEvents()
  searchImagesEvent()
  selectFilterEvent()
  selectFiles()
})

function addImagesEvents(){
  const thumbs = document.querySelectorAll('li.list-group-item')
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(){
      changeImage(this)
    })
  }
}

function changeImage(node){
  if(node){
    document.querySelector('li.selected').classList.remove('selected')
    node.classList.add('selected')
    document.getElementById('fullImg').src = node.querySelector('img').src
  } else {
    document.getElementById('fullImg').src = ''
  }
}


function searchImagesEvent(){
  const seachBox = document.getElementById('searchBox')

  seachBox.addEventListener('keyup', function(){
    const regx = new RegExp(this.value.toLowerCase(), 'gi')
    if(this.value.length > 0){
      const thumbs = document.querySelectorAll('li.list-group-item img')
      for (let i = 0; i < thumbs.length; i++) {
        const fileUrl = url.parse(thumbs[i].src)
        const fileName = path.basename(fileUrl.pathname)
        if(fileName.match(regx)){
          thumbs[i].parentNode.classList.remove('hidden')
        } else {
          thumbs[i].parentNode.classList.add('hidden')
        }
      }
      selectFirstImage()
    } else {
      const hidden = document.querySelectorAll('li.hidden')
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove('hidden')
      }
    }
  })
}


function selectFirstImage(){
  const image = document.querySelector('li.list-group-item:not(.hidden)')
  changeImage(image)
}

function selectFilterEvent(){
  const select = document.getElementById('filters')
  select.addEventListener('change', function(){
    applyfilter(this.value, document.getElementById('fullImg'))
  })
}


function selectFiles(){
  document.getElementById('openFiles').addEventListener('click', function(){

    dialog.showOpenDialog((fileNames) => {
        // fileNames is an array that contains all the selected
        if(fileNames === undefined){
            console.log("No file selected");
            return;
        }

        console.log('the file is: ', fileNames)
    });


  })
}
