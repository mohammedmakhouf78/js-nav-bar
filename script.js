let btn = document.querySelector('.nav-toggle')
let links = document.querySelector('.links')

btn.addEventListener('click', (e) => {
    links.classList.toggle('show-links')
})