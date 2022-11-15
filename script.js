const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const navItems = document.querySelectorAll('.nav-item');

const toggleClassList = (element, className) => {
  element.classList.toggle(className);
};

openMenu.addEventListener('click', () => {
  toggleClassList(menu, 'active');
  toggleClassList(openMenu, 'hide');
  toggleClassList(closeMenu, 'show');
});

closeMenu.addEventListener('click', () => {
  toggleClassList(menu, 'active');
  toggleClassList(openMenu, 'hide');
  toggleClassList(closeMenu, 'show');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    toggleClassList(menu, 'active');
    openMenu.classList.remove('hide');
    closeMenu.classList.remove('show');
  });
});