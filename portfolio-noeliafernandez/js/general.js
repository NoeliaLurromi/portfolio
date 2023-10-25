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

// https://es.stackoverflow.com/questions/516192/cambiar-un-valor-de-una-propiedad-css-desde-js
// Hay que cambiar la propiedad display block por none , mirar es página