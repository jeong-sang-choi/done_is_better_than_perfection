document.addEventListener('DOMContentLoaded', () => {
  animateBars();
  animateStats();
});

/* ===============================
   BAR ANIMATION
================================ */
function animateBars() {
  const bars = document.querySelectorAll('.bar');

  bars.forEach((bar, index) => {
    // CSS에서 설정된 최종 높이 가져오기
    const finalHeight = bar.offsetHeight;

    // 초기 상태
    bar.style.height = '0px';
    bar.style.transition = 'height 0.8s ease';

    // 순차적으로 올라가게
    setTimeout(() => {
      bar.style.height = finalHeight + 'px';
    }, 150 + index * 120);
  });
}

/* ===============================
   NUMBER COUNT UP
================================ */
function animateStats() {
  const stats = document.querySelectorAll('.stat .value');

  stats.forEach((stat) => {
    const text = stat.innerText;
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9]/g, '');

    let current = 0;
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / number), 20);

    const timer = setInterval(() => {
      current += 1;
      stat.innerText = current + suffix;

      if (current >= number) {
        stat.innerText = number + suffix;
        clearInterval(timer);
      }
    }, stepTime);
  });
}
