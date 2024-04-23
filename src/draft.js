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

// ПРИМЕР start
const mld = new Modal("cssClass");

mld = {
  classes: "cssClass",
  modal: "",
  modalContent: "",
  modalCloseBtn: "",
  overlay: "",
  buildModal: () => {},
};

mld.buildModal();
// ПРИМЕР end

export class Modal {
  constructor(classes, { id, title, urlToImage, tags, content, date }) {
    this.classes = classes;
    this.modal = "";
    this.modalContent = "";
    this.overlay = "";
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.content = content;
    this.date = date;
  }

  buildModal(content) {
    this.overlay = this.createDomNode("div", "overlay", "overlay_modal");
    this.modal = this.createDomNode("div", "modal", this.classes);
    this.modalContent = this.createDomNode("div", "modal__content");

    this.setContent(content);
    this.appendModalElements();
    this.bindEvents();
    this.openModal();
  }

  // генерирует каркас модалки
  createDomNode(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  // генерирует доп контент для модалки
  generateContent() {
    let template = "";
    let article = document.createElement("div");
    article.className = "article-modal__content";

    this.urlToImage &&
      (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

    if (this.title || this.tags || this.content || this.date) {
      template += `<div class="strategy__content">`;

      this.date && (template += `<p class="strategy__date">${this.date}</p>`);

      this.title && (template += `<h3 class="strategy__name">${this.title}</h3>`);

      this.content && (template += `<p class="strategy__text">${this.content}</p>`);

      if (this.tags) {
        template += `<div class="strategy__tags tags">`;

        this.tags.map((tag) => {
          template += `<span class="tag tag_colored">${tag}</span>`;
        });

        template += `</div>`;
      }

      template += `</div>`;
    }

    article.innerHTML = template;
    return article;
  }

  //записывает доп контент в модалку
  setContent(content) {
    if (typeof content === "string") {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = "";
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    console.log(this.overlay);
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close-icon")) {
      document.querySelector(".overlay").remove();
    }
  }

  renderModal() {
    let content = this.generateContent();
    console.log(content);
    super.buildModal(content);
  }
}

// start рендер модального окна
// start пример
const addToolsClickHandler = () => {
  document.querySelector(".tools__button .button").addEventListener("click", () => {
    generateToolsModal();
  });
};
const generateToolsModal = () => {
  renderModalWindow("Test content for Tools Modal");
};

const renderModalWindow = (content) => {
  let modal = new Modal("tools-modal");
  modal.buildModal(content);
};
// end пример

const addStrategyClickHandler = () => {
  document.querySelector(".strategy-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".strategy")) {
      let clickedStrategyId = e.target.closest(".strategy").getAttribute("data-id");
      let clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
  });
};

const getClickedData = (id) => {
  return data.find((article) => article.id == id);
};

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal("article-modal", article);
  modal.renderModal();
};
// end рендер модального окна
