<?php

    require './helpers/conexion.php';

    define("RAIZ", "http://localhost:5200/vianca");

    // $db_config = [
    //     "host" => "database-mdb",
    //     "port" => "3306",
    //     "user" => "root",
    //     "pass" => "isaias",
    //     "name" => "censo",
    // ];

    $db_config = [
        "host" => "containers-us-west-146.railway.app",
        "port" => "5885",
        "user" => "root",
        "pass" => "agDyTKNhBsM3OhraAUxA",
        "name" => "railway",
    ];
    
    $_CONEXION = conexion_db($db_config);
    $_QUESTIONS = json_decode(file_get_contents("./src/json/questions.json"), true);
?>