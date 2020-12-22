document.addEventListener("DOMContentLoaded", () => {
 const bntFlotante = document.querySelector(".btn-flotante");
 bntFlotante.addEventListener("click", (e) => {
  e.preventDefault();
  const footer = document.querySelector("#footer");
  if (footer.classList.contains("activo")) {
   footer.classList.remove("activo");
   bntFlotante.classList.remove("activo");
   bntFlotante.innerHTML = "Idioma y Moneda";
  } else {
   footer.classList.add("activo");
   bntFlotante.classList.add("activo");
   bntFlotante.innerHTML = "Cerrar";
  }
 });

 const imageHero = document.querySelector(".hero");
 let i = 0;
 let time = 0;
 const imagenes = ["arriba2.jpg", "arriba.jpg"];

 setInterval(() => {
  if (time > 40) {
   time = 0;
   imageHero.style.backgroundImage = `url(../img/${imagenes[i]})`;
   if (i === imagenes.length - 1) {
    i = 0;
   } else {
    i++;
   }
  } else {
   time++;
  }
  imageHero.style.backgroundPositionY = `-${time}px`;
 }, 100);
});
