// today.js

document.addEventListener('DOMContentLoaded', () => {
  const completeBtn = document.querySelector('.complete-btn');
  if (!completeBtn) return;

  completeBtn.addEventListener('click', completeToday);
});

function completeToday() {
  const today = new Date().toISOString().slice(0, 10);

  // 기존 progress 데이터 가져오기
  const data = JSON.parse(localStorage.getItem('progress')) || {};

  // 오늘 완료 +1
  data[today] = (data[today] || 0) + 1;

  // 다시 저장
  localStorage.setItem('progress', JSON.stringify(data));

  // UX용 (선택)
  alert('오늘의 기록이 완료됐어요 👍');
}
