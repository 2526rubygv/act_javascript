console.log("JavaScript conectado correctamente");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("mostrarPass");
checkbox.addEventListener("change", function () { if (checkbox.checked) { passwordInput.type = "text"; } else { passwordInput.type = "password";}});

const usuarioInput = document.getElementById("usuario");
const infoUsuario = document.getElementById("infoUsuario");

usuarioInput.addEventListener("input", function () { if (usuarioInput.value.includes("@")) { infoUsuario.textContent = "✅ Usuario válido"; infoUsuario.style.color = "green";} else { infoUsuario.textContent = "❌ El usuario debe contener @"; infoUsuario.style.color = "red"; }comprobarFormulario();});

const infoPassword = document.getElementById("infoPassword");
passwordInput.addEventListener("input", function () {
  const pass = passwordInput.value;
  const tieneMinuscula = /[a-z]/.test(pass);
  const tieneMayuscula = /[A-Z]/.test(pass);
  const tieneNumero = /[0-9]/.test(pass);
  const tieneLongitud = pass.length >= 8;

  if (tieneMinuscula && tieneMayuscula && tieneNumero && tieneLongitud) { infoPassword.textContent = "✅ Contraseña válida"; infoPassword.style.color = "green"; } else { infoPassword.textContent = "❌ Debe tener mayúscula, minúscula, número y 8 caracteres"; infoPassword.style.color = "red"; } comprobarFormulario();
});

const boton = document.getElementById("btnEnviar");

function comprobarFormulario() { const usuarioCorrecto = usuarioInput.value.includes("@");
  const pass = passwordInput.value;
  const passwordCorrecta =
    /[a-z]/.test(pass) &&
    /[A-Z]/.test(pass) &&
    /[0-9]/.test(pass) &&
    pass.length >= 8;

  if (usuarioCorrecto && passwordCorrecta) {
    boton.style.display = "block";
    infoUsuario.style.display = "none";
    infoPassword.style.display = "none";
  } else {
    boton.style.display = "none";
    infoUsuario.style.display = "block";
    infoPassword.style.display = "block";
  }
}

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "pelicules.html";
});
