// SPナビ アコーディオン
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navlinks');
navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});
// メニュークリックで自動クローズ
navLinks.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
    });
});