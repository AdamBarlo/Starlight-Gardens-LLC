"use strict";

//Mission Statment Modal:
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const missionBtn = document.querySelector(".missionBtn");
const closeModalBtn = document.querySelector(".close-modal");

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

missionBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
})


//Image Carousel:
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides (n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}