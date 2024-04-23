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
