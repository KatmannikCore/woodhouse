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
