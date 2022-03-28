let useful_articles = document.createElement('div');
useful_articles.innerHTML = ` <p class="big_text"> <span>Полезные</span> статьи</p>
<div class="useful_container">
    <div>
        <img src="../../img/useful_articles/1.png" alt="">
        <p>Окосячка <br> деревянного дома</p>
        <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
        <a href="">читать подробнее</a>
    </div>
    <div>
        <img src="../../img/useful_articles/2.png" alt="">
        <p>Шливофка <br> деревянного дома</p>
        <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
        <a href="">читать подробнее</a>
    </div>
    <div>
        <img src="../../img/useful_articles/3.png" alt="">
        <p>Утепление <br> каркасного дома</p>
        <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
        <a href="">читать подробнее</a>
    </div>
</div>
<button class="show_more">Посмотреть ещё</button>`
document.querySelector('.useful_articles').append(useful_articles)