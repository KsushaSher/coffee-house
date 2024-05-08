import slider1 from "./img/coffee-slider-1.png";
import slider2 from "./img/coffee-slider-2.png";
import slider3 from "./img/coffee-slider-3.png";

const SLIDERS = [
  {
    id: "1",
    img: slider1,
    drink_name: "S’mores Frappuccino",
    coffee_description:
      "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
  },
  {
    id: "2",
    img: slider2,
    drink_name: "Caramel Macchiato",
    coffee_description:
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
  },
  {
    id: "3",
    img: slider3,
    drink_name: "Ice coffee",
    coffee_description:
      "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
  },
];

// START СОЗДАЕМ СЛАЙДЕР
let activeImage = 0;
const sliderPlace = document.querySelector("#slider_content");
const sliderPlaceWrapper = document.querySelector(".slider_content_wrapper"); //?
const sliders = document.querySelectorAll("#row_slider");
let flag = true;
const prevArrow = document.querySelector("#circle_arrow_left"); //кнопка влево
const nextArrow = document.querySelector("#circle_arrow_right"); //кнопка вправо
const slideCount = SLIDERS.length;
const widthOffset = document.querySelector(".slider_content_wrapper")?.clientWidth;
const wrapperProgressBar = document.querySelector("#progress_bar_wrapper");
let isPaused = false;

