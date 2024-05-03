<?php
$host = "localhost"; // o la IP del servidor de base de datos
$dbname = "prueba";
$username = "root";
$password = "#isaias1234#";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=latin1", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("No se pudo conectar a la base de datos $dbname :" . $e->getMessage());
}
?>
