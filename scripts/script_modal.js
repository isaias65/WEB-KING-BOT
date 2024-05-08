// Función para crear y mostrar el modal
function crearModal() {
    var modalHTML = `
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Encabezado del modal con línea de separación -->
          <div class="modal-header">
            <img src="./assets/logo2.png" alt="Logo" class="modal-logo mr-auto">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- Cuerpo del modal -->
          <div class="modal-body">
            <div class="modal__titulo">
                <h5>¡Importante!</h5>
            </div>
            <div class="modal__p">
                <p>Felicidades, su robot ha sido registrado exitosamente para el concurso de robots. ¡Prepárese para mostrar el increíble talento y las capacidades de su creación en la emocionante competencia que se avecina! ¡Buena suerte!</p>
            </div>    
          </div>
          <!-- Pie del modal -->
          <div class="modal-footer">
            <!-- Botones -->
            <button type="button" class="btn btn__cancelar" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn__aceptar" onclick="redireccionar()">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
    `;
        // Función para redireccionar al usuario a otra página
    function redireccionar() {
        // Cambiar la URL por la que desees redirigir al usuario
        window.location.href = "https://www.ejemplo.com";
    }
    
    // Agregar el modal al contenedor de modals
    const containermodal = document.getElementById("modals-container");
    containermodal.innerHTML += modalHTML;

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      myModal.show();
}
