function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
// 下層ページではナビを常に塗りつぶし。トップではスクロールで塗りつぶし。
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  if (!nav.classList.contains('solid')) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    });
  }
  // スムーズスクロール（同一ページ内アンカー）
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var t = document.querySelector(href);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});
