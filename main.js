const headerDropdown = document.querySelectorAll(".list-item");
const subNavs = document.querySelectorAll('.subnav');

headerDropdown.forEach(item => {
    const btn = item.querySelector('.secondary-btn');
    const subNav = item.querySelector('.subnav');
    btn.addEventListener('click', () => {
        if (subNav.style.display == 'flex') {
            subNav.style.display = 'none'
        } else {
            subNav.style.display = 'flex'
        }
    })
})
