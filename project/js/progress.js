document.addEventListener('DOMContentLoaded', () => {
  applyProgressData(); // 1️⃣ 데이터 반영
  animateBars(); // 2️⃣ 애니메이션
  animateStats(); // 3️⃣ 숫자 카운트
});

/* ===============================
   APPLY PROGRESS DATA
================================ */
function applyProgressData() {
  const data = JSON.parse(localStorage.getItem('progress')) || {};
  const today = new Date().toISOString().slice(0, 10);
  const count = data[today] || 0;

  const bar = document.querySelector('.bar.today');
  if (!bar) return;

  // 👉 퍼센트 → 픽셀로 변환해서 data 속성에 저장
  const base = 30; // 최소 높이
  const unit = 15; // 증가 단위
  const percent = base + count * unit;

  bar.dataset.targetHeight = percent;
}

/* ===============================
   BAR ANIMATION
================================ */
function animateBars() {
  const bars = document.querySelectorAll('.bar');

  bars.forEach((bar, index) => {
    const targetPercent = bar.dataset.targetHeight || 40;

    bar.style.height = '0%';
    bar.style.transition = 'height 0.8s ease';

    setTimeout(() => {
      bar.style.height = targetPercent + '%';
    }, 150 + index * 120);
  });
}
