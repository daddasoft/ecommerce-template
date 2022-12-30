let index = 0;
const sliderNumber = 5;
let sliderHeight = 300;
let perSlide = sliderHeight / sliderNumber;
let sliderAmount = 60;
setInterval(() => {
  const slider = document.querySelector(".slider");
  const fill = document.querySelector(".fill");
  if (index > 4) {
    index = 0;
    sliderAmount = 60;
    return;
  }
  gsap.to(slider, {
    x: `-${index * 100}%`,

    ease: "elastic",
    duration: 2,
  });
  gsap.to(fill, {
    height: `${sliderAmount}px`,
    ease: "elastic",
    duration: 2,
  });
  index++;
  sliderAmount += perSlide;
}, 4000);

function returnFirstElementFromArray() { }

new Splide("#splide", {
  fixedWidth: "272px",
  interval: 1000,
  type: "loop",
  autoplay: true,
  focus: "center",
  gap: "20px",
  pagination: false,
  easingFunc: (t) => number = t => 1 - Math.pow(1 - t, 4)

}).mount();
