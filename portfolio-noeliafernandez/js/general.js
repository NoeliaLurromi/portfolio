'use strict'

// MENU HAMBURGUESA // 
// Cuando hago CLICK en .Header-button
//.Header-nav se le TOGGLE la clase isActive

const headerButton = document.querySelector(`.Header-button`)
const headerNav = document.querySelector(`.Header-nav`)

console.log(headerButton)
console.log(headerNav)

headerButton.addEventListener(`click`, () => {
    headerNav.classList.toggle(`isActive`)
})


// COMPORTAMIENTO DEL HEADER //
// Cuando hago MOUSEWHEEL hacia abajo (DELTAY +) el header le ADD la class .isHidden
// Cuando hago scroll hacia arriba (DELTAY -) el header le REMOVE la class .isHidden

// const header = document.querySelector(`.Header`)

// window.addEventListener("mousewheel" , (e) => {
//     console.log(e.deltaY)
//     if(e.deltaY >= 0){
//         // menú desaparece
//         header.classList.add(`isHidden`)
//     } else{
//         // menu aparece
//         header.classList.remove(`isHidden`)
//     }
// })




// TRANSICIÓN ENTRE PÁGINAS //

const enlaces = document.querySelectorAll(`.Header-a`)
const logo = document.querySelector(`.Header-logo`)
const cortinillaNaranja = document.querySelector(`.Cortinilla-naranja`)
const cortinillaSalmon = document.querySelector(`.Cortinilla-salmon`)

console.log(enlaces)
console.log(logo)
console.log(cortinillaNaranja)
console.log(cortinillaSalmon)

enlaces.forEach((eachEnlace, i) => {
    enlaces[i].addEventListener(`click`, (e) => {
        e.preventDefault()

        const href = enlaces[i].href

        cortinillaNaranja.classList.add(`isActive`)
        setTimeout(() => {
            window.location = href
        }, 600)
    })
})

enlaces.forEach((eachEnlace, i) => {
    enlaces[i].addEventListener(`click`, (e) => {
        e.preventDefault()

        const href = enlaces[i].href

        cortinillaSalmon.classList.add(`isActive`)
        setTimeout(() => {
            window.location = href
        }, 800)
    })
})



// APARTADO PROYECTOS HOME //
//Cuando hago MOUSEOVER en .Projects-single
// .Projects-image le ADD la clase isActive
// Cuando a .Projects-single MOUSEOUT
// .Projects-image le REMOVE la clase isActive

const projects = document.querySelectorAll(`.Projects-single`)
const images = document.querySelectorAll(`.Project-image`)

console.log(projects)
console.log(images)



// AQUI LAS IMAGENES DEL INDEX//

const contenedor = document.querySelector(`.Project-img-container`)
const enlacesProyecto = document.querySelectorAll(`.Projects-a`)


let backgrounds = [
    `url("../assets/img-index/img-hover-penaclara.jpg")`,
    `url("../assets/img-index/img-hover-genderdesign.jpg")`,
    `url("../assets/img-index/img-hover-esdirsign.jpg")`,
    `url("../assets/img-index/img-hover-diadelibro.jpg")`,
]

enlacesProyecto.forEach((eachEnlace, index) => {

    enlacesProyecto[index].addEventListener(`mouseover`, () => {
        contenedor.style.backgroundImage = backgrounds[index];
        contenedor.style.backgroundRepeat = "no-repeat";
        contenedor.style.backgroundSize= "contain";
        contenedor.style.backgroundPosition= "right";
        enlacesProyecto.forEach((eachEnlace, index) => {
            enlacesProyecto[index].classList.add(`notHovering`)
        })
        enlacesProyecto[index].classList.remove(`notHovering`)
        contenedor.classList.add(`isActive`)
    })


    enlacesProyecto[index].addEventListener(`mouseout`, () => {
        contenedor.style.backgroundImage = backgrounds[4]
        enlacesProyecto.forEach((eachEnlace, index) => {
            enlacesProyecto[index].classList.remove(`notHovering`)
        })
        contenedor.classList.remove(`isActive`)
    })
});

