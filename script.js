var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
const slides = document.querySelectorAll(".slider")
var counter = 0;
slides.forEach(
    (slider,index) => {
        slider.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slider) => {
            slider.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}