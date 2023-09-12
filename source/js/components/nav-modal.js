const modalNav = document.querySelector(".mobile-nav-modal");
const btnsOpenModalNav = document.querySelectorAll(".btn-open-nav");
const btnCloseModalNav = document.querySelector(".btn-close-nav");
const navOptions = document.querySelectorAll(".mobile-nav-option");
const currencySectionPosition = document.querySelector(".currency_form");
const cryptoCurrencySectionPosition = document.querySelector(
  ".cryptocurrency_container"
);
const previewSectionPosition = document.querySelector(".preview_container");
const contactsSectionPosition = document.querySelector(".contacts_container");
// const telegramBut = document.getElementById("get_in_touch_on_telegram_submit");

const openModalNav = function (event) {
  event.preventDefault();
  modalNav.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  btnsOpenModalNav[0].classList.add("hidden");
  btnCloseModalNav.classList.remove("hidden");
  // telegramBut.classList.add("hidden");
};

const closeModalNav = function () {
  modalNav.classList.add("hidden");
  // telegramBut.classList.remove("hidden");
  document.body.style.overflow = "";
  btnsOpenModalNav[0].classList.remove("hidden");
  btnCloseModalNav.classList.add("hidden");
};

const optionClick = function (event, i) {
  const targetId = event.target.id;
  closeModalNav();
  if (targetId === "1opt") {
    currencySectionPosition.scrollIntoView();
  } else if (targetId === "2opt") {
    cryptoCurrencySectionPosition.scrollIntoView();
    window.moveBy(330, 0);
  } else if (targetId === "3opt") {
    previewSectionPosition.scrollIntoView();
  } else if (targetId === "4opt") {
    contactsSectionPosition.scrollIntoView();
  }
};

for (let i = 0; i < btnsOpenModalNav.length; i++) {
  btnsOpenModalNav[i].addEventListener("click", openModalNav);
}

for (let i = 0; i < navOptions.length; i++) {
  navOptions[i].addEventListener("click", optionClick);
}

btnCloseModalNav.addEventListener("click", closeModalNav);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalNav();
  }
});

const contactTrigger = document.querySelector('.contacts_container');
const fixedButton  = document.querySelector('#get_in_touch_on_telegram_submit');


if (innerWidth < 600) {
  window.addEventListener('scroll', () => {
    console.log(    contactTrigger.offsetTop)
    window.pageYOffset > (contactTrigger.offsetTop - (contactTrigger.clientHeight / 2)) ? fixedButton.classList.add('hide-button') : fixedButton.classList.remove('hide-button');
  })
  console.log('xleb')  
}