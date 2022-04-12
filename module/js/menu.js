let menu = document.createElement('nav');
menu.classList.add('nav')
menu.innerHTML = `<p class="open-menu" style="z-index: 4444;">&#9776</p>
                    <div class="logo">
                        <p style="color: #fff;" class="woodhouse495">woodhouse495</p>
                        <p class="shelter" style="color: #fff; opacity: .6;">Строительно-отделочные <br> работы деревянных домов</p>
                        <hr style="margin-top: 0;">
                    </div>
                    <ul class="bar">
                        <li><a style="color: #fff;" class="first" href="../../../">ГЛАВНАЯ</a></li>
                        <li><a href="#what_can_we_do" style="color: #fff;">ЧТО МЫ УМЕЕМ</a></li>
                        <li><a style="color: #fff;"class="submenu-link">УCЛУГИ</a>
                            <ul class="submenu">
                                <li><a class="gray_text" href="./module/hatching/hatching.html">Шлифовка деревянного дома</a></li>
                                <li><a href="../hatching/painting.html">Покраска деревянного дома</a></li>
                                <li><a href="../hatching/kosyachka.html">Окосячка деревянного дома</a></li>
                                <li><a href="../hatching/roof.html">Кровельные работы</a></li>
                                <li><a href="../hatching/reconstruction.html">Реконструкция домов </a></li>
                                <li><a href="../hatching/extension.html">Строительство пристроек </a></li>
                                <li><a href="../hatching/finishing.html">Отделка дома планкеном </a></li>
                            </ul>
                        </li>
                        <li><a href="#homes" style="color: #fff;" >СТРОИТЕЛЬСТВО ДОМОВ</a></li>
                        <li><a href="#reviews" style="color: #fff;" >ОТЗЫВЫ</a></li>
                        <li><a href="#how_we_work" style="color: #fff;" >ЭТАПЫ РОБОТЫ</a></li>
                        <li><a href="#completed_projects" style="color: #fff;" >ВЫПОЛНЕНЫЕ ПРОЕКТЫ</a></li>
                        <li><a href="#our_contacts" style="color: #fff;">КОНТАКРЫ</a></li>
                    </ul>
                    <hr style="margin-top: 20px;">
                    <p href="tel:+7 (916) 916-80-78" rel="nofollow" class="phone" >+7 (916) 916-80-78</p>
                    <div class="gray_cont">
                        <p class="gray_text" style="color: #fff; opacity: .6;" >info@woodhouse495.ru</p>
                    </div>
                    <button style="height: 60px;" class="button_one">  Заказать звонок</button>
                    <hr style="margin-top: 20чpx;">
                    <div class="social_media">
                        <img src="img/header/social_media.png" alt="">
                    </div>`
document.body.prepend(menu)