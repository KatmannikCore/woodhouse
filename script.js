
document.querySelectorAll('.open-menu').forEach(item => {
      item.addEventListener('click',() => {
          console.log(1);
          document.body.classList.toggle('body_overflow')
          document.querySelector('.nav').classList.toggle('nav_active')
          document.querySelectorAll('.nav > ul > li').forEach(item => {item.classList.toggle('li_active')})
      })
})
document.querySelectorAll('.submenu-link').forEach(item => item.addEventListener('click', () => {
  document.querySelectorAll(".submenu").forEach(item => item.classList.toggle('show_submenu'))}))

document.querySelectorAll(".bar li a:not(.submenu-link)").forEach(item => item.addEventListener('click', () => {
  console.log(1);
  document.body.classList.toggle('body_overflow')
  document.querySelector('.nav').classList.toggle('nav_active')
  document.querySelectorAll('.nav > ul > li').forEach(item => {item.classList.toggle('li_active')})
}))
document.querySelectorAll('.show_more')[0].addEventListener('click', ()=>{
  document.querySelector('.container_add').classList.toggle('none_cont');
})


const btn = document.getElementById('hideBtn');
const hidden_text = document.querySelector('.gradient_hidden');
if(window.innerWidth > 750){
  hidden_text.classList.toggle('gradient_hidden');
  document.getElementById('text').classList.toggle('hide-and-show');
}
btn.addEventListener('click', function() {
  hidden_text.classList.toggle('gradient_hidden');
  document.getElementById('text').classList.toggle('hide-and-show');
  if (btn.innerHTML === 'Читать полностью') {
    btn.innerHTML = 'Скрыть текст';
  } else {
    btn.innerHTML = 'Читать полностью';
  }
})

const btn2 = document.getElementById('hideBtn2');
const hidden_text2 = document.querySelector('.gradient_hidden2');
if(window.innerWidth > 750){
  hidden_text2.classList.toggle('gradient_hidden2');
  document.getElementById('text2').classList.toggle('hide-and-show');
}
try{
  btn2.addEventListener('click', function() {
    hidden_text2.classList.toggle('gradient_hidden2');
    document.getElementById('text2').classList.toggle('hide-and-show');
    if (btn2.innerHTML === 'Читать полностью') {
      btn2.innerHTML = 'Скрыть текст';
    } else {
      btn2.innerHTML = 'Читать полностью';
    }
  })  
}catch(e){
  console.log(e);
}
