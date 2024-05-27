<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST["username"]) && !empty($_POST["pwd"])){
        $username = $_POST["username"];
        $pwd = $_POST["pwd"];


    try {//if there is an error we will catch it with a pdo exception
        require_once "dbh.inc.php";

        $query = "INSERT INTO users (username, pwd) VALUES 
        (:username, :pwd);";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":pwd", $pwd);

        $stmt->execute();

        $pdo = null;
        $stmt = null;
        header("Location: ../index.php");
        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
    } else {
        header("Location: ../index.php");
    }
    

} else {
    header("Location: ../index.php");
}