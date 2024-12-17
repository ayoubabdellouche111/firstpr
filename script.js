const iconMenu = document.querySelector(".icon-menu ");
const scendUl = document.querySelector(".scend-ul ");
const faBars = document.querySelector(".fa-bars ");


faBars.addEventListener("click", () => {
    faBars.classList.toggle("fa-bars"); // تبديل الأيقونة
    faBars.classList.toggle("fa-x"); // تبديل الأيقونة
    scendUl.classList.toggle("active"); // عرض/إخفاء القائمة
});

