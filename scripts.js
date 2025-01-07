document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn').addEventListener('click', (e) => {
      e.preventDefault();
      const aboutSection = document.querySelector('#Description');
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
