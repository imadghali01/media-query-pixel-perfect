const hamburgerOpen = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburgerOpen.addEventListener('click', e => {
    menu.classList.toggle('active');
})


/*function showMenu() {
    const contain = document.querySelector('container');
    const menu = document.querySelector('ul');
    if ((menu.style.display === 'none' || menu.style.display === '')) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';

    } 
    else{
        menu.style.display = 'none';
    }
}*/
/*else if(contain.style.width > '1440px') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'row';
    }*/