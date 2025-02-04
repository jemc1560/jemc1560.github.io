
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const elements = document.querySelectorAll('.p1');
  elements.forEach((el) => observer.observe(el));
});

function checkOverlap() {
  const element1 = document.getElementById('header-wrapper');
  const element2 = document.getElementById('contain');
  const element3 = document.getElementById('aboutmepic');

  if (isOverlapping(element1, element2)) {
    element2.style.opacity = '50%';
  } else {
    element2.style.opacity = '100%';
  }
  if (isOverlapping(element1, element3)) {
    element3.style.opacity = '50%';
  } else {
    element3.style.opacity = '100%';
  }
}
function isOverlapping(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
  );
}

window.addEventListener('resize', checkOverlap);
window.addEventListener('scroll', checkOverlap);