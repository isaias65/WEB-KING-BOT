<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Usuarios</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-3">
        <h2>Listado de Usuarios</h2>
        <div class="row">
            <div class="col-md-12">
                <input class="form-control mb-3" id="searchInput" type="text" placeholder="Buscar..." style="width: 20%; float: right;">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>DNI</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Correo</th>
                            <th>Grado de Estudios</th>
                            <th>Año de Estudio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        <?php
                        require './php/conexion.php'; // Asegúrate de que este path es correcto
                        $stmt = $pdo->query("SELECT usu_id, usu_nom, usu_ape, usu_dni, usu_fech_naci, usu_correo, grad_estudio, usu_anio_estudio FROM register");
                        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($row['usu_id']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_nom']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_ape']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_dni']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_fech_naci']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_correo']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['grad_estudio']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['usu_anio_estudio']) . "</td>";
                            echo "<td>";
                            echo "<button class='btn btn-primary btn-sm'>Ver</button> ";
                            echo "<button class='btn btn-info btn-sm'>Editar</button> ";
                            echo "<button class='btn btn-danger btn-sm'>Eliminar</button>";
                            echo "</td>";
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('searchInput').addEventListener('keyup', function() {
                var searchValue = this.value.toLowerCase();
                var tableRows = document.querySelectorAll('#myTable tr');

                tableRows.forEach(function(row) {
                    var cells = row.getElementsByTagName('td');
                    var found = false;
                    Array.from(cells).forEach(function(cell, index) {
                        // Excluir la última columna de acciones de la búsqueda
                        if (index < cells.length - 1 && cell.textContent.toLowerCase().includes(searchValue)) {
                            found = true;
                        }
                    });
                    if (found) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
