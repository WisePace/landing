document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter, index) => {
      counter.innerText = '2';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      setTimeout(updateCounter, index * 500);
    });
  });