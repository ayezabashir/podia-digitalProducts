const dropdownNavs = document.querySelectorAll('.dropdownNav');
const mbMenu = document.querySelector('.mb-menu');

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

mbMenu.addEventListener('click', () => {

})