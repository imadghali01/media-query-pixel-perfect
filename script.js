const hamburgerOpen = document.querySelectorAll('.hamburger');
hamburgerOpen.forEach(hamburger => {

    hamburger.addEventListener('click', e => {
        e.target.classList.toggle('active');
    })
})

function showMenu() {
    const contain = document.querySelector('container');
    const menu = document.querySelector('ul');
    if ((menu.style.display === 'none' || menu.style.display === '')) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';

    } 
    else{
        menu.style.display = 'none';
    }
}
/*else if(contain.style.width > '1440px') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'row';
    }*/