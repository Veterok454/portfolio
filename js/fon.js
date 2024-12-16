const container = document.querySelector('.button-container');
const button = document.querySelector('.hero-button');

container.addEventListener('mousemove', e => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left; // Відносна позиція миші
  const mouseY = e.clientY - rect.top;

  // Розрахунок позиції кнопки
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  // Зміщення кнопки до миші
  button.style.transform = `translate(${deltaX / 3}px, ${
    deltaY / 3
  }px) scale(1.1)`;
  button.classList.add('active');
});

container.addEventListener('mouseleave', () => {
  // Повернення кнопки до центра
  button.style.transform = 'scale(1)';
  button.classList.remove('active');
});
