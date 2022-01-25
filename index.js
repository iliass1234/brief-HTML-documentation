let button = document.querySelector('#drop-down-btn')
let nav = document.querySelector('#navbar')

button.onclick = function (){
  if(nav.style.display == 'none'){
    button.innerText = 'X';button.style.paddingLeft = '35%';nav.style.display = 'flex'
    button.style.backgroundColor = '#550055'
    return
  }
  button.style.paddingLeft = '0%';button.innerText = 'Menu';
  button.style.backgroundColor = 'rgb(40, 58, 73)';nav.style.display = 'none'
}
