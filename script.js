/*
    1) Відкрити та закрити за допомогою кнопки
    2) Закрити за кліком у бекдроп: onBackDropClick
    3) Закрити за допомогою ESC: onEscapeKeypress
У CSS є клас show-modal, який необхідно додати до body при відкритті модалки 
 */


const openButton = document.querySelector('[data-action="open-modal"]')

const closeButton = document.querySelector('[data-action="close-modal"]')
const backdrop = document.querySelector('.js-backdrop')

console.log(openButton, closeButton)


const onOpenModal = () => {
document.body.classList.add('show-modal')
} 


const onCloseModal = () => {
document.body.classList.remove('show-modal')
} 

const onBackdropClick = (event) => {
    console.log(event.target)
    console.log(event.target)
document.body.classList.remove('show-modal')
} 

const onEscapeKeypress = (event) => {
    if (event.code == 'ESC') {
        document.body.classList.remove('show-modal')
    }
} 

openButton.addEventListener('click', onOpenModal)
closeButton.addEventListener('click', onCloseModal)
backdrop.addEventListener('click', onBackdropClick)
backdrop.addEventListener('keydown', onEscapeKeypress)