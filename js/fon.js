document.addEventListener('DOMContentLoaded', () => {
  const patterns = document.querySelectorAll('.corner-pattern');
  let delay = 500; // Початковий інтервал у мілісекундах

  patterns.forEach((pattern, index) => {
    setTimeout(() => {
      pattern.classList.add('show');
    }, delay);
    delay += 1000; // Затримка перед показом наступного
  });
});
