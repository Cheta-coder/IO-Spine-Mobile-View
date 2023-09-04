let mobile = document.querySelector('.mobile-navigation')
let closeIcon = document.querySelector('.fa-xmark')
let hamburgerIcon = document.querySelector('.fa-bars');
let ul = document.querySelector('.top-nav-ul');
mobile.style.visibility = 'hidden';


hamburgerIcon.addEventListener('click', function appear(){
    mobile.style.visibility = 'visible'
    mobile.style.width = '70%'
})


closeIcon.addEventListener('click', () => {
    mobile.style.visibility = 'hidden';
})