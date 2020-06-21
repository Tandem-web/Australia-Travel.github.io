
  if(document.documentElement.clientWidth < 1240 & document.documentElement.clientWidth > 960) {
    var appendNumber = 4;
          var prependNumber = 2;
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
          });
          document.querySelector('.append-slide').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
          });
          document.querySelector('.append-2-slides').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.appendSlide([
              '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
              '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
          ]);
    });

  }else if(document.documentElement.clientWidth <= 960) {
          var appendNumber = 4;
          var prependNumber = 4;
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
          });
          document.querySelector('.append-slide').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
          });
          document.querySelector('.append-2-slides').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.appendSlide([
              '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
              '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
          ]);
    });
  } else if (document.documentElement.clientWidth > 1240) {
          var appendNumber = 4;
          var prependNumber = 4;
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            simulateTouch: false,
          });
      }

