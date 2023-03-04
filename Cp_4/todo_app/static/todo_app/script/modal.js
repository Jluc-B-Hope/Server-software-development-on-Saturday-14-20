let signUp = document.getElementById('signUp');
let signUp1 = document.getElementById('signUpMobile');
let modal = document.getElementById('modal');
let mobileNav2 = document.getElementById('nav-mobile');
signUp.addEventListener('click', () => {
    modal.style.display = "flex";
});
signUp1.addEventListener('click', () => {
    modal.style.display = "flex";
    mobileNav2.style.display = 'none';
});
let hideModal = (event) => {
    if(event.target === document.getElementById('modal') || event.target === document.getElementById('exit'))
        modal.style.display = 'none';
};

