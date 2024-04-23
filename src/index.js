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
let arrayCards = CARDS.filter((card) => card.category === "coffee");
cardsWrapper?.append(...genCards(arrayCards)); //добавляем в section cards созданные здесь карточки - исходное значение при загрузке страницы
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
  let cardsWrapper = document.querySelector("#cards");
  cardsWrapper.innerHTML = "";
  const type = clickedTab.dataset.type;
  let arrayCards = CARDS.filter((card) => card.category === type);
  cardsWrapper.append(...genCards(arrayCards));
};
addTabsClickHandler();
// end переключение coffee/tea/dessert (2 вариант)
// END СОЗДАЕМ КАРТОЧКИ
