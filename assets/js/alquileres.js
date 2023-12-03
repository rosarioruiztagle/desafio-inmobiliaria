import enAlquiler from "./data/enAlquiler.js";

const catalogo = (bienesRaices, galeriaId) => {
const galeria = document.getElementById(galeriaId);

//Cartas
bienesRaices.forEach((bienRaiz) => {

    const template = document.createElement("div");
    template.className = "col-md-4 mb-4" ;

    const templateContent = `
    <div class="card">
              <img
                src= " ${bienRaiz.src}"
                class="card-img-top"
                alt=" ${bienRaiz.titulo}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${bienRaiz.titulo}
                </h5>
                <p class="card-text">
                  ${bienRaiz.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${bienRaiz.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${bienRaiz.habitaciones} |
                  <i class="fas fa-bath"></i> ${bienRaiz.banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${bienRaiz.valor}</p>
                <p class=" ${bienRaiz.fumar ? `text-success` : `text-danger`}">
                  <i class="fas ${bienRaiz.fumar ? `fa-smoking` : `fa-smoking-ban`}"></i> ${bienRaiz.fumar ? `Permitido fumar` : `No se permite fumar`}
                </p>
                <p class=" ${bienRaiz.mascotas ? `text-success` : `text-danger`}">
                  <i class="fas ${bienRaiz.mascotas ? `fa-paw` : `fa-ban`}"></i> ${bienRaiz.mascotas ? `Mascotas permitidas` : `No se permiten mascotas`}
                </p>
              </div> 
    `
    template.innerHTML = templateContent;
    galeria.appendChild(template);

});
}
catalogo(enAlquiler, "divEnAlquiler");

