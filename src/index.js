import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data';

import App from './App'
import { Navigation } from './components/Navigation/Navigation';
import { Features } from './components/Features';
ReactDOM.render(<Navigation/>, document.querySelector('.navigation'));
ReactDOM.render(<Features {...data}/>, document.querySelector('.features__container'));

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





