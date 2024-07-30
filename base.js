//goto top 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//sidebar toggle
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('showsidebar');
    sidebar.classList.toggle('hidesidebar');
}