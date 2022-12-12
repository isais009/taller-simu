<?php session_start();

    require './config.php';
    require './helpers/session.php';
    verify();
    verifyadmin();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $usuario = $_POST['usuario'];
        $pass = $_POST['pass'];
        $pass2 = $_POST['pass2'];

        if($pass == $pass2){
            $_CONEXION->query("INSERT INTO usuarios VALUES(null, '$usuario', '$pass', 'user')");
            header('Location: '.RAIZ);
        }

    }

    require './views/registro.view.php';
?>