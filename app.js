const items = document.querySelectorAll('.item');

function revealOnScroll() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const { top } = rect;

    if (top < window.innerHeight) {
      item.querySelector('.description').style.opacity = 1;
      item.querySelector('.description').style.height = 'auto';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Chamar a função no carregamento da página