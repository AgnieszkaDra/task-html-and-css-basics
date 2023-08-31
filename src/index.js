import React from 'react'
import ReactDOM from 'react-dom';

import App from './App'
import Header from './components/Header/Header';


ReactDOM.render(<Header/>, document.querySelector('.header__container'));
ReactDOM.render(<App/>, document.querySelector('.pricing'));


// const icons = document.querySelectorAll('.icon');
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//   });
// });