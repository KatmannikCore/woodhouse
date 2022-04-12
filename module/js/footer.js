let footer = document.createElement('footer');
footer.classList.add('dddd')
footer.innerHTML = `<div class="our_contacts">
                        <a name="our_contacts"></a>
                        <p class="big_text"><span>Наши</span> контакты</p>
                        <div class="contacts_container">
                            <div>
                                <img src="../../img/footer/contacts/1.svg" alt="">
                                <p>E-mail:</p>
                                <p class="gray_text">info@woodhouse495.ru</p>
                            </div>
                            <div>
                                <img src="../../img/footer/contacts/2.svg" alt="">
                                <p>Время работы:</p>
                                <p class="gray_text">работаем <br>  с 8:00 до 22:00</p>
                            </div>
                            <div>
                                <img src="../../img/footer/contacts/3.svg" alt="">
                                <p>Наш телефон:</p>
                                <a href="tel:+7 (916) 916-80-78" rel="nofollow" class="gray_text">+7 (916) 916-80-78</a>
                            </div>
                            <div>
                                <img src="../../img/footer/contacts/4.svg" alt="">
                                <p>Адрес:</p>
                                <p class="gray_text">г.Москва, бульвар <br> Дмитрия Донского 1</p>
                            </div>
                            <div>
                                <img src="../../img/footer/contacts/5.svg" alt="">
                                <p>Реквизиты:</p>
                                <p class="gray_text">ОГРН 1217700543642 <br> ИНН 9704099546</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div>
                            <p class="logo"> <span>wood</span>HOUSE495 </p>
                            <p class="gray_text">Профессиональная отделка<br>  деревянных домов под ключ <br> в Москве и Московской области</p>
                        </div>
                        <div>
                            <a href="">главная</a>
                            <a href=#what_can_we_do">что мы умеем </a>
                            <a href="#homes">строительство домов</a>
                            <a href="#reviews">отзывы</a>
                            <a href="#how_we_work">этапы работы</a>
                            <a href="#completed_projects">выполненные проекты</a>
                            <a href="#our_contacts">контакты</a>
                        </div>
                        <div>
                            <div class="social_media">
                                <a href=""><img src="../../img/header/inst.png" alt=""></a>
                                <a href=""><img src="../../img/header/yt.png" alt=""></a>
                                <a href=""><img src="../../img/header/vk.png" alt=""></a>
                                <a href=""><img src="../../img/header/wp.png" alt=""></a>
                            </div>
                            <a href="tel:+7 (916) 916-80-78" rel="nofollow" class="number">+7 (916) 916-80-78</a>
                            <p class="gray_text">info@woodhouse495.ru</p>
                            <button onclick="window.location.href='#popup'" class="Request-call" style="z-index:999"> Заказать звoнок </button>
                        </div>
                        <div>
                            <a href="">договор оферты</a>
                            <a href="">политика конфиденциальности </a>
                            <p class="gray_text">© 2008 — 2022 «WOODHOUSE495»</p> 
                        </div>
                    </div>`
document.body.append(footer)