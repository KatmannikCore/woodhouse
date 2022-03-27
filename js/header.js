let header = document.createElement('header');
header.classList.add('ssss')
header.innerHTML = `<div class="main_header">
                        <p class="logo"><span>WOOD</span>HOUSE495</p>
                        <p class="company">Строительно-отделочные <br> работы деревянных домов</p>
                        <div class="social_media">
                            <a href=""><img src="img/header/inst.png" alt=""></a>
                            <a href=""><img src="img/header/yt.png" alt=""></a>
                            <a href=""><img src="img/header/vk.png" alt=""></a>
                            <a href=""><img src="img/header/wp.png" alt=""></a>
                        </div>
                        <div class="contacts">
                            <p>+7 (916) 916-80-78</p>
                            <p>info@woodhouse495.ru</p>
                        </div>
                        <button class="Request-call"> <p>Заказать звoнок</p> </button>
                    </div>
                    <div class="line"></div>
                    <div class="menu">
                        <ul>
                            <li><a class="first" href="">ГЛАВНАЯ</a></li>
                            <li><a href="#what_can_we_do" href="">ЧТО МЫ УМЕЕМ</a></li>
                            <li><a href="" class="submenu-link">УCЛУГИ</a>
                                <ul class="submenu">
                                    <li><a  href="./module/hatching/hatching.html">Шлифовка деревянного дома</a></li>
                                    <li><a href="./module/hatching/painting.html">Покраска деревянного дома</a></li>
                                    <li><a href="./module/hatching/kosyachka.html">Окосячка деревянного дома</a></li>
                                    <li><a href="./module/hatching/roof.html">Кровельные работы</a></li>
                                    <li><a href="./module/hatching/reconstruction.html">Реконструкция домов </a></li>
                                    <li><a href="./module/hatching/extension.html">Строительство пристроек </a></li>
                                    <li><a href="./module/hatching/finishing.html">Отделка дома планкеном </a></li>
                                </ul>
                            </li>
                            <li><a href="#homes">СТРОИТЕЛЬСТВО ДОМОВ</a></li>
                            <li><a href="#reviews">ОТЗЫВЫ</a></li>
                            <li><a href="#how_we_work">ЭТАПЫ РАБОТЫ</a></li>
                            <li><a href="#completed_projects">ВЫПОЛНЕНЫЕ ПРОЕКТЫ</a></li>
                            <li><a href="#our_contacts">КОНТРАКТЫ</a></li>
                        </ul>
                    </div>`
document.body.prepend(header)