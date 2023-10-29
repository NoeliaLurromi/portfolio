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

const header = document.querySelector(`.Header`)



// COMPORTAMIENTO DEL HEADER //
    // Cuando hago MOUSEWHEEL hacia abajo (DELTAY +) el header le ADD la class .isHidden
    // Cuando hago scroll hacia arriba (DELTAY -) el header le REMOVE la class .isHidden

window.addEventListener("mousewheel" , (e) => {
    console.log(e.deltaY)
    if(e.deltaY >= 0){
        // menú desaparece
        header.classList.add(`isHidden`)
    } else{
        // menu aparece
        header.classList.remove(`isHidden`)
    }
})


// TRANSICIÓN ENTRE PÁGINAS //

const enlaces = document.querySelectorAll(`.Header-a`)
const cortinillaNaranja = document.querySelector(`.Cortinilla-naranja`)
const cortinillaSalmon = document.querySelector(`.Cortinilla-salmon`)

console.log( enlaces )
console.log( cortinillaNaranja)
console.log( cortinillaSalmon)

enlaces.forEach(( eachEnlace , i) => {
    enlaces[i].addEventListener(`click` , ( e ) => {
        e.preventDefault()

        const href = enlaces[i].href
        
        cortinillaNaranja.classList.add(`isActive`)
        setTimeout(() => {
            window.location = href 
        } ,1000)
    })
})




