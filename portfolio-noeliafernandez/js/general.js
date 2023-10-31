'use strict'

// MENU HAMBURGUESA // 
    // Cuando hago CLICK en .Header-button,
    //.Header-nav se le TOGGLE la clase isActive

const headerButton = document.querySelector(`.Header-button`)
const headerNavMenu = document.querySelector(`.Header-nav.Menu`)
 
console.log( headerButton )
console.log( headerNavMenu )

// ESTO ES LO QUE CONSEGUÍ DEL MENU // 
    // var windowWidth = window.innerWidth;

    // if (windowWidth > 769){
    //     headerNavMenu.style.display = 'none';
    // } else {
    //     headerButton.addEventListener( `click` , () => {

    //         if (headerNavMenu.style.display === 'block'){
    //             headerNavMenu.style.display = 'none';
    //         } else {
    //             headerNavMenu.style.display = 'block';
    //         }
    //     })
    // }



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

console.log( enlaces )
console.log( logo )
console.log( cortinillaNaranja )
console.log( cortinillaSalmon )

enlaces.forEach(( eachEnlace , i) => {
    enlaces[i].addEventListener(`click` , ( e ) => {
        e.preventDefault()

        const href = enlaces[i].href
        
        cortinillaNaranja.classList.add(`isActive`)
        setTimeout(() => {
            window.location = href 
        } ,500)
    })
})

// APARTADO PROYECTOS HOME //
    //Cuando hago MOUSEOVER en .Projects-single
        // .Projects-image le ADD la clase isActive
    // Cuando a .Projects-single MOUSEOUT
        // .Projects-image le REMOVE la clase isActive

const projects = document.querySelectorAll(`.Projects-single`)
const images = document.querySelectorAll(`.Project-image`)

console.log( projects )
console.log( images )

       

// if( document.body.classList.contains('index')){

//     projectsLi.forEach( (projectLi, i ) => {
//         mostrarLi( projectsLi[i] )
//     })

//     scroll.addEventListener('click', () => {
//         workBox.classList.add('set')
//         setTimeout( () => {
//             workBox.classList.remove('set')
//         }, 1500);
//     })  
    
//     projects.forEach( (project, i) => {
//         projects[i].addEventListener('mouseover', () => {
    
//             imagebox.classList.add('activo')
    
//             images.forEach( (img, j) => {
//                 images[j].classList.remove('activo')
//             })
//             images[i].classList.add('activo')
            
//             projects.forEach( (project, j) => {
//                 projects[j].classList.add('activo')
//             })
//             projects[i].classList.remove('activo')
    
//         })
//     })
    
//     projects.forEach( (project, i) => {
//         projects[i].addEventListener('mouseout', () => {
    
//             imagebox.classList.remove('activo')
            
//             projects.forEach( (project, j) => {
//                 projects[j].classList.remove('activo')
//             })
//             span.forEach( (cadaSpan, j) => {
//                 span[j].classList.remove('activo')
//             }) 
//         })
//     })
// }

