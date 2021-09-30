//All variables
let goTopBtn = document.querySelector('button.goTopBtn')

let navLinks = Array.from(document.querySelectorAll('#nav li a'))
let aboutBooks = document.getElementById('aboutBooks')
let characters = document.getElementById('characters')
let author = document.getElementById('author')

let showAllImg = document.querySelector('img.showAll')

let harryTxt = document.getElementById('harry')
let ronTxt = document.getElementById('ron')
let hermioneTxt = document.getElementById('hermione')

let harry = document.querySelector('img.Harry')
let ron = document.querySelector('img.Ron')
let hermione = document.querySelector('img.Hermione')


let navBtn = document.querySelector('#nav button')


//Go Top Button
window.onscroll = () =>{
    if (window.scrollY < aboutBooks.offsetTop) {
        goTopBtn.classList.add('hide')
    } else {
        goTopBtn.classList.remove('hide')
    }
}

goTopBtn.addEventListener('click', ()=>{
    window.scroll(0, 0)
})


//Nav links
navLinks.map(el=>{
    el.addEventListener('click', e=>{
        e.preventDefault()
    })
})
navLinks[0].addEventListener('click', ()=>{
    window.scroll(0, aboutBooks.offsetTop)
})
navLinks[1].addEventListener('click', ()=>{
    window.scroll(0, characters.offsetTop)
})
navLinks[2].addEventListener('click', ()=>{
    window.scroll(0, author.offsetTop)
})


//Nav button
navBtn.addEventListener('click', e=>{
    e.preventDefault()
})


//Harry, Ron, Hermione
const showHarry = () =>{
    harry.style.transform = 'translateY(40%)'
    setTimeout(()=>{
        harry.style.transform = 'translateY(100%)'
    }, 2000)
}
harryTxt.addEventListener('click', ()=>{
    showHarry()
})

const showRon = () =>{
    ron.style.transform = 'translateY(0)'
    setTimeout(()=>{
        ron.style.transform = 'translateY(100%)'
    }, 2000)
}
ronTxt.addEventListener('click', ()=>{
    showRon()
})

const showHermione = () =>{
    hermione.style.transform = 'translateX(0)'
    setTimeout(()=>{
        hermione.style.transform = 'translateX(100%)'
    }, 2000)
}
hermioneTxt.addEventListener('click', ()=>{
    showHermione()
})

showAllImg.addEventListener('click', ()=>{
    showHarry()
    showRon()
    showHermione()
})