const header = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");

header.addEventListener("click", function(event) {
  if (!event.target.classList.contains("menu__item"))         // если клик не по ссылке, просто завершим выполнение 
    return; 
  event.preventDefault();     // отменим стандартную реакцию ссылки на клик 
  
  menuItems.forEach(menuItem => {
    menuItem.classList.remove("active"); // удалим класс active у всех наших ссылок...
    event.target.classList.add("active"); // ...и добавим его той, по которой выполнен клик
  })
});
