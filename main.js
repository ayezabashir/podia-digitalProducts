const dropdownNavs = document.querySelectorAll('.dropdownNav');
const mbOpenMenu = document.querySelector('.mb-menu');
const mbMenu = document.querySelector('.mb-menu-items');
const closeMenu = document.getElementById('closeMenus');
const mbNav1 = document.querySelector('.mbNav1');
const mbNav2 = document.querySelector('.mbNav2');
const mbNav3 = document.querySelector('.mbNav3');
const mbNav4 = document.querySelector('.mbNav4');
const footerBtn1 = document.getElementById('footerBtn1');
const footerBtn2 = document.getElementById('footerBtn2');
const footerBtn3 = document.getElementById('footerBtn3');
const footerBtn4 = document.getElementById('footerBtn4');
const footerBtn5 = document.getElementById('footerBtn5');
const footerBtn6 = document.getElementById('footerBtn6');
const footerBtn7 = document.getElementById('footerBtn7');


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
footerBtn1.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem1');
    const icon = document.querySelector('.icon1');
    icon.classList.toggle('toggleicon');
    listItem.classList.toggle('hide')
})

footerBtn2.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem2');
    const icon = document.querySelector('.icon2');
    icon.classList.toggle('toggleicon');
    listItem.classList.toggle('hide')
})

footerBtn3.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem3');
    listItem.classList.toggle('hide')
    const icon = document.querySelector('.icon3');
    icon.classList.toggle('toggleicon');
})

footerBtn4.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem4');
    listItem.classList.toggle('hide')
    const icon = document.querySelector('.icon4');
    icon.classList.toggle('toggleicon');
})

footerBtn5.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem5');
    listItem.classList.toggle('hide')
    const icon = document.querySelector('.icon5');
    icon.classList.toggle('toggleicon');
})

footerBtn6.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem6');
    listItem.classList.toggle('hide')
    const icon = document.querySelector('.icon6');
    icon.classList.toggle('toggleicon');
})

footerBtn7.addEventListener('click', () => {
    const listItem = document.getElementById('footerItem7');
    const icon = document.querySelector('.icon7');
    icon.classList.toggle('toggleicon');
    listItem.classList.toggle('hide')
})

