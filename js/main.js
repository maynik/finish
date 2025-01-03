const burgerMenu = document.getElementById('burger-menu');
const menu = document.querySelector('.header__contact__menu__main__mob');
const closeMenuButton = document.getElementById('close-menu');

// Відкриття меню при натисканні на бургер-меню
burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Закриття меню при натисканні на хрестик
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('active');
});



document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо всі вкладки та контент
  const tabs = document.querySelectorAll("ul li a");
  const contents = document.querySelectorAll(".tab-content");

  // Активуємо першу вкладку та перший контент за замовчуванням
  if (tabs.length > 0 && contents.length > 0) {
    tabs[0].classList.add("active");
    tabs[0].closest("li").classList.add("active"); // Додаємо клас active до li
    contents[0].classList.add("active");
  }

  // Додаємо обробник подій для кожної вкладки
  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault(); // Забороняємо перезавантаження сторінки

      // Видаляємо клас "active" у всіх вкладках і контенті
      tabs.forEach(item => item.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));
      const tabListItems = document.querySelectorAll("ul li");

      tabListItems.forEach(item => item.classList.remove("active")); // Видаляємо "active" у всіх <li>

      // Додаємо клас "active" до поточної вкладки
      this.classList.add("active");

      // Додаємо клас "active" до <li>, що містить поточну вкладку
      this.closest("li").classList.add("active");

      // Отримуємо ID цільового контенту з атрибуту data-tab
      const targetId = this.getAttribute("data-tab");

      // Знаходимо відповідний контент за ID і додаємо йому клас "active"
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});



$(document).ready(function(){
  $('.slider').slick({
      dots: true, 
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true, 
      autoplaySpeed: 3000, 
  });
});

function toggleOptions(option) {
  const options = document.querySelectorAll('.toggle-option');
  options.forEach((btn) => {
    if (btn.textContent.toLowerCase() === option) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
