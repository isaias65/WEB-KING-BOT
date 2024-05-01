document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('inputNombre').value;
        const apellido = document.getElementById('inputApellido').value;
        let dni = document.getElementById('inputDni');
        let dniValue = dni.value; // Convertir a string para contar los caracteres
        const fechaNacimiento = document.getElementById('inputFechaNacimiento').value;
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
        const gradoEstudio = document.getElementById('selectGrado').value;
        const anioEstudio = document.getElementById('inputAnioEStudio').value;
        const especialidad = document.getElementById('inputEspecialidad').value;

        // Resetear clases de borde
        resetearBordes();

        // Validar que todos los campos estén llenos
        if (nombre.trim() === '') {
            mensajeAlert('Por favor, ingresa tu nombre.', "warning");
            marcarInputError(document.getElementById('inputNombre'));
            return;
        }

        if (apellido.trim() === '') {
            mensajeAlert('Por favor, ingresa tu apellido.', "warning");
            marcarInputError(document.getElementById('inputApellido'));
            return;
        }

        if (dniValue.trim() === '') {
            mensajeAlert('Por favor, ingresa tu DNI.', "warning");
            marcarInputError(dni);
            return;
        }

        // Validar que el DNI tenga exactamente 8 caracteres
        if (dniValue.length !== 8) {
            mensajeAlert('El DNI debe tener exactamente 8 caracteres.', "warning");
            marcarInputError(dni);
            return;
        }

        // Validar que el DNI solo contenga números
        const dniRegex = /^\d+$/;
        if (!dniRegex.test(dniValue)) {
            mensajeAlert('Por favor, ingresa solo números en el campo DNI.', "warning");
            marcarInputError(dni);
            return;
        }

        if (fechaNacimiento.trim() === '') {
            mensajeAlert('Por favor, ingresa tu fecha de nacimiento.', "warning");
            marcarInputError(document.getElementById('inputFechaNacimiento'));
            return;
        }

        // Validar la fecha de nacimiento
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const fechaActual = new Date();
        if (fechaNacimientoDate >= fechaActual) {
            mensajeAlert('La fecha de nacimiento debe ser anterior a la fecha actual.', "warning");
            marcarInputError(document.getElementById('inputFechaNacimiento'));
            return;
        }

        if (email.trim() === '') {
            mensajeAlert('Por favor, ingresa tu correo electrónico.', "warning");
            marcarInputError(document.getElementById('inputEmail'));
            return;
        }

        // Validar el correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajeAlert('Por favor, ingresa un correo electrónico válido.', "warning");
            marcarInputError(document.getElementById('inputEmail'));
            return;
        }

        if (password.trim() === '') {
            mensajeAlert('Por favor, ingresa tu contraseña.', "warning");
            marcarInputError(document.getElementById('inputPassword'));
            return;
        }

        // Validar la contraseña
        if (password.length < 5) {
            mensajeAlert('La contraseña debe tener al menos 5 caracteres.', "warning");
            marcarInputError(document.getElementById('inputPassword'));
            return;
        }

        // if (gradoEstudio === 'Selecciona una opción') {
        //     mensajeAlert('Por favor, selecciona un grado de estudio.', "warning");
        //     marcarInputError(document.getElementById('selectGrado'));
        //     return;
        // }

        if (gradoEstudio === 'Selecciona una opción' || gradoEstudio === '') {
            mensajeAlert('Por favor, selecciona un grado de estudio.', "warning");
            marcarInputError(document.getElementById('selectGrado'));
            return;
        }

        if (anioEstudio.trim() === '') {
            mensajeAlert('Por favor, ingresa el año de estudio.', "warning");
            marcarInputError(document.getElementById('inputAnioEStudio'));
            return;
        }

        if (especialidad.trim() === '') {
            mensajeAlert('Por favor, ingresa tu especialidad.', "warning");
            marcarInputError(document.getElementById('inputEspecialidad'));
            return;
        }

        // Si pasa todas las validaciones, cambia el borde a azul
        cambiarBordesCorrectos();

        // Si pasa todas las validaciones, puedes enviar el formulario aquí
        form.submit();
    });

    function mensajeAlert(titulo, icono) {
        Swal.fire({
            title: titulo,
            icon: icono
        });
    }

    function marcarInputError(input) {
        input.classList.add('input-error');
    }

    function cambiarBordesCorrectos() {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('input-error');
            input.classList.add('input-success');
        });
    }

    function resetearBordes() {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('input-error');
            input.classList.remove('input-success');
        });
    }
});