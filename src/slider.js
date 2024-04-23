// START SLIDER favorite coffee
const slider = document.querySelector("#slider_content"); //обертка
if (slider) {
  // проверка наличия слайдера, если есть тогда выполняем все ниженаписанное
  const slides = Array.from(slider.querySelectorAll("#row_slider")); //массив слайдов
  const prevArrow = document.querySelector("#circle_arrow_left"); //кнопка влево
  const nextArrow = document.querySelector("#circle_arrow_right"); //кнопка вправо
  const slideCount = slides.length; //длина массива = 3
  let slideIndex = 0; //начальное значение индекса
  // console.log(slider, slides, prevArrow, nextArrow, slideCount, slideIndex);
  prevArrow.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();
  });
  nextArrow.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
  });
  const slide = () => {
    const slideWidth = slider.clientWidth;
    const slideOffset = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
  };
  // window.addEventListener("load", () => {
  //   slide();
  // });
}
// END SLIDER favorite coffee
