document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav__close');

    // Abrir menu
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.add('show');
    });

    // Fechar menu
    closeBtn.addEventListener('click', function() {
        mobileNav.classList.remove('show');
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileNav.classList.remove('show');
        }
    });
});
