import "./css/reset.scss";
import "./css/fonts.scss";
import "./css/common.scss";
import "./css/styles.scss";
import "./css/styles_coffee.scss";
import { CARDS } from "./mock";

const CARDS_ROOT = document.getElementById("cards"); //находим место в html куда положим наши каточки, находим section с id="cards"

const genElement = (tag, attrs = {}, children) => {
  //пишем функцию которая создаст тег, запишет атрибуты, добывит чилдренов
  const element = document.createElement(tag);

  for (const key in attrs) element.setAttribute(key, attrs[key]);
  if (children && Array.isArray(children)) element.append(...children);

  return element;
};
const cardsElements = CARDS.map(
  //создаем и заполняем карточки с помощью написанной нами ранее функции
  (card) =>
    genElement("div", { class: "card" }, [
      genElement("img", { class: "card_image", src: card.img }),
      genElement("div", { class: "card_content" }, [
        genElement("div", { class: "card_content_text" }, [
          genElement("span", { class: "content_coffee_title" }, [card.title]),
          genElement("p", { class: "content_coffee_description" }, [
            card.description,
          ]),
        ]),
        genElement("span", { class: "content_coffee_price" }, [card.price]),
      ]),
    ])
  //   const img = generateElement("img", { class: "card_image", src: card.img });
  //   const title = generateElement("span", {}, [card.title]);
  //   const description = generateElement("p", {}, [card.description]);
  //   const price = generateElement("span", { class: "coffeePrice" }, [card.price]);

  //   const content = generateElement("div", { class: "card_content" }, [title, description, price]);

  //   const div = generateElement("div", { class: "card" }, [img, content]); //(создаем в dom ветвление как в html файле)  мы создаем теги (а точнее не теги а node элементы) для того чтобы в дальнейшем с помощью .append поместить их в dom

  //   return div;
);

CARDS_ROOT?.append(...cardsElements); //добавляем в section cards созданные здесь карточки
