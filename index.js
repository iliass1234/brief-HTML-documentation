let button = document.querySelector('#drop-down-btn')
let nav = document.querySelector('#navbar')

button.onclick = function (){
  if(nav.style.display == 'none'){
     nav.style.display = 'flex'
    return
  }
  nav.style.display = 'none'
}
