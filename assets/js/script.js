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