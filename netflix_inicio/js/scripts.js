const inputs = document.querySelectorAll("form .campo input");
inputs.forEach((i) => {
 i.addEventListener("blur", validarInput);
});

inputs.forEach((i) => {
 i.addEventListener("input", validarInput);
});

function validarInput(e) {
 const target = e.target;
 const estados = ["valido", "no-valido"];

 let clase;
 if (target.value.length === 0) {
  clase = estados[1];
 } else {
  clase = estados[0];
 }

 target.classList.remove(...estados);
 target.nextElementSibling.classList.remove(...estados);

 target.classList.add(clase);
 target.nextElementSibling.classList.add(clase);

 if (clase === "no-valido") {
  if (target.parentElement.nextElementSibling.classList[0] !== "alerta") {
   const errorDiv = document.createElement("div");
   errorDiv.appendChild(document.createTextNode("Este campo es obligatorio"));
   errorDiv.classList.add("alerta");
   target.parentElement.parentElement.insertBefore(
    errorDiv,
    target.parentElement.nextElementSibling
   );
  }
 } else {
  if (target.parentElement.nextElementSibling.classList[0] === "alerta") {
   target.parentElement.nextElementSibling.remove();
  }
 }
}

const mostrarPassword = document.querySelector("form .campo span");
mostrarPassword.addEventListener("click", (e) => {
 const passwordInput = document.querySelector("#password");
 if (e.target.classList.contains("mostrar")) {
  e.target.classList.remove("mostrar");
  e.target.textContent = "Ocultar";
  passwordInput.type = "text";
 } else {
  e.target.classList.add("mostrar");
  e.target.textContent = "Mostrar";
  passwordInput.type = "password";
 }
});
