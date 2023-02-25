const dropdwon=document.querySelector("#dropdownMenu");
const project=document.querySelector('#menu');
const navbar=document.querySelector('#navBar');
// for logo 
const img1=document.querySelector('#img1');
const img2=document.querySelector('#img2');

// for bar 
const bar1=document.querySelector('#bar1');
const bar2=document.querySelector('#bar2');


dropdwon.addEventListener('click',()=>{
    if(project.classList.contains('hidden')){
        project.classList.remove('hidden');
        navbar.classList.remove('bg-white');
        navbar.classList.remove('text-black');
        navbar.classList.add('bg-teal-900');
        navbar.classList.add('text-white');

        // for image 
        img1.classList.add('hidden');
        img2.classList.remove('hidden');

        // for bar 
        bar1.classList.add('hidden');
        bar2.classList.remove('hidden');
    }
    else{
        project.classList.add('hidden')
        navbar.classList.add('text-black');
        navbar.classList.add('bg-white');

        // for image 
        img1.classList.remove('hidden');
        img2.classList.add('hidden');

        // for bar 
        bar1.classList.remove('hidden');
        bar2.classList.add('hidden');
    }
});






// Slider js 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

}
// end slider js 




// for faq 
const acco=document.querySelector("#accordian");
const faq=document.querySelector('#faq');

acco.addEventListener('click',()=>{
    if(faq.classList.contains('hidden')){
      faq.classList.remove('hidden')
    }
    else{
      faq.classList.add('hidden')
    }
});
const acco2=document.querySelector("#accordian2");
const faq2=document.querySelector('#faq2');

acco2.addEventListener('click',()=>{
    if(faq2.classList.contains('hidden')){
      faq2.classList.remove('hidden')
    }
    else{
      faq2.classList.add('hidden')
    }
});

// toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

