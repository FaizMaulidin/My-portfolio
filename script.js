const popup = document.querySelector('.popup')
const projects = document.getElementById('projects')
const projectCard = document.querySelectorAll('.projects-card')
const cardImg = document.querySelectorAll('.card-img')
const aboutProject = document.querySelectorAll('.about-project')
const readButton = document.querySelectorAll('.card-desc button')

function setPopup() {
    popup.classList.toggle('open-popup')
}

const Show = new IntersectionObserver((es) => {
    es.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        } else {
            e.target.classList.remove('show')
        }
    })
}, { threshold: 0.2 })

const Blue = new IntersectionObserver((es) => {
    es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('card-scroll')
        } else {
            e.target.classList.remove('card-scroll')
        }
    });
}, { 
    threshold: 1
 })

projectCard.forEach(element => {
    Show.observe(element)
})

const media = window.matchMedia("(max-width:1023px)")

if (media.matches) {
    cardImg.forEach(element => {
        Blue.observe(element)
    })
} else {
    cardImg.forEach(element => {
        Blue.unobserve(element)
    })
}


function readProject(e) {
    aboutProject[e].classList.toggle('show-about-project')
    if (readButton[e].innerHTML == 'Read About Project') {
        readButton[e].innerHTML = "Back to Preview"
    } else {
        readButton[e].innerHTML = "Read About Project"
    }
}