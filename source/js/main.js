import './_vendor';
import './_components';
import './components/contact-form-service.js'
import './components/currencies-select'
// import './components/form-popup'
import './components/forms'

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header-burger');
const closeMenu = document.querySelector('.menu-close');
const body = document.body;
const contactTrigger = document.querySelector('.contact');
const fixedButton = document.querySelector('.header-button')

document.querySelectorAll('.menu-list__link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('menu--active');
    body.classList.remove('body-locked');
    burger.classList.remove('header-burger--active')
    document.documentElement.style.overflow = ''
  })
})

const menuHandler = () => {
  burger.classList.toggle('header-burger--active');
  if (burger.classList.contains('header-burger--active')) {
    menu.classList.add('menu--active');
    body.classList.add('body-locked');
    document.documentElement.style.overflow = 'hidden'
  } else {
    menu.classList.remove('menu--active');
    body.classList.remove('body-locked');
    document.documentElement.style.overflow = ''
  }
}

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  body.classList.remove('body-locked');
  document.documentElement.style.overflow = ''
  burger.classList.remove('header-burger--active');
})
burger.addEventListener('click', menuHandler)

// if (AOS) {
//   AOS.init({
//     once: true
//   })
// }


document.addEventListener("DOMContentLoaded", function() {
  // Get the form by its class
  const form = document.querySelector(".form");

  form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const name = form.querySelector("[name='name']").value.trim();
      const phone = form.querySelector("[name='phoneNumber']").value.trim();
      const email = form.querySelector("[name='email']").value.trim();
      const sum = parseFloat(form.querySelector("[name='sum']").value.trim());
      // Validation
      if (!name || !phone || !email || isNaN(sum)) {
          alertForm("Пожалуйста, заполните все поля.");
          return;
      }
      if (!validateEmail(email)) {
          alertForm("Пожалуйста, введите действительный адрес электронной почты.");
          return;
      }
      if (sum < 50000) {
          alertForm("Сумма должна быть не менее 50,000$.");
          return;
      }

      // Collect data from the form
      const formData = new FormData(form);

      // Convert FormData to JSON
      const data = {};
      formData.forEach((value, key) => {
          data[key] = value;
      });

      try {
          const response = await fetch("https://whatmoneyapi.azurewebsites.net/invest", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
          });

          if (response.ok) {
              // If the response was successful, display a popup
              successForm("Ваша заявка принята!");
              form.reset();
          } else {
              // Handle error
              alertForm("Произошла ошибка при отправке. Пожалуйста, попробуйте снова.");
          }
      } catch (error) {
          console.error("Error:", error);
          alertForm("Произошла ошибка при отправке. Пожалуйста, попробуйте снова.");
      }
  });
});

function alertForm(message) {
  const messageContainer = document.getElementById("formMessage");
  messageContainer.textContent = message;
  // Optionally, hide the message after a few seconds
  setTimeout(() => {
      messageContainer.textContent = '';
  }, 5000);  // 5 seconds
}

function successForm(message) {
  const messageContainer = document.getElementById("formSuccess");
  messageContainer.textContent = message;
  // Optionally, hide the message after a few seconds
  setTimeout(() => {
      messageContainer.textContent = '';
  }, 20000);  // 5 seconds
}


function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

window.addEventListener('scroll', () => {
  console.log(contactTrigger.offsetTop)
  window.pageYOffset > (contactTrigger.offsetTop - (contactTrigger.clientHeight / 2)) ? fixedButton.classList.add('hide-button') : fixedButton.classList.remove('hide-button');
})

if (Swiper) {
  const quotersSlider = new Swiper('.quotes__hidden', {
		effect: 'coverflow',
		slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    pagination: {
      el: '.quotes__slider-pag', // Элемент контейнера буллетов
      clickable: true, // Сделать буллеты кликабельными
    },
  })
}
