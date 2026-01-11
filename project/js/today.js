// today.js
document.addEventListener('DOMContentLoaded', () => {
  // 체크리스트 체크 처리
  const checkItems = document.querySelectorAll('.check-item input');

  checkItems.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const label = checkbox.closest('.check-item');

      if (checkbox.checked) {
        label.classList.add('done');
        s;
      } else {
        label.classList.remove('done');
      }
    });
    // 새로고침 시 오늘 완료 상태 복원
    const isCompleted = localStorage.getItem('todayCompleted');

    if (isCompleted === 'true') {
      // 체크박스 잠금
      const checkboxes = document.querySelectorAll('.check-item input');
      checkboxes.forEach((cb) => {
        cb.disabled = true;
      });

      // Complete 버튼 상태 복원
      const completeBtn = document.querySelector('.complete-btn');
      if (completeBtn) {
        completeBtn.textContent = 'Completed';
        completeBtn.disabled = true;
        completeBtn.classList.add('done');
      }
    }
  });

  // Complete 버튼 처리
  const completeBtn = document.querySelector('.complete-btn');
  if (!completeBtn) return;

  completeBtn.addEventListener('click', completeToday);
});

// 오늘 완료 상태 저장
localStorage.setItem('todayCompleted', 'true');

function completeToday() {
  const today = new Date().toISOString().slice(0, 10);

  // 기존 progress 데이터 가져오기
  const data = JSON.parse(localStorage.getItem('progress')) || {};

  // 오늘 완료 +1
  data[today] = (data[today] || 0) + 1;

  // 저장
  localStorage.setItem('progress', JSON.stringify(data));

  // [추가] 체크박스 잠금
  const checkboxes = document.querySelectorAll('.check-item input');
  checkboxes.forEach((cb) => {
    cb.disabled = true;
  });

  // [추가] Complete 버튼 상태 변경
  const completeBtn = document.querySelector('.complete-btn');
  completeBtn.textContent = 'Completed';
  completeBtn.disabled = true;
  completeBtn.classList.add('done');

  // UX 피드백
  alert('오늘의 기록이 완료됐어요 👍');
  localStorage.setItem('todayCompleted', 'true');
}