if (sliderPlace && wrapperProgressBar) {
  // const widthOffset = document.querySelector("#row_slider").clientWidth;
  // sliderPlace.style.left = "-" + widthOffset + "px";

  const genElement = (tag, attrs = {}, children) => {
    const element = document.createElement(tag);
    for (let key in attrs) element.setAttribute(key, attrs[key]);
    if (children && Array.isArray(children)) element.append(...children);
    return element;
  };
  const renderSlider = (slider) =>
    genElement("div", { class: "row_slider", id: "row_slider", data_id: slider.id }, [
      genElement("img", { src: slider.img, alt: "picture slider", class: "picture_slider" }),
      genElement("div", { class: "description" }, [
        genElement("div", { class: "drink_name" }, [slider.drink_name]),
        genElement("div", { class: "coffee_description" }, [slider.coffee_description]),
        genElement("div", { class: "price" }, [slider.price]),
      ]),
    ]);
  // перед тем как добавить класс удаляем его
  // const addAnimationToProgressBar = () => {
  //   const progressLine = wrapperProgressBar.children[activeImage].firstElementChild;
  //   if (progressLine.classList.contains("progress_line_animation")) {
  //     progressLine.classList.remove("progress_line_animation");
  //     setTimeout(() => {
  //       progressLine.classList.add("progress_line_animation");
  //     }, 0);
  //   } else {
  //     progressLine.classList.add("progress_line_animation");
  //   }
  // };

  const addAnimationToProgressBar = () => {
    const progressLine = wrapperProgressBar.children[activeImage].firstElementChild;
    progressLine.classList.add("progress_line_animation");
  };

  const removeAnimationToProgressBar = () => {
    Array.from(wrapperProgressBar.children).map((item) =>
      item.firstElementChild.classList.remove("progress_line_animation")
    );
  };

  const initSlider = (sliders) => {
    const first = sliders[0];
    const second = sliders[1];
    const last = sliders[slideCount - 1];
    addAnimationToProgressBar();
    // removeAnimationToProgressBar();
    sliderPlace.append(renderSlider(last), renderSlider(first), renderSlider(second));
  };
  initSlider(SLIDERS);

  const nextSliderGenerate = (sliders) => {
    const nextIndex = (activeImage + 1) % slideCount;
    let nextSlider = sliders[nextIndex];
    const node = renderSlider(nextSlider);
    sliderPlace.append(node);
  };

  const prevSliderGenerate = (sliders) => {
    // document.querySelector("#slider_content .row_slider:nth-child(2)").style.background = "black";
    // const nodeCur = renderSlider(sliders[activeImage]);
    // nodeCur.style.transform = "translate(480px)";
    const prevIndex = (activeImage - 1 + slideCount) % slideCount;
    let prevSlider = sliders[prevIndex];
    const node = renderSlider(prevSlider);
    node.style.width = 0;
    sliderPlace.prepend(node);
  };

  const nextSlider = () => {
    if (!flag) return;
    flag = !flag;
    activeImage++;
    if (activeImage > slideCount || activeImage == slideCount) {
      activeImage = 0;
    }
    // document.querySelector("#slider_content .row_slider").remove();
    nextSliderGenerate(SLIDERS);
    animate({
      duration: 1000,
      draw: function (progress) {
        document.querySelector("#slider_content .row_slider").style.width =
          widthOffset * (1 - progress) + "px";
      },
      removeElement: document.querySelector("#slider_content .row_slider"),
      // onEnd: (v) => {
      //   console.log("next: ", v);
      // },
    });
    removeAnimationToProgressBar(); //удалим progress bar у предыдущего слайда
    addAnimationToProgressBar();
  };

  const prevSlider = () => {
    if (!flag) return;
    flag = !flag;
    activeImage--;
    if (activeImage < 0) {
      activeImage = slideCount - 1;
    }
    // document.querySelector("#slider_content .row_slider:last-child").remove();
    sliders.forEach((slider) => (slider.style.width = 0));
    prevSliderGenerate(SLIDERS);
    animate({
      duration: 1000,
      draw: function (progress) {
        document.querySelector("#slider_content .row_slider").style.width =
          widthOffset * progress + "px";
      },
      removeElement: document.querySelector("#slider_content .row_slider:last-child"),
      // onEnd: (v) => {
      //   console.log("prev: ", v);
      // },
    });
    removeAnimationToProgressBar();
    addAnimationToProgressBar();
  };

  let timer = setInterval(() => {
    if (!isPaused) nextSlider();
  }, 4000);

  const animate = ({ duration, draw, removeElement, onEnd }) => {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let step = (time - start) / duration;
      if (step > 1) step = 1;
      draw(step);
      if (step < 1) {
        requestAnimationFrame(animate);
      } else {
        onEnd?.({ step, time, start, duration });

        removeElement.remove();
        flag = true;
      }
    });
  };

  // const slide = () => {
  //   const slideWidth = sliderPlaceWrapper.clientWidth;
  //   console.log(slideWidth);
  //   const slideOffset = -activeImage * slideWidth;
  //   sliders[activeImage - 1].style.transform = `translateX(${480}px)`;
  // };

  const pauseProgressBar = () => {
    isPaused = true;
    const progressLine = wrapperProgressBar.children[activeImage].firstElementChild;
    progressLine.classList.add("progress_line_paused");
  };

  const resumeProgressBar = () => {
    isPaused = false;
    const progressLine = wrapperProgressBar.children[activeImage].firstElementChild;
    progressLine.classList.remove("progress_line_paused");
  };

  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    // console.log(event.touches);
    x1 = event.touches[0].clientX;
    y1 = event.touches[0].clientY;
    // console.log("1:", x1, y1);
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    // console.log("2:", x2, y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      xDiff < 0 ? nextSlider() : prevSlider();
    } else {
      return;
    }
    // if (xDiff < 0) nextSlider();
    // else prevSlider();
  }

  nextArrow.addEventListener("click", nextSlider);
  prevArrow.addEventListener("click", prevSlider);
  wrapperProgressBar.addEventListener("animationend", removeAnimationToProgressBar);
  sliderPlaceWrapper.addEventListener("mouseover", pauseProgressBar);
  sliderPlaceWrapper.addEventListener("mouseout", resumeProgressBar);
  sliderPlaceWrapper.addEventListener("touchstart", handleTouchStart, false);
  sliderPlaceWrapper.addEventListener("touchmove", handleTouchMove, false);
}
// END СОЗДАЕМ СЛАЙДЕР
