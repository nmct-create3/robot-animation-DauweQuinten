let animationIsPlaying = true;

let tl = gsap.timeline({
  defaults: {
    transformOrigin: 'center bottom',
    duration: 0.75,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

const animationController = function () {
  tl.fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  ).to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '<'
  );
};

const listenToControls = function () {
  const htmlPausetBtn = document.querySelector('.js-pause');
  const htmlBtnFast = document.querySelector('.js-fast');
  const htmlBtnNormal = document.querySelector('.js-normal');
  const htmlBtnSlow = document.querySelector('.js-slow');

  htmlPausetBtn.addEventListener('click', function () {
    if (animationIsPlaying) {
      animationIsPlaying = false;
      gsap.globalTimeline.pause();
      this.classList.add('is-paused');
    } else {
      animationIsPlaying = true;
      gsap.globalTimeline.play();
      this.classList.remove('is-paused');
    }
  });

  // Speed control
  htmlBtnFast.onclick = () => tl.timeScale(2);
  htmlBtnNormal.onclick = () => tl.timeScale(1);
  htmlBtnSlow.onclick = () => tl.timeScale(0.5);
};

addEventListener('DOMContentLoaded', function () {
  console.info('DOM content loaded ✅');
  animationController();
  listenToControls();
});
