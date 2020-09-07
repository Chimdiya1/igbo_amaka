const header = document.querySelector('#header');
const Screen1 = document.querySelector('#screen1');
const h2 = document.querySelector('#h2');
const h5 = document.querySelector('#h5');
const getIt = document.querySelector('#get-it');
const featuresContentTitle = document.querySelector('.features h4');
const screen2 = document.querySelector('#screen2');
const featuresList = document.querySelectorAll('.features__list__item');

const bannerTL = gsap.timeline();
//





bannerTL.from([h2, h5, getIt], {
  duration: 0.5,
  x:-1000,
  ease: 'Power3.inOut',
  stagger: {
    amount: 0.25,
  },
})
.from(header, {
  y: 16,
  opacity: 0,
  duration: 0.5,
  ease: 'power3.inOut',
})
.from(Screen1, {
    y: 0,
    opacity:0,
  duration: 0.7,
  ease: 'power3.inOut',
});

const featuresTL = gsap.timeline();

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
    delay: -0.1,
    opacity: 0,
      y: 40,
    x:30,
    duration: 0.6,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  });

  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: '#get-it',
    triggerHook: 0,
    reverse: false,
  })

    .setTween(featuresTL)
    .addTo(controller);