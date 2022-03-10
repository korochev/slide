const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slidesCount = document.querySelectorAll('.main-slide > div').length;
const height = document.querySelector('.container').clientHeight;

let activeSlideIndex = 0;

upBtn.onclick = () => changeSlide('up');
downBtn.onclick = () => changeSlide('down');

window.onwheel = e => {
   if(e.deltaY >= 0){
      changeSlide('down');
     console.log('Scroll Down');
   } else {
      changeSlide('up');
     console.log('Scroll Up');
   }
}

document.onkeydown = e => {
   if(e.key === 'ArrowUp') {
      changeSlide('up');
   } else if (e.key === 'ArrowDown') {
      changeSlide('down');
   }
}

function changeSlide(dir) {
   if (dir === "up") {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) activeSlideIndex = 0;
   } else if (dir === "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1;
   }

   document.querySelector('.main-slide').style.transform = `translateY(-${activeSlideIndex * height}px)`;
   document.querySelector('.sidebar').style.transform = `translateY(${activeSlideIndex * height}px)`;
}
