
const button = document.querySelector("button")
const h1 = document.querySelector("h1")

button.addEventListener('click', function () {
    newColor = randomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
})


const randomColor = () => {
    const v1 = Math.floor(Math.random() * 255)
    const v2 = Math.floor(Math.random() * 255)
    const v3 = Math.floor(Math.random() * 255)
    return `rgb(${v1}, ${v2}, ${v3})`
}