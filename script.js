window.onload = function() {
    // Mostrar un mensaje emergente de bienvenida
    alert("¡Bienvenido a la página!");
  
    // Pedir al usuario que ingrese su nombre
    var nombre = prompt("Por favor, ingresa tu nombre:");
  
    // Mostrar un mensaje de despedida personalizado
    alert("¡Que tengas una linda experiencia, " + nombre + "!");
  };
 // Espera a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento del carrusel por su ID
    var carouselElement = document.getElementById("carouselExample");
  
    // Crea una instancia del carrusel usando la biblioteca Bootstrap
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Intervalo de tiempo entre las imágenes (en milisegundos)
      keyboard: true, // Permitir navegación con teclado
      pause: "hover", // Pausar el carrusel cuando el cursor está sobre él
      ride: "carousel", // Reproducir automáticamente el carrusel
      touch: true, // Permitir interacciones táctiles
      wrap: true // Hacer que el carrusel se repita circularmente
    });
  });