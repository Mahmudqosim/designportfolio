const images = document.querySelectorAll('.main__image')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal__img')
const modalClose = document.querySelector('.modal__close')
const modalCaption = document.querySelector('.modal__caption')

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'
        modal.style.visibility = 'visible'
        modalImg.src = img.src
        modalImg.alt = img.alt
        modalCaption.textContent = img.alt
    })
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})