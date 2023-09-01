import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import { Navigation } from './components/Navigation/Navigation';
ReactDOM.render(<Navigation/>, document.querySelector('.navigation'));

const icons = document.querySelectorAll('.hamburger__icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

// let mql = window.matchMedia("(max-width: 1199px)")
// if(mql){
// const menu = document.querySelector('.nav__menu')
// console.log(menu.classList)
// menu.classList.remove('nav__hide')
// }





