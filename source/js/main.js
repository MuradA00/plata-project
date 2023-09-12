import './_vendor';
import './_components';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header-burger');
const closeMenu = document.querySelector('.menu-close');
const body = document.body;

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

// if (AOS) {
//   AOS.init({
//     once: true
//   })
// }


if (Swiper) {
  const VIDEO_SRC_MAP = {
    "1-video": "../img/video/vadimlatypof.mp4",
    "2-video": "../img/video/paul3344.mp4",
    "3-video": "../img/video/ruslan_nigmatullin.mp4",
    "4-video": "../img/video/cometvic.mp4",
    "5-video": "../img/video/mixollya28.mp4",
    "6-video": "../img/video/wall_str_cat.mp4",
  };

  const VIDEO_DATA_MAP = {
    "1-video": {
      name: "Vadim Latypov",
      instagramm: "vadimlatypof",
      link: "https://www.instagram.com/vadimlatypof/",
    },
    "2-video": {
      name: "Paul Erl",
      instagramm: "paul3344",
      link: "https://www.instagram.com/paul3344/",
    },
    "3-video": {
      name: "Ruslan Nigmatullin",
      instagramm: "ruslan_nigmatullin",
      link: "https://instagram.com/ruslan_nigmatullin",
    },
    "4-video": {
      name: "Viktoriia Hrab",
      instagramm: "cometvic",
      link: "https://www.instagram.com/cometvic",
    },
    "5-video": {
      name: "Olya",
      instagramm: "mixollya28",
      link: "https://www.instagram.com/mixollya28",
    },
    "6-video": {
      name: "Irina Sivak",
      instagramm: "wall_street_cat",
      link: "https://www.instagram.com/wall_street_cat/",
    },
  };

  const btnsOpenVideoModal = document.querySelectorAll(
    ".preview_container-video-btn"
  );
  const videoModalBox = document.querySelector(".modal-video-box");
  const videoOverlay = document.querySelector(".video-overlay");
  const videoModal = document.querySelector(".modal-video-play");
  const videoViewName = document.querySelector(".modal-video-name.mvideo");
  const videoViewInst = document.querySelector(".modal-video-inst.mvideo");

  const instClickHandler = (event) => {
    window.open(
      `${VIDEO_DATA_MAP[event.currentTarget.dataset.type].link}`,
      "_blank",
      "fullscreen=yes"
    );
    videoViewInst.removeEventListener("click", instClickHandler);
  };

  const openVideoModal = (event) => {
    const isMobile = window.innerWidth <= 767;
    event.preventDefault();
    videoModal.children[0].src = VIDEO_SRC_MAP[event.currentTarget.dataset.type];
    videoViewName.textContent =
      VIDEO_DATA_MAP[event.currentTarget.dataset.type].name;
    videoViewInst.children[2].href =
      VIDEO_DATA_MAP[event.currentTarget.dataset.type].link;
    videoViewInst.children[2].textContent =
      VIDEO_DATA_MAP[event.currentTarget.dataset.type].instagramm;
    videoModal.load();
    videoModal.play();
    isMobile && videoViewInst.addEventListener("click", instClickHandler);
    videoModalBox.classList.remove("hidden");
    videoOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = (e) => {
    if (!e.target.classList.contains("mvideo")) {
      videoModalBox.classList.add("hidden");
      videoOverlay.classList.add("hidden");
      document.body.style.overflow = "";
      videoModal.pause();
      videoViewInst.removeEventListener("click", instClickHandler);
    }
  };

  for (let i = 0; i < btnsOpenVideoModal.length; i++) {
    btnsOpenVideoModal[i].addEventListener("click", openVideoModal);
  }

  videoOverlay.addEventListener("click", closeVideoModal);

  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    loop: "true",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 60,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },
    parallax: true,

    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiperDesktop = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 1,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: -320,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// import './components/forms';


