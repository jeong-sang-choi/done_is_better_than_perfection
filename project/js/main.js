console.log('main.js loaded');

// 초기 오버레이 값
const container = document.querySelector('.container');
if (container) {
  container.style.setProperty('--overlay-opacity', '0.15');
}

// 스크롤 시 배경 어두워짐
window.addEventListener('scroll', () => {
  if (!container) return;

  const scrollY = window.scrollY;
  const maxScroll = 300;

  const opacity = Math.min(0.15 + (scrollY / maxScroll) * 0.45, 0.6);
  container.style.setProperty('--overlay-opacity', opacity.toFixed(2));
});

// 방문자 수 카운트업
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('visitor-number');
  if (!el) return;

  const target = 1248;
  let current = 0;

  const timer = setInterval(() => {
    current += Math.ceil(target / 80);
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString();
  }, 20);
});
