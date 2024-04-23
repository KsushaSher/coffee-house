export class Modal {
  constructor(classes, { id, img, name, description, price, category, sizes, additives }) {
    this.classes = classes; //объекты которые мы не будем передавать но он в любом случае будет их генерировать
    this.modal_windows = "";
    this.modal = "";
    this.background = "";
    this.id = id;
    this.img = img;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.sizes = sizes;
    this.additives = additives;
  }

  // метод который создает модалку
  buildModal(content) {
    this.modal_windows = this.createDomNode("div", "modal_windows");
    this.modal = this.createDomNode("div", "wrapper_modal_window", this.classes);
    this.background = this.createDomNode("div", "background");

    this.setContent(content);
    this.appendModalElements();
    this.bindEvents();
    this.openModal();
    this.closeModal(e);
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
    article.className = "wrapper_modal_window";

    this.img && (template += `<img src=${this.img} alt="coffee" class="window_coffee_img" />`);
    if (
      this.name ||
      this.description ||
      this.price ||
      this.category ||
      this.sizes ||
      this.additives
    ) {
      template += `<div class="window_content_wrapper">`;
      this.name && (template += `<h3 class="window_name">${this.name}</h3>`);
      this.description && (template += `<p class="window_description">${this.description}</p>`);
      this.sizes &&
        (template += `<div class="size"> 
                <legend class="legend">Size</legend>
                <div class="button_wrapper">
                <label class="label active">
                    <input type="radio" class="button_input" />
                    <div class="button_icon_circle">
                    <span class="button_icon">S</span>
                    </div>
                    <span class="button_value">${this.sizes.s.size}</span>
                </label>
                <label class="label">
                    <input type="radio" class="button_input" />
                    <div class="button_icon_circle">
                    <span class="button_icon">M</span>
                    </div>
                    <span class="button_value">${this.sizes.m.size}</span>
                </label>
                <label class="label">
                    <input type="radio" class="button_input" />
                    <div class="button_icon_circle">
                    <span class="button_icon">L</span>
                    </div>
                    <span class="button_value">${this.sizes.l.size}</span>
                </label>
                </div> 
            </div>`);
      this.additives &&
        (template += `<div class="additives"> 
            <legend class="legend">Size</legend>
            <div class="button_wrapper">
            <label class="label active">
                <input type="radio" class="button_input" />
                <div class="button_icon_circle">
                <span class="button_icon">S</span>
                </div>
                <span class="button_value">${this.additives[0].name}</span>
            </label>
            <label class="label">
                <input type="radio" class="button_input" />
                <div class="button_icon_circle">
                <span class="button_icon">M</span>
                </div>
                <span class="button_value">${this.additives[1].name}</span>
            </label>
            <label class="label">
                <input type="radio" class="button_input" />
                <div class="button_icon_circle">
                <span class="button_icon">L</span>
                </div>
                <span class="button_value">${this.additives[2].name}</span>
            </label>
            </div> 
            </div>`);
      this.price &&
        (template += `<h3 class="total">
                <span>Total:</span>
                <span>${this.price}</span>
             </h3>
        `);
      template += `<div class="warning">
                <img class="warning_image" src="./img/svg/info-empty.svg" alt="info" />
                <p class="warning_content">
                The cost is not final. Download our mobile app to see the final price and place your
                order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                </p>
            </div>`;
      template += `<button class="button_close">Close</button>`;
    }
    article.innerHTML = template;
    return article;
  }

  //записывает доп контент в модалку (ветвление позволяет передавать как ноду так и строку)
  setContent(content) {
    if (typeof content === "string") {
      this.modal.innerHTML = content;
    } else {
      this.modal.innerHTML = "";
      this.modal.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal_windows.append(this.modal);
    this.modal_windows.append(this.background);
  }

  bindEvents() {
    this.document.querySelector(".button_close").addEventListener("click", this.closeModal);
    this.background.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.querySelector(".modal_windows").append(this.modal);
    document.querySelector(".modal_windows").append(this.background);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("background") || classes.contains("button_close")) {
      document.querySelector(".modal_windows").remove();
    }
  }

  renderModal() {
    let content = this.generateContent();
    this.buildModal(content);
  }
}
