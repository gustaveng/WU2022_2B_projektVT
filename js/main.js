const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav")

burger.addEventListener("click", () => {
    nav.classList.toggle("toggle")
})

function toggleMenu(){
    burger.classList.toggle('burger-toggle')
}

burger.addEventListener('click', toggleMenu)