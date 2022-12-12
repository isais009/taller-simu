<?php session_start();

    require './config.php';
    require './helpers/session.php';
    verify_public();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $usuario = $_POST['usuario'];
        $pass = $_POST['pass'];

        $res = $_CONEXION->query("SELECT * FROM usuarios WHERE nickname='$usuario' AND pass='$pass' limit  1");
        $statement = $res->fetch(PDO::FETCH_ASSOC);

        if($statement){
            $_SESSION['usuario'] = $statement;
            header('Location: '.RAIZ);
        }


    }

    require './views/login.view.php';
?>