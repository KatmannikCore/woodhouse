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
    btn.innerHTML = 'Читать полность';
  }
})
function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    let companies = document.querySelectorAll('.manufacturers > div img');
    let arrayNumber = ['09', '10', '05', '04', '03', '02', '01', '08', '07', '06']
    for (let i = 0; i < arrayNumber.length; i++) {
      companies[i].src = `img/reviews/manufacturers/${arrayNumber[i]}.png`
      
    }
  } 
}
isMobile()