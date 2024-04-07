const headerDropdown = document.querySelectorAll(".list-item");
const subNavs = document.querySelectorAll('.subnav');

const hideAllSubnavs = () => {
    subNavs.forEach(subnav => {
        subnav.classList.remove('show')
    })
}

headerDropdown.forEach(item => {
    const btn = item.querySelector('.secondary-btn');
    const subNav = item.querySelector('.subnav');
    btn.addEventListener('click', () => {
        hideAllSubnavs();
        subNav.classList.toggle('show')
    })
})

document.body.addEventListener('click', (event) => {
    if (!event.target.closest('.list-item')) {
        hideAllSubnavs()
    }
})