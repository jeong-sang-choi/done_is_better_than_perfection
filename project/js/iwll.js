document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('progress')) || {};
  const totalActions = Object.values(data).reduce((a, b) => a + b, 0);

  const el = document.querySelector('.count');
  if (el) {
    el.innerText = `${totalActions} actions flowed upward`;
  }
});
