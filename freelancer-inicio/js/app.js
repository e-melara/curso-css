document.addEventListener("DOMContentLoaded", () => {
 cargarPortafolio();
});

function cargarPortafolio() {
 fetch("datos.json")
  .then((response) => {
   return response.json();
  })
  .then((data) => {
   let html = "";
   data.portafolio.forEach((portafolio) => {
    html += `
        <div class='elemento'>
          <img src='./img/${portafolio.id}.jpg' />
          <div class='contenido'>
            <h3>${portafolio.nombre}</h3>
            <p>${portafolio.desc}</p>
          </div>
        </div>
      `;
   });
   document.querySelector("#listado").innerHTML = html;
  });
}
