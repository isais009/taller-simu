<?php session_start();

    require './config.php';
    require './helpers/session.php';
    require './helpers/valueStatus.php';
    require './helpers/querys.php';

    json_clear();

    // echo json_encode(db_questions_get($_CONEXION));


    // deleteEncuesta();
    require './views/inicio.view.php';
?>