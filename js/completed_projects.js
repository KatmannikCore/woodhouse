let completed_projects = document.createElement('nav');
completed_projects.innerHTML = `
                <div>
                    <a name="completed_projects"></a>
                    <p class="big_text"><span>Выполненные</span> проекты</p>
                    <div class="completed_container">
                        <div>
                            <img src="img/completed_projects/1.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                        <div>
                            <img src="img/completed_projects/2.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a  class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                        <div>
                            <img src="img/completed_projects/3.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a  class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                        <div>
                            <img src="img/completed_projects/4.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text ">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                        <div>
                            <img src="img/completed_projects/5.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a  class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                        <div>
                            <img src="img/completed_projects/6.png" alt="">
                            <p>«Название проекта»</p>
                            <p class="gray_text">Небольшое описание проекта <br> всего в две-три строчки</p>
                            <a  class="link" onclick="CreateWindow(1)">посмотреть подробнее</a>
                        </div>
                    </div>
                </div>
                `
document.querySelector('.completed_projects').append(completed_projects)
let p = document.createElement('p');
p.classList.add('gray_text');
p.innerHTML = 'Больше реализованныx проектов <br> смотрите в нашем Instagram'
document.querySelector('.completed_projects').append(p)
let wrapper_inst = document.createElement('div');
wrapper_inst.classList.add('wrapper_inst');
wrapper_inst.innerHTML =`
                    <div class="btn_inst">
                        <a href="#"><span style="z-index: 100;" ><img src="./img/inst_logo.png" ><b>Подписывайтесь на нас</b></span></a>
                    </div>
`
document.querySelector('.completed_projects').append(wrapper_inst)

