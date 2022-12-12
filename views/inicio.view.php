<?php require './views/includes/header.php'; ?>

<section class="contenedor background-image-login">

    <div class="header-image">
        <img src="<?=RAIZ?>/assets/images/logo.jpg" alt="asd">
    </div>

    <?php require './views/includes/menu.php'; ?>

    <div class="contenedor-body">
        <div class="estadisticas card">
        
            <?php for($i = 1; $i <= 10; $i++): ?>
                <canvas id="chart-grafico-<?=$i?>"></canvas>
            <?php endfor; ?>


            <table class="tabla-proyections">
                <tr>
                    <td>Poblacion total 2022</td>
                    <td>11995033</td>
                </tr>
                <tr>
                    <td>Poblacion total 2023</td>
                    <td>2159353</td>
                </tr>
                <tr>
                    <td>Poblacion total 2024</td>
                    <td>12325924</td>
                </tr>
                <tr>
                    <td>Poblacion total 2025</td>
                    <td>124944777</td>
                </tr>
                <tr>
                    <td>Poblacion total 2026</td>
                    <td>12665955</td>
                </tr>
                <tr>
                    <td>Poblacion total 2027</td>
                    <td>12839510</td>
                </tr>
            </table>
        </div>



    </div>

</section>

<?php require './views/includes/footer.php'; ?>