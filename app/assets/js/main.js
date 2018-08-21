import url from 'url'
import path from 'path'

window.addEventListener('load', () => {
  //openFiles
  //selectFilter
  //save
  //searchBox
  addImagesEvents()
  searchImagesEvent()
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
