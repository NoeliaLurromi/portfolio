'use strict'

// ----- MENU HAMBURGUESA ----// 

// Cuando hago CLICK en .Header-button,
    //.Header-nav se le TOGGLE la clase isActive

const headerButton = document.querySelector(`.Header-button`)
const headerNav = document.querySelector(`.Header-nav`)
 
console.log( headerButton )
console.log( headerNav )
    
headerButton.addEventListener( `click` , () => {
    headerNav.classList.toggle(`isActive`)
} )