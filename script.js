// التحكم في الهيدر عند التمرير
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    // إذا لم تكن في الصفحة الرئيسية، اجعل الهيدر أبيض دائماً
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});