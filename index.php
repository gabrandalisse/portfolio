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
                <p>Egresado de una escuela secundaria técnica como Técnico en Electrónica, ahora soy un estudiante avanzado de la carrera Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional Facultad Regional Córdoba y Desarollador Web con conocimientos en los stack  <b>WAMP</b>, <b>MERN</b>, <b>JAM</b>, entre otros. 
                <br> 
                Me considero una persona organizada y con gran motivación, preparado para trabajar y siempre dispuesto a dar lo mejor de mi en cada proyecto.</p>
            </div>
        </div>
    </section>

<?php require_once './includes/templates/footer.php'; ?>

 