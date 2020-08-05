let swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  mousewheel: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  setWrapperSize: true,
  //"slide", "fade", "cube", "coverflow" or "flip"
  effect: 'slide'
});

let animate = (selector, time) => {
  let element = document.querySelectorAll(selector),
    count = 0;

  element.forEach((e) => {
    e.classList.add("state");
    e.style.animationDelay = `${count}s`;
    count += 0.2;
  });

  setTimeout(() => {
    element.forEach((e) => {
      e.classList.add("move");
    });
  }, time);
};

animate('main', 500)
animate('.swiper-container', 1000)
animate('article > *', 1500)