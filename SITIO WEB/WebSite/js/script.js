document.addEventListener("DOMContentLoaded", function () {
    const hamburguesa = document.querySelector(".hamburguesa");
    const menu = document.querySelector(".menu");
    hamburguesa.addEventListener("click", function () {
        menu.classList.toggle("mostrando");
    });
});
      
function mostrarImagen(src, descripcion) {
    const ventanaImagen = document.getElementById("ventanaImagen");
    const imagenAmpliada = document.getElementById("imagenAmpliada");
    const descripcionImagen = document.getElementById("descripcionImagen");
    imagenAmpliada.src = src;
    descripcionImagen.textContent = descripcion;
    ventanaImagen.style.display = "block";
}
    
function cerrarImagen() {
    const ventanaImagen = document.getElementById("ventanaImagen");
    ventanaImagen.style.display = "none";
}

