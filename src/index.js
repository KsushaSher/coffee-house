import "./css/reset.scss";
import "./css/fonts.scss";
import "./css/common.scss";
import "./css/styles.scss";
import "./css/styles_coffee.scss";
import { CARDS } from "./mock";
import "./modal_windows";
import { Modal } from "./class_for_modal_windows";
import "./slider";
import "./dropdown";
import refreshButtonImg from "./img/svg/button-icon-dark-refresh.svg";

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
    genElement("div", { class: "card", data_id: card.id }, [
      genElement("div", { class: "card_image_wrapper" }, [
        genElement("img", { class: "card_image", src: card.img }),
      ]),
      genElement("div", { class: "card_content" }, [
        genElement("span", { class: "content_coffee_title" }, [card.name]),
        genElement("p", { class: "content_coffee_description" }, [card.description]),
        genElement("span", { class: "content_coffee_price" }, [card.price]),
      ]),
    ])
  );
let cardsWrapper = document.querySelector("#cards");
let currentCategory = "coffee";
let arrayCards = CARDS.filter((card) => card.category === "coffee");
//добавляем в section cards созданные здесь карточки - исходное значение при загрузке страницы
// cardsWrapper?.append(...genCards(arrayCards));

const addCardsToHtml = (cards) => {
  let cardsWrapper = document.querySelector("#cards");
  if (cardsWrapper) cardsWrapper.innerHTML = "";
  const userScreenWidth = window.innerWidth;
  const buttonRefresh = genElement("div", { class: "button_refresh" }, [
    genElement("img", {
      src: refreshButtonImg,
      class: "button_refresh_svg",
      alt: "button_refresh_svg",
    }),
  ]);

  // отображаем карточки
  if (userScreenWidth > 1439) {
    cardsWrapper?.append(...genCards(cards));
  } else {
    if (cards.length > 4) buttonRefresh.classList.add("visible_button");

    let filterCards = cards?.slice(0, 4);
    // console.log("filterCards", filterCards);
    cardsWrapper?.append(...genCards(filterCards), buttonRefresh);

    // нажатие кнопки 'обновить'
    const addOtherCards = () => {
      // console.log("addOtherCards");
      let otherCards = cards.slice(4);
      cardsWrapper?.append(...genCards(otherCards));
      buttonRefresh.classList.remove("visible_button");
    };
    buttonRefresh.addEventListener("click", addOtherCards);
  }
};
addCardsToHtml(arrayCards);

// изменение ширины экрана - 8 или 4 карточки на экране
let prevWidth = window.innerWidth;
const myScript = () => {
  const currentWidth = window.innerWidth;
  if ((prevWidth > 1439 && currentWidth <= 1439) || (prevWidth <= 1439 && currentWidth > 1439)) {
    console.log("addCardsToHtml");
    // let cardsWrapper = document.querySelector("#cards");
    // cardsWrapper.innerHTML = "";
    addCardsToHtml(CARDS.filter((card) => card.category === currentCategory));
  }
  prevWidth = currentWidth;
};
window.addEventListener("resize", myScript);

// END СОЗДАЕМ КАРТОЧКИ

// start переключение coffee/tea/dessert (2 вариант)
const addTabsClickHandler = () => {
  const tabsWrapper = document.querySelector("#tabs"); //нашли обертку
  const tabs = Array.from(tabsWrapper?.children || []); //создали массив из чилдренов обертки
  tabsWrapper?.addEventListener("click", (e) => {
    //на обертку вешаем обработчик
    const clickedTab = tabs.find((item) => item.contains(e.target)); //в переменную запишем найденный в массиве кликнутый e
    if (clickedTab) {
      //проверка - есть ли он вообще
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
  // let cardsWrapper = document.querySelector("#cards");
  // cardsWrapper.innerHTML = "";
  const type = clickedTab.dataset.type;
  let arrayCards2 = CARDS.filter((card) => card.category === type);
  currentCategory = type;
  addCardsToHtml(arrayCards2);
  // cardsWrapper.append(...genCards(arrayCards));
};
addTabsClickHandler();
// end переключение coffee/tea/dessert (2 вариант)
// END СОЗДАЕМ КАРТОЧКИ
