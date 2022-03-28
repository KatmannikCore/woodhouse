let popup = document.createElement('div');
popup.innerHTML = `<div id="popup" class="popup">
<div class="popup__body">
    <div class="popup__content order">
        <p>Закажите бесплатный <br> вызов мастера</p>
        <p>Заполните форму и мы перезвоним <br> Вам в течение 30 мин</p>
        <input class="name" placeholder="Введите Ваше имя" type="text">
        <input style="margin-bottom: 0px;" class="phone" placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _" type="text">
        <button class="button_one">заказать бесплатный <br> выезд мастера</button>
        <p class="last_elem" style="padding-top: 20px;" >Нажимая на кнопку, вы даёте согласие <br>на обработку персональных данных</p>
        <a href="#" class="popup__close close-popup">X</a>
    </div>
</div>
</div>`
document.body.prepend(popup)