<?php require_once './includes/templates/header.php'; ?>

    <section class="about" id="about">
        <div class="heading">
            <h2>Sobre Mi</h2>
        </div>
        <div class="content">
            <div class="contentBx w50">
                <h3>// Desarollador Web FullStack</h3>
                <p>Soy estudiante avanzado de la carrera Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional Facultad Regional Córdoba y desarollador web con conocimientos en los stack WAMP, MERN, entre otros. Me apaciona el desarollo tanto Front-End como Back-End. Ser autodidacta, asi como diferentes capacitaciones que tome, me permiten seguir creciendo aplicando esos conocimientos en mis propios proyectos. Estoy ansioso de poder entrar a trabajar en una empresa para poder aplicar todo lo que se, dar lo mejor de mi y permitir crecer profesionalmente en el mundo de la tecnología, que tanto me apaciona.</p>
            </div>
            <div class="w50">
                <img src="./img/me.jpg" alt="My portfolio image" class="img">
            </div>
        </div>
    </section>

    <section class="technologies" id="technology">
        <div class="heading white">
            <h2>Tecnologías</h2>
            <p>Todas las tecnologías, de diseño y desarollo, en las que tengo conocimiento y las cuáles utilizo para desarollar todos mis diversos proyectos</p>
        </div>
        <div class="content">
    
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <?php require_once './includes/functions/get-technologies.php'; ?>  <!-- Slides -->
                </div> <!--.swiper-wrapper-->
                <br>
                <div class="swiper-scrollbar"></div>
            </div> <!--.swiper-container-->
        </div>
    </section>

    <section class="work" id="work">
        <div class="heading">
            <h2>Mis últimos trabajos</h2>
            <p>Todos los trabajos diseñados y/o desarollados por mi</p>
        </div>

        <div class="container">
            <div class="workBx">

                <div class="workImg" id="w1"></div>

                <div class="workDescription">
                    <h3>// Product Hunt Clon</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum placeat quibusdam aliquam aspernatur voluptatem inventore reiciendis, commodi voluptatum quisquam alias nihil labore doloribus libero, magni eos nulla numquam totam error!</p>
                    <div class="workLinks">
                        <a href=""><span class="iconify" data-icon="mdi:github" data-inline="false"></span> Ver Código</a>
                        <a href=""><span class="iconify" data-icon="mdi:web" data-inline="false"></span> Visitar</a>
                    </div>
                </div>
            </div>

            <div class="workBx">
                <div class="workDescription">
                    <h3>// Weather React App</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum placeat quibusdam aliquam aspernatur voluptatem inventore reiciendis, commodi voluptatum quisquam alias nihil labore doloribus libero, magni eos nulla numquam totam error!</p>
                    <div class="workLinks">
                        <a href=""><span class="iconify" data-icon="mdi:github" data-inline="false"></span> Ver Código</a>
                        <a href=""><span class="iconify" data-icon="mdi:web" data-inline="false"></span> Visitar</a>
                    </div>
                </div>

                <div class="workImg" id="w2"></div>
            </div>

            <div class="workBx">

                <div class="workImg" id="w3"></div>

                <div class="workDescription">
                    <h3>// Cotizador de Seguros</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum placeat quibusdam aliquam aspernatur voluptatem inventore reiciendis, commodi voluptatum quisquam alias nihil labore doloribus libero, magni eos nulla numquam totam error!</p>
                    <div class="workLinks">
                        <a href=""><span class="iconify" data-icon="mdi:github" data-inline="false"></span> Ver Código</a>
                        <a href=""><span class="iconify" data-icon="mdi:web" data-inline="false"></span> Visitar</a>
                    </div>
                </div>

            </div>

            <div class="workBx">
                <div class="workDescription">
                    <h3>// Cotizador de Criptomonedas</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum placeat quibusdam aliquam aspernatur voluptatem inventore reiciendis, commodi voluptatum quisquam alias nihil labore doloribus libero, magni eos nulla numquam totam error!</p>
                    <div class="workLinks">
                        <a href=""><span class="iconify" data-icon="mdi:github" data-inline="false"></span> Ver Código</a>
                        <a href=""><span class="iconify" data-icon="mdi:web" data-inline="false"></span> Visitar</a>
                    </div>
                </div>

                <div class="workImg" id="w4"></div>
            </div>

        </div>
    </section>

<?php require_once './includes/templates/footer.php'; ?>

 