

function showSidebar(){
    const sidebar = document.querySelector(".navside");
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.navside');
    sidebar.style.display = 'none';
       
}

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header-main");
    header.classList.toggle("sticky", window.scrollY > 0);
})