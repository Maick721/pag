// main.js

document.addEventListener('DOMContentLoaded'), () => {
  // Selecciona todos los botones de sumar y restar
  const sumarButtons = document.querySelectorAll('.sumar');
  const restarButtons = document.querySelectorAll('.restar');
  const agregarButtons = document.querySelectorAll('.agregar-carrito');

  // Función para sumar
  sumarButtons.forEach(button => {
      button.addEventListener('click', () => {
          const contador = button.previousElementSibling; 
          let valorActual = parseInt(contador.value);
          contador.value = valorActual + 1; // Incrementa el valor
      });
  });

  // Función para restar
  restarButtons.forEach(button => {
      button.addEventListener('click', () => {
          const contador = button.nextElementSibling; 
          let valorActual = parseInt(contador.value);
          if (valorActual > 1) {
              contador.value = valorActual - 1; // Decrementa el valor
          }
      });
  });

  // Función para agregar al carrito
  agregarButtons.forEach(button => {
      button.addEventListener('click', () => {
          const contador = button.previousElementSibling.querySelector('input[type="number"]');
          const cantidad = contador.value;
          const producto = button.parentElement.querySelector('h2').innerText; // Nombre del producto
          alert(`Agregaste ${cantidad} de ${producto} al carrito.`);
      });
  }
);
}
