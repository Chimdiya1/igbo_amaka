const header = document.querySelector('#header');
const Screen1 = document.querySelector('#screen1');
const h2 = document.querySelector('#h2');
const h5 = document.querySelector('#h5');
const getIt = document.querySelector('#get-it');
const featuresContentTitle = document.querySelector('.features h4');
const screen2 = document.querySelector('#screen2');
const featuresList = document.querySelectorAll('.features__list__item');
const screenshots = document.querySelectorAll('.show--img');

const bannerTL = gsap.timeline();
//

bannerTL
  .from([h2, h5, getIt], {
    duration: 0.5,
    x: -1000,
    ease: 'Power3.inOut',
    stagger: {
      amount: 0.25,
    },
  })
  .from(Screen1, {
    y: 0,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.inOut',
  });

const featuresTL = gsap.timeline();
const imagesTL = gsap.timeline();

featuresTL
  .from([featuresContentTitle, screen2], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  })
  .from(featuresList, {
    delay: -0.2,
    opacity: 0,
    y: 40,
    x: 40,
    duration: 0.4,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  });

imagesTL.from(screenshots, {
  opacity: 0,
  x: 80,
  duration: 0.9,
  ease: 'power3.out',
  stagger: {
    amount: 0.2,
  },
});

let offset = getWidth() >= 1108 ? 1200 : 1600;

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '#get-it',
  triggerHook: 0,
  reverse: false,
})
  .setTween(featuresTL)
  .addTo(controller);
const scene2 = new ScrollMagic.Scene({
  offset: offset,
  reverse: false,
})
  .addIndicators()
  .setTween(imagesTL)
  .addTo(controller);

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
