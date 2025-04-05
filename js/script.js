/****************************************
 * script.js
 * Contendrá:
 * 1) Validación del formulario (consultas)
 * 2) Mensaje de confirmación
 * 3) Cambio de estilo (modo oscuro)
 ****************************************/

// 1. Capturamos elementos del DOM
const form = document.getElementById("formConsulta");
const btnDarkMode = document.getElementById("btnDarkMode");

// 2. Listener para el formulario
form.addEventListener("submit", function(event) {
  // Evitamos el envío directo
  event.preventDefault();

  // Obtenemos valores de campos
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const tipo = document.getElementById("tipo").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validamos que NO estén vacíos
  if (nombre === "" || email === "" || tipo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return; // Sale de la función, no envía
  }

  // Si todo ok, mostramos mensaje de confirmación
  alert("¡Gracias, " + nombre + "! Tu consulta ha sido enviada con éxito.");

  // Opcional: aquí podrías "enviar" la info a un servidor con fetch() 
  // o resetear el formulario:
  form.reset();
});

// 3. Listener para el cambio de estilo (modo oscuro)
btnDarkMode.addEventListener("click", function() {
  // Alternamos una clase "dark-mode" en el body
  document.body.classList.toggle("dark-mode");

  // Cambiamos el texto del botón según el modo
  if (document.body.classList.contains("dark-mode")) {
    btnDarkMode.textContent = "Desactivar modo oscuro";
  } else {
    btnDarkMode.textContent = "Activar modo oscuro";
  }
});
