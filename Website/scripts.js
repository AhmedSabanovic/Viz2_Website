document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
    });
  
    document.querySelector('.btn').addEventListener('click', (e) => {
      e.preventDefault();
      const aboutSection = document.querySelector('#about');
      const headerHeight = document.querySelector('header').offsetHeight;
      const extraOffset = 100; 
      const offsetPosition = aboutSection.offsetTop - headerHeight - extraOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
  
      aboutSection.classList.add('animate-fast');
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      const headerHeight = header.offsetHeight;
      if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  });