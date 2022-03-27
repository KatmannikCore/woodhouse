let how_we_work = document.createElement('div');
how_we_work.innerHTML = `
                    <div>
                        <a name="how_we_work"></a>
                        <p class="big_text"> <span> Как мы </span> работаем </p>
                        <div class="container">
                            <div>
                                <span><img src="../../img/how_we_work/1.svg" alt=""></span>
                                <p>Оставляете заявку</p> 
                                <p>После заявки наш менеджер перезвонит Вам в течение 30 минут для обсуждения деталей</p>
                            </div>
                            <div>
                                <span><img src="../../img/how_we_work/2.svg" alt=""></span>
                                <p>Выезд замерщика</p>
                                <p>Наш специалист бесплатно выезжает на объект для составления замеров и объема работ</p>
                            </div>
                            <div>
                                <span><img src="../../img/how_we_work/3.svg" alt=""></span>
                                <p>Составляем смету</p>
                                <p>После замеров мы составляем подробную смету. Цена не изменится после начала работ</p>
                            </div>
                            <div>
                                <span><img src="../../img/how_we_work/4.svg" alt=""></span>
                                <p>Выполняем работу</p>
                                <p>Наши специалисты приезжают и начинают работу над Вашей задачей в назначенный срок</p>
                            </div>
                            <div>
                                <span><img src="../../img/how_we_work/5.svg" alt=""></span>
                                <p>Выполняем работу</p>
                                <p>После окончания всех работ мы убираем за собой мусор и сдаем Вам готовый объект</p>
                            </div>
                        </div>
                        <div class="button">
                            <button class="button_one">бесплатно вызывать замерщика</button>
                        </div>
                    </div>
                `
document.querySelector('.how_we_work').append(how_we_work)