console.log('icons')


export const toggleHamburger = (el) => {
  el.forEach (icon => {  

  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
})};

export default toggleHamburger