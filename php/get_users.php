<?php
require './php/conexion.php'; // Asegúrate de que este path es correcto

$stmt = $pdo->query("SELECT usu_id, usu_nom, usu_ape, usu_dni, usu_fech_naci, usu_correo, grad_estudio, usu_anio_estudio FROM register LIMIT 10");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($users);
?>
