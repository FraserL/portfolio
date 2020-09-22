
      document.addEventListener( 'DOMContentLoaded', function () {

        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

        if (width <= 425 && width > 0) {

          new Splide( '.splide', {
            type: 'loop',
            perPage: 1.5,
            gap: '20vw',
            fixedWidth: '70vw',
            focus: 'center',
            updateOnMove: true,
            drag: true,
            arrows: false,
            pagination: true
          } ).mount();

        }

        else if (width <= 768 && width > 425) {

          new Splide( '.splide', {
            type: 'loop',
            perPage: 1.5,
            gap: '20vw',
            fixedWidth: '50vw',
            focus: 'center',
            updateOnMove: true,
            drag: true,
            arrows: false,
            pagination: true
          } ).mount();

        }

        else if (width > 768) {
          new Splide( '.splide', {
            type: 'loop',
            perPage: 2,
            gap: '8vw',
            fixedWidth: '20vw',
            focus: 'center',
            updateOnMove: true,
            drag: true,
            arrows: false,
            pagination: true
          } ).mount();
        }

    
      } );
  
  
  
  

  
  




