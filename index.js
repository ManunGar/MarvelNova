document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
});

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu-btn").classList.toggle("rot");
});

//-------------------------------------------------------------------------//
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});


//-------------------------------------------------------------------//

document.querySelector("#buttom1").addEventListener("click", () => {
    document.querySelector(".modal-container1").classList.add("show");
});
document.querySelector("#buttom2").addEventListener("click", () => {
    document.querySelector(".modal-container2").classList.add("show");
});
document.querySelector("#buttom3").addEventListener("click", () => {
    document.querySelector(".modal-container3").classList.add("show");
});
document.querySelector("#buttom4").addEventListener("click", () => {
    document.querySelector(".modal-container4").classList.add("show");
});


document.querySelector(".btn-modal1").addEventListener("click", () =>{
    document.querySelector(".modal-container1").classList.remove("show")
});
document.querySelector(".btn-modal2").addEventListener("click", () =>{
    document.querySelector(".modal-container2").classList.remove("show")
});
document.querySelector(".btn-modal3").addEventListener("click", () =>{
    document.querySelector(".modal-container3").classList.remove("show")
});
document.querySelector(".btn-modal4").addEventListener("click", () =>{
    document.querySelector(".modal-container4").classList.remove("show")
});