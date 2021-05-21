var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  freeMode: true,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
});

// How Work Accordion Tabs
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// Navbar & Header Section
TweenMax.from(".navbar", {
  delay: 0.3,
  opacity: 0,
  y : -100
});
TweenMax.from("header h1", {
  delay : 0.3,
  opacity : 0,
  x : -100
});
TweenMax.from("header p", {
  delay : 0.4,
  opacity : 0,
  x : -100
});
TweenMax.from("header a", {
  delay : 0.5,
  opacity : 0,
  x : -100
});
TweenMax.from("header img", {
  delay : 0.5,
  opacity : 0,
  x : 100
});
// Scroll Trigger //Sponsors
let sponsors = gsap.timeline({
  scrollTrigger : {
    trigger : '.sponsor',
    start : 'top center'
  }
})
sponsors.from('.sponsor .card', {
  x: 100,
  opacity : 0,
  duration : 0.2
});
// How-Work
let how_work = gsap.timeline({
  scrollTrigger : {
    trigger : '.how-work',
    start : 'top center'
  }
})
how_work.from('.how-work h2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
how_work.from('.how-work p', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
how_work.from('.how-work img', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
how_work.from('.how-work .card', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
// about
let about = gsap.timeline({
  scrollTrigger : {
    trigger : '.about',
    start : 'top center'
  }
})
about.from('.about h2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
about.from('.about strong', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
about.from('.about p', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
about.from('.about a', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
about.from('.about img', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
// functions
let functions = gsap.timeline({
  scrollTrigger : {
    trigger : '.functions',
    start : 'top center'
  }
})
functions.from('.functions h2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
functions.from('.functions p', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
functions.from('.functions img', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
functions.from('.functions .row .col-sm-12 .card-1', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});
functions.from('.functions .row .col-sm-12 .card-2', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});
functions.from('.functions .row .col-sm-12 .card-3', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});
functions.from('.functions .row .col-sm-12 .card-4', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});
functions.from('.functions .row .col-sm-12 .card-5', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});
functions.from('.functions .row .col-sm-12 .card-6', {
  y : 100,
  opacity : 0,
  duration : 0.2,
});

// latest_blog
let latest_blog = gsap.timeline({
  scrollTrigger : {
    trigger : '.latest-blog',
    start : 'top center'
  }
})
latest_blog.from('.latest-blog h2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
latest_blog.from('.latest-blog .card-1', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
latest_blog.from('.latest-blog .card-2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
latest_blog.from('.latest-blog .card-3', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
// parallax
let parallax = gsap.timeline({
  scrollTrigger : {
    trigger : '.parallax',
    start : 'top center'
  }
})
parallax.from('.parallax h2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
parallax.from('.parallax p', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
parallax.from('.parallax .a-1', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
parallax.from('.parallax .a-2', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
parallax.from('.parallax .a-3', {
  y : 100,
  opacity : 0,
  duration : 0.2
});
parallax.from('.parallax .a-4', {
  y : 100,
  opacity : 0,
  duration : 0.2
});