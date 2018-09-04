'use strict'

function applyfilter(filter, currentImage){
  let imgObj = new Image()
  imgObj.src = currentImage.src
  filterous.importImage(imgObj, {}).applyInstaFilter(filter).renderHtml(currentImage)
}

function saveImages(img){
  condole.log(img)
}

module.exports = {
  applyfilter,
  saveImages
}
