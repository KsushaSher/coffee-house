import "./css/reset.scss";
import "./css/fonts.scss";
import "./css/common.scss";
import "./css/styles.scss";
import "./css/styles_coffee.scss";
import { CARDS } from "./mock";

// START при медиа запросе 1439px появляется выпадающее меню (dropdown)
const toggleClass = (element, className) => {
  const isActive = element.classList.contains(className); //проверка наличия класса
  if (isActive) element.classList.remove(className); // если есть удаляет
  else element.classList.add(className); // если нет - добавляет
};
const header_content = document.getElementById("header_content");
const button_icon_burger = document.getElementById("button_icon_burger");
button_icon_burger.addEventListener("click", () => {
  toggleClass(header_content, "active");
  toggleClass(button_icon_burger, "active");
});
// console.log({ header_nav, button_icon_burger });
// END при медиа запросе 1439px появляется выпадающее меню (dropdown)

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

// START СОЗДАЕМ КАРТОЧКИ
const CARDS_ROOT = document.getElementById("cards"); //находим место в html куда положим наши каточки, находим section с id="cards"
//пишем функцию которая создаст тег, запишет атрибуты, добывит чилдренов
const genElement = (tag, attrs = {}, children) => {
  const element = document.createElement(tag);
  for (const key in attrs) element.setAttribute(key, attrs[key]);
  if (children && Array.isArray(children)) element.append(...children);
  return element;
};

const genCards = (cards) =>
  cards?.map((card) =>
    genElement("div", { class: "card" }, [
      genElement("div", { class: "card_image_wrapper" }, [
        genElement("img", { class: "card_image", src: card.img }),
      ]),
      genElement("div", { class: "card_content" }, [
        genElement("span", { class: "content_coffee_title" }, [card.title]),
        genElement("p", { class: "content_coffee_description" }, [card.description]),
        genElement("span", { class: "content_coffee_price" }, [card.price]),
      ]),
    ])
  );

// start переключение coffee/tea/dessert (2 вариант)
const addTabsClickHandler = () => {
  const tabsWrapper = document.querySelector("#tabs");
  const tabs = Array.from(tabsWrapper?.children || []);
  tabsWrapper?.addEventListener("click", (e) => {
    const clickedTab = tabs.find((item) => item.contains(e.target));
    if (clickedTab) {
      addActiveClassToTab(tabs, clickedTab);
      filterCardsBySelectedTab(clickedTab);
    }
  });
};
const addActiveClassToTab = (tabs, clickedTab) => {
  tabs.forEach((item) => item.classList.remove("active"));
  clickedTab.classList.add("active");
};
const filterCardsBySelectedTab = (clickedTab) => {
  let cardsWrapper = document.querySelector("#cards");
  cardsWrapper.innerHTML = "";
  const type = clickedTab.dataset.type;
  let arrayCards = CARDS.filter((card) => card.category === type);
  cardsWrapper.append(...genCards(arrayCards));
};
addTabsClickHandler();
// end переключение coffee/tea/dessert (2 вариант)

let cardsWrapper = document.querySelector("#cards");
let arrayCards = CARDS.filter((card) => card.category === "coffee");

cardsWrapper?.append(...genCards(arrayCards)); //добавляем в section cards созданные здесь карточки - исходное значение при загрузке страницы
// END СОЗДАЕМ КАРТОЧКИ

// // START MODAL WINDOW
// //находим место в html куда положим наши каточки, находим section с id="cards"
// const MODAL_WINDOWS_ROOT = document.getElementById("modal_windows");

// // генерируем теги для модалки
// const genModalWindows = (modalWindows) =>
//   modalWindows?.map((modalWindow) =>
//     genElement("div", { class: "card" }, [
//       genElement("div", { class: "card_image_wrapper" }, [
//         genElement("img", { class: "card_image", src: modalWindow.img }),
//       ]),
//       genElement("div", { class: "card_content" }, [
//         genElement("span", { class: "content_coffee_title" }, [modalWindow.title]),
//         genElement("p", { class: "content_coffee_description" }, [modalWindow.description]),
//         genElement("span", { class: "content_coffee_price" }, [modalWindow.price]),
//       ]),
//     ])
//   );

// // что показываем
// let arrayModals = CARDS.filter((card) => card.category === "coffee");

// // добавляем в section
// MODAL_WINDOWS_ROOT?.append(...genModalWindows(arrayModals));
// // END MODAL WINDOW

//создаем и заполняем карточки с помощью написанной нами ранее функции
// const cardsElements = CARDS.map(
//   (card) =>
//     genElement("div", { class: "card" }, [
//       genElement("div", { class: "card_image_wrapper" }, [
//         genElement("img", { class: "card_image", src: card.img }),
//       ]),
//       genElement("div", { class: "card_content" }, [
//         genElement("span", { class: "content_coffee_title" }, [card.title]),
//         genElement("p", { class: "content_coffee_description" }, [card.description]),
//         genElement("span", { class: "content_coffee_price" }, [card.price]),
//       ]),
//     ])
//   //   const img = generateElement("img", { class: "card_image", src: card.img });
//   //   const title = generateElement("span", {}, [card.title]);
//   //   const description = generateElement("p", {}, [card.description]);
//   //   const price = generateElement("span", { class: "coffeePrice" }, [card.price]);
//   //   const content = generateElement("div", { class: "card_content" }, [title, description, price]);
//   //   const div = generateElement("div", { class: "card" }, [img, content]); //(создаем в dom ветвление как в html файле)  мы создаем теги (а точнее не теги а node элементы) для того чтобы в дальнейшем с помощью .append поместить их в dom
//   //   return div;
// );

// const CARDS_MAP = {
//   coffee: CARDS_COFFEE,
//   tea: CARDS_TEA,
//   dessert: CARDS_DESSERT,
// };

// start переключение coffee/tea/dessert (1 вариант)
// const TABS = document.querySelectorAll("#tabs>div");
// Array.from(TABS).map((item, index, arr) =>
//   item.addEventListener("click", (event) => {
//     arr.forEach((el) => {
//       el.classList?.remove("active");
//     }); // всем кнопкам удаяляем класс 'active'
//     item.classList.add("active"); // кликнутой кнопке добавляем класс 'active'
//     CARDS_ROOT.innerHTML = ""; // очищаем содержимое карточек
//     // console.log({ "event.target": event.target, item });
//     if (item.classList.contains("coffee")) {
//       CARDS_ROOT?.append(...genCards(CARDS_COFFEE)); //добавляем в section cards созданные здесь карточки
//     } else if (item.classList.contains("tea")) {
//       CARDS_ROOT?.append(...genCards(CARDS_TEA));
//     } else if (item.classList.contains("dessert")) {
//       CARDS_ROOT?.append(...genCards(CARDS_DESSERT));
//     }
//   })
// );
// end переключение coffee/tea/dessert (1 вариант)
