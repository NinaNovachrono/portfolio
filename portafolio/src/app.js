const hButton = document.getElementById('hamburguer')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hButton.addEventListener('click', toggleButton)