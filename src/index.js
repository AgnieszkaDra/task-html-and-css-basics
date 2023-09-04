import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data';

import App from './App'
import { Navigation } from './components/Navigation/Navigation';
import { Features } from './components/Features';
import { Prices } from './components/Prices';

import { Team } from './components/Team';
import AddYourself from './components/Team';

import { toggleHamburger } from './js/toggleHamburger';
import { selectMember } from './js/inputSelect';

const team = document.querySelector('.team__container')
console.log(team)
ReactDOM.render(<Navigation/>, document.querySelector('.navigation'));
ReactDOM.render(<Features {...data}/>, document.querySelector('.features__container'));
ReactDOM.render(<Prices {...data}/>, document.querySelector('.pricing__container'));

ReactDOM.render(<Team {...data}/>, document.querySelector('.team__container'));
// ReactDOM.render(<AddYourself {...data}/>, document.querySelector('.team__container'));

// const icons = document.querySelectorAll('.hamburger__icon');
// console.log(icons)
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//   });
// });
const iconsHamburger = document.querySelectorAll('.hamburger__icon');
toggleHamburger(iconsHamburger)

const selectElement = document.getElementById("select__member");
selectMember(selectElement)

const you = document.querySelector('.team__person.you')
console.log(you)






