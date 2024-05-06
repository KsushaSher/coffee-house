// НАХОДИМ КЛИКНУТУЮ КАРТОЧКУ И НАВЕШИВАЕМ ОБРАБОТЧИК (1 ВАРИАНТ)
// export const addToolsClickHandler = () => {
//   const cardsWrapper = document.querySelector(".cards");
//   cardsWrapper?.addEventListener("click", (e) => {
//     const cardsArray = Array.from(cardsWrapper?.children || []);
//     const clickedCard = cardsArray.find((item) => item.contains(e.target));
//     if (clickedCard) {
//       addVisibleClassToModal(clickedCard);
//     }
//   });
// };
// import { CARDS } from "./mock";

// НАХОДИМ КЛИКНУТУЮ КАРТОЧКУ И НАВЕШИВАЕМ ОБРАБОТЧИК (2 ВАРИАНТ) start
import { CARDS } from "./mock";
import { Modal } from "./class_for_modal_windows";

const addToolsClickHandler = () => {
  document.querySelector(".cards")?.addEventListener("click", (e) => {
    if (e.target.closest(".card")) {
      let idClickedCard = e.target.closest(".card").getAttribute("data_id"); //получаем id кликнутой карточки
      let clickedCardData = CARDS.find((card) => card.id === idClickedCard); //получаем данные из массива по id
      renderCardsModalWindow(clickedCardData);
    }
  });
};

addToolsClickHandler();

const renderCardsModalWindow = (cardData) => {
  let modal = new Modal(cardData);
  modal.renderModal();
  document.querySelector("body").classList.add("overflow");
};
// НАХОДИМ КЛИКНУТУЮ КАРТОЧКУ И НАВЕШИВАЕМ ОБРАБОТЧИК (2 ВАРИАНТ) end
