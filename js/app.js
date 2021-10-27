const images = document.querySelectorAll(".main__image")
const modal = document.querySelector(".modal")
const modalImg = document.querySelector(".modal__img")
const modalClose = document.querySelector(".modal__close")
const modalCaption = document.querySelector(".modal__caption")
const modalRight = document.getElementById("modalRight")
const modalLeft = document.getElementById("modalLeft")

const imagesData = Array.from(images).reduce((acc, image) => {
  return [
    ...acc,
    {
      src: image.src,
      caption: image.alt,
    },
  ]
}, [])

let modalBtns = [modalRight, modalLeft]
let currentImageIndex = 0

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"
    modal.style.visibility = "visible"
    modalImg.src = img.src
    modalImg.alt = img.alt
    modalCaption.textContent = img.alt

    currentImageIndex = imagesData.findIndex((i) => i.src === img.src)
  })
})

modalClose.addEventListener("click", () => {
  modal.style.display = "none"
})

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "modalLeft") {
      if (currentImageIndex > 0) {
        currentImageIndex--
      } else {
        currentImageIndex = imagesData.length - 1
      }

      modalImg.src = imagesData[currentImageIndex].src
      modalImg.alt = imagesData[currentImageIndex].caption
      modalCaption.textContent = imagesData[currentImageIndex].caption
    } else if (btn.id === "modalRight") {
      if (currentImageIndex < imagesData.length - 1) {
        currentImageIndex++
      } else {
        currentImageIndex = 0
      }

      modalImg.src = imagesData[currentImageIndex].src
      modalImg.alt = imagesData[currentImageIndex].caption
      modalCaption.textContent = imagesData[currentImageIndex].caption
    }
  })
})
