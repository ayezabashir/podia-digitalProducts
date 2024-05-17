const dropdownNavs = document.querySelectorAll('.dropdownNav');
const mbOpenMenu = document.querySelector('.mb-menu');
const mbMenu = document.querySelector('.mb-menu-items');
const closeMenu = document.getElementById('closeMenus');
const mbNav1 = document.querySelector('.mbNav1');
const mbNav2 = document.querySelector('.mbNav2');
const mbNav3 = document.querySelector('.mbNav3');
const mbNav4 = document.querySelector('.mbNav4');


dropdownNavs.forEach((dropdownNav) => {
    dropdownNav.addEventListener('click', (event) => {
        event.stopPropagation();
        const subnav = dropdownNav.nextElementSibling;
        subnav.classList.toggle('show');
        const openSubnavs = document.querySelectorAll('.subnav.show');
        openSubnavs.forEach((openSubnav) => {
            if (openSubnav !== subnav) {
                openSubnav.classList.remove('show');
            }
        });
    });
});

document.addEventListener('click', () => {
    const openSubnavs = document.querySelectorAll('.subnav.show');
    openSubnavs.forEach((openSubnav) => {
        openSubnav.classList.remove('show');
    });
});

mbOpenMenu.addEventListener('click', () => {
    mbMenu.classList.remove('hide')
})

closeMenu.addEventListener('click', () => {
    mbMenu.classList.add('hide');
})

mbNav1.addEventListener('click', () => {
    const mbnavItem = document.querySelector('.subnav1');
    mbnavItem.classList.toggle('hide');
})
mbNav2.addEventListener('click', () => {
    const mbnavItem = document.querySelector('.subnav2');
    mbnavItem.classList.toggle('hide');
})
mbNav3.addEventListener('click', () => {
    const mbnavItem = document.querySelector('.subnav3');
    mbnavItem.classList.toggle('hide');
})
mbNav4.addEventListener('click', () => {
    const mbnavItem = document.querySelector('.subnav4');
    mbnavItem.classList.toggle('hide');
})