let slideIndex = 1;

let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


let nextPage = function(index){
  if(slideIndex == 3){slideIndex = 1;}
  else{slideIndex++;}

  changeSlide();
}

let prevPage = function(index){
  if(slideIndex == 1){slideIndex = 3;}
  else{slideIndex--;}

  changeSlide();
}

next.addEventListener('click', nextPage);
prev.addEventListener('click', prevPage);


let changeSlide = function()
{
  if(slideIndex == 1)
  {
    slide1.classList.toggle('showSlide');
    if(slide2.classList.contains('showSlide'))
    {
      slide2.classList.toggle('showSlide');
    }
    if(slide3.classList.contains('showSlide'))
    {
      slide3.classList.toggle('showSlide');
    }
  }
  if(slideIndex == 2)
  {
    slide2.classList.toggle('showSlide');
    if(slide1.classList.contains('showSlide'))
    {
      slide1.classList.toggle('showSlide');
    }
    if(slide3.classList.contains('showSlide'))
    {
      slide3.classList.toggle('showSlide');
    }
  }
  if(slideIndex == 3)
  {
    slide3.classList.toggle('showSlide');
    if(slide1.classList.contains('showSlide'))
    {
      slide1.classList.toggle('showSlide');
    }
    if(slide2.classList.contains('showSlide'))
    {
      slide2.classList.toggle('showSlide');
    }
  }
}

let hamburger = document.querySelector('#hamburger');
let showNav = function()
{
  document.querySelector('nav').classList.toggle('showNav');
}
hamburger.addEventListener('click', showNav);

changeSlide();



