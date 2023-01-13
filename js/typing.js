const text = document.querySelector("p")
const button = document.querySelector("button")
const letters = text.textContent.split("")

button.addEventListener("click", function() {
    location.reload()
})

function typingEffect(element) {
    element.textContent = ""

    for(let i = 0; i < letters.length; i ++) {
        setTimeout(() => {
            element.textContent += letters[i]
        }, 75 * i);
    }
}
typingEffect(text)