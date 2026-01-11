// 입력창과 버튼 선택
const emailInput = document.getElementById('emailInput');
const loginBtn = document.getElementById('loginBtn');

// 로그인 버튼 클릭 시
loginBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  if (!email) return; // 빈 값 방지

  // 로그인 정보 저장 (가짜 로그인)
  localStorage.setItem('user', email);

  // 메인 페이지로 이동
  window.location.href = 'main.html';
});
