'use strict'
import fs from 'fs'

function applyFilter(filter, currentImage){
  let imgObj = new Image()
  imgObj.src = currentImage.src
  filterous.importImage(imgObj, {}).applyInstaFilter(filter).renderHtml(currentImage)
}

// function saveImage (fileName, callback) {
//   let fileSrc = document.getElementById('image-displayed').src
//
//   if (fileSrc.indexOf(';base64,') !== -1) {
//     fileSrc = fileSrc.replace(/^data:([A-Za-z-+/]+);base64,/, '')
//     fs.writeFile(fileName, fileSrc, 'base64', callback)
//   } else {
//     fileSrc = fileSrc.replace('plp://', '')
//     fs.copy(fileSrc, fileName, callback)
//   }
// }
function saveImages(filename){
  let fileSrc = document.getElementById('fullImg').src
  fileSrc = fileSrc.replace(/^data:([A-Za-z-+/]+);base64,/, '')
  fs.writeFile(fileName, fileSrc, 'base64', (err) =>{
    if(err){
      console.log(err)
    }
  })
}

module.exports = { applyFilter, saveImages }
