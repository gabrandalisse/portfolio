<?php require_once './includes/templates/header.php'; ?>

    <section class="work" id="work">
        <div class="heading">
            <h2>Mis últimos trabajos</h2>
            <p>Todos los trabajos diseñados y/o desarollados por mi</p>
        </div>

        <div class="container">
            <?php require_once './includes/functions/get-works.php'; ?>
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

    <section class="about" id="about">
        <div class="heading">
            <h2>Sobre Mi</h2>
        </div>
        <div class="content">
            <div class="contentBx">
                <h3>// Desarollador Web FullStack</h3>
                <p>Egresado de una escuela secundaria técnica como Técnico en Electrónica, ahora soy un estudiante avanzado de la carrera Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional Facultad Regional Córdoba la cual me permitió conocer el mundo del desarollo web en el cual comenzé a adentrarme. Actualmente poseo conocimientos en varios stack de tecnologías que me permiten llevar mis ideas, proyectos y trabajos a cabo, algunos como el stack <b>WAMP</b>, <b>MERN</b>, <b>JAM</b>, entre otros. 
                <br> 
                Lo que me gusta el del mundo del desarollo web es la cantidad de campos en los que se puede trabajar. Personalmente me gusta crecer tanto como desarollador Back End, en donde me gusta todo lo relacionado al desarollo de la lógica de las aplicaciones, buenas prácticas y seguridad, y como desarollador Front End, dónde considero personalmente, que es lo mas importante debido a que es esencial un buen diseño UX/UI para todos los trabajos que impliquen una interaccion con un usuario inexperto.
                Me considero una persona organizada y con gran motivación, preparado para trabajar y siempre dispuesto a dar lo mejor de mi en cada proyecto.</p>
            </div>
        </div>
    </section>

<?php require_once './includes/templates/footer.php'; ?>

 