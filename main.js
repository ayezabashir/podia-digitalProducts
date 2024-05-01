const dropdownNavs = document.querySelectorAll('.dropdownNav');
const mbOpenMenu = document.querySelector('.mb-menu');
const mbMenu = document.querySelector('.mb-menu-items');
const closeMenu = document.getElementById('closeMenus');

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