// Lista de colores que se aplicarán al texto
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5", "#F5FF33"];

// Selecciona el elemento h2 dentro de .hero
const heroText = document.querySelector(".hero h2");

// Función para cambiar el color del texto
function changeColor() {
    // Selecciona un color aleatorio de la lista
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Aplica el color al texto
    heroText.style.color = randomColor;
}

// Cambia el color cada 3 segundos (3000 milisegundos)
setInterval(changeColor, 3000);