export class Modal {
  constructor({ id, img, name, description, price, category, sizes, additives }) {
    // this.classes = classes; //объекты которые мы не будем передавать но он в любом случае будет их генерировать
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
    this.state = {
      size: 0,
      additives: [],
    };
  }

  // метод который создает модалку
  buildModal() {
    this.article = this.generateContent();
    this.modal_windows = this.createDomNode("div", "modal_windows");
    this.modal = this.createDomNode("div", "wrapper_modal_window");
    this.background = this.createDomNode("div", "background");

    this.setContent(this.article);
    this.appendModalElements();
    this.bindEvents();
    this.openModal();
    this.addTabsSizesClickHandler();
    this.addTabsAdditivesClickHandler();
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
    let article = this.createDomNode("div", "wrapper_modal_window");
    // let article = document.createElement("div");
    // article.className = "wrapper_modal_window";

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
                <div class="button_wrapper sizes">
                <label class="label active" data-add-price="${this.sizes.s["add-price"]}">
                    <div class="button_icon_circle">
                    <span class="button_icon">S</span>
                    </div>
                    <span class="button_value">${this.sizes.s.size}</span>
                </label>
                <label class="label" data-add-price="${this.sizes.m["add-price"]}">
                    <div class="button_icon_circle">
                    <span class="button_icon">M</span>
                    </div>
                    <span class="button_value">${this.sizes.m.size}</span>
                </label>
                <label class="label" data-add-price="${this.sizes.l["add-price"]}">
                    <div class="button_icon_circle">
                    <span class="button_icon">L</span>
                    </div>
                    <span class="button_value">${this.sizes.l.size}</span>
                </label>
                </div> 
            </div>`);
      this.additives &&
        (template += `<div class="additives"> 
            <legend class="legend">Additives</legend>
            <div class="button_wrapper additives">
            <label class="label" data-add-price="${this.additives[0]["add-price"]}">
                <div class="button_icon_circle">
                <span class="button_icon">1</span>
                </div>
                <span class="button_value">${this.additives[0].name}</span>
            </label>
            <label class="label" data-add-price="${this.additives[1]["add-price"]}">
                <div class="button_icon_circle">
                <span class="button_icon">2</span>
                </div>
                <span class="button_value">${this.additives[1].name}</span>
            </label>
            <label class="label" data-add-price="${this.additives[2]["add-price"]}">
                <div class="button_icon_circle">
                <span class="button_icon">3</span>
                </div>
                <span class="button_value">${this.additives[2].name}</span>
            </label>
            </div> 
            </div>`);
      this.price &&
        (template += `<h3 class="total">
                <span>Total:</span>
                <span data-total>${this.price}</span>
             </h3>
        `);
      template += `<div class="warning">
                    <div class = "warning_img_wrapper">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_268_10145)">
                                <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_268_10145">
                                 <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
      
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
    this.article.querySelector(".button_close").addEventListener("click", this.closeModal);
    this.background.addEventListener("click", this.closeModal);
    document.addEventListener("keydown", this.closeModal);
  }
  //   { once: true }
  openModal() {
    document.body.append(this.modal_windows);
    this.modal_windows.append(this.modal);
    this.modal_windows.append(this.background);
  }

  closeModal(e) {
    let classes = e.target.classList;
    document.removeEventListener("keydown", this.closeModal);
    if (classes.contains("background") || classes.contains("button_close") || e.code === "Escape") {
      document.querySelector(".modal_windows")?.remove();
      document.querySelector("body").classList.remove("overflow");
    }
  }

  //radio start
  addTabsSizesClickHandler() {
    const buttonWrapper = this.article.querySelector(".button_wrapper.sizes");
    buttonWrapper.addEventListener("click", (event) => {
      const clickedButton = event.target.closest(".label");
      if (clickedButton) {
        this.addActiveClassToSizes(clickedButton, buttonWrapper);
        this.state.size = clickedButton.dataset.addPrice; // перезапишем начальное значение на значение стоимости добавки из дата атрибута
        this.recalculate();
        // this.addSizesToTotal(clickedButton.dataset.addPrice);
      }
    });
  }
  addActiveClassToSizes(clickedButton, buttonWrapper) {
    Array.from(buttonWrapper.children).forEach((child) => {
      child.classList.remove("active");
    });
    clickedButton.classList.add("active");
  }
  //radio end

  //checkbox start
  addTabsAdditivesClickHandler() {
    const buttonWrapper = this.article.querySelector(".button_wrapper.additives");
    buttonWrapper.addEventListener("click", (event) => {
      const clickedButton = event.target.closest(".label");
      if (clickedButton) {
        this.addActiveClassToAdditives(clickedButton, buttonWrapper);
        this.recalculate();
      }
    });
  }
  addActiveClassToAdditives(clickedButton, buttonWrapper) {
    if (clickedButton.classList.contains("active")) {
      clickedButton.classList.remove("active");
      this.state.additives.pop();
    } else {
      clickedButton.classList.add("active");
      this.state.additives.push(clickedButton.dataset.addPrice);
    }
  }
  //checkbox end

  recalculate() {
    const total = this.article.querySelector("[data-total]");
    const sum =
      parseFloat(this.price) +
      parseFloat(this.state.size) +
      this.state.additives.reduce((acc, cur) => acc + parseFloat(cur), 0);
    total.innerText = sum;
  }

  renderModal() {
    // let content = this.generateContent();
    this.buildModal();
  }
}
