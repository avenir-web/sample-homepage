function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
// FAQ アコーディオン
document.querySelectorAll('.faq-q').forEach(function (q) {
  q.addEventListener('click', function () {
    q.parentElement.classList.toggle('open');
  });
});
