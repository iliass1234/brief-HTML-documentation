let button = document.querySelector('#drop-down-btn');
let nav = document.querySelector('#navbar');

console.log(getComputedStyle(nav).display)
button.onclick = function (){
  if(getComputedStyle(nav).display === 'flex'){
    nav.style.display = 'none';
    button.innerText = '...';
    button.style.backgroundColor = 'rgb(40, 58, 73)';
  }else{
    button.style.backgroundColor = 'rgb(20, 30, 40)';
    console.log('none')
    nav.style.display = 'flex';
    button.innerText = 'x';

  }
}

window.addEventListener('resize', function (){
  let val = this.getComputedStyle(document.body).width;
  val = val.match(/\d+/)[0];
  console.log(typeof val, val)
  if(Number(val) > 983){
    nav.style.display = 'flex';
  }else{
    nav.style.display = 'none';
  }
   
})
