const clickedParagraphs = Array.from(document.getElementsByClassName("clickedText"))

const showText = Array.from(document.getElementsByClassName("show"));


const arrows = Array.from(document.getElementsByClassName("arrow"))


arrows.forEach( function (element, index) {
    element.addEventListener("click", function () {
        element.classList.toggle("rotate");
        clickedParagraphs[index].classList.toggle("boldText");
        showText[index].classList.toggle("remove");
    })
})