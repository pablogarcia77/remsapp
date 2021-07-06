<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

// LOGIN
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $input = $_POST;
    $sql = $dbConn->prepare("SELECT * FROM usuario WHERE username=:username AND password=:password");
    $sql->bindValue(':username', $_POST['username']);
    $sql->bindValue(':password', $_POST['password']);
    $sql->execute();
    
    $num = $sql->rowCount();
    if($num){
      $sql->setFetchMode(PDO::FETCH_ASSOC);
      header("HTTP/1.1 200 OK");
      echo json_encode($sql->fetchAll());
      exit();
	  }else{
      header("HTTP/1.1 200 OK");
      exit();
    }
}




//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>