let hm = document.getElementById('hamburger');
let mobileNav = document.getElementById('nav-mobile');
let show = false;
let showMenu = () => {
    show = !show;
    if(show){
        mobileNav.style.display = 'flex';
    }else{
        mobileNav.style.display = 'none';
    }
};
hm.addEventListener('click', showMenu);
