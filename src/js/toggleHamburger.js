const icons = document.querySelectorAll('.hamburger__icon');
export const toggleHamburger = icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});