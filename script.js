const modalOpenButton = document.querySelector('[data-action = "open-modal"]')
const modalCloseButton = document.querySelector('[data-action = "close-modal"]')
const modalBackdrop = document.querySelector(".js-backdrop")


const onOpenModal = function(){
document.body.classList.add("show-modal")
document.addEventListener("keydown", onEscapeKeypress)
}

const onCloseModal = function(){
    document.body.classList.remove("show-modal")
    document.removeEventListener("keydown", onEscapeKeypress)
}

const onBackDropClick = function(){
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
       onCloseModal()
    }
    
}

const onEscapeKeypress = function(event){
       if (event.code === "Escape") {
        onCloseModal()
    }
    
}


modalOpenButton.addEventListener("click", onOpenModal)
modalCloseButton.addEventListener("click", onCloseModal)
modalBackdrop.addEventListener("click", onBackDropClick)



const box = document.querySelector('.js-box')


const onMouseEnter = () => {
    document.body.classList.add("box--active")
    box.classList.add("box--active")

}

const onMouseLeave = () => {
    document.body.classList.remove("box--active")
    box.classList.remove("box--active")
}

box.addEventListener('mouseover', onMouseEnter)
box.addEventListener('mouseout', onMouseLeave)

