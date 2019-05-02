$(document).ready(function () {
    // Preloader 
    $(window).on('load', function() {
        $("#status_1").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
    });
  
    //animation scroll js
    var html_body = $('html, body');
   
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
   
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
            if (target.length) {
                $(target).addClass('padding-top');
                html_body.animate({
                    scrollTop: target.offset().top-0
                }, 1500);
   
                return false;
            }
        }
    });

    // active navbar
    var sections = $('section');
    var nav = $('nav');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height;
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('nav-active');
                sections.removeClass('nav-active');

                $(this).addClass('nav-active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-active');
            }

            if (cur_pos === 0) {
                nav.find('a').removeClass('nav-active');
                sections.removeClass('nav-active');

                $('#home').addClass('nav-active');
                nav.find('a[href="#home"]').addClass('nav-active');
            }
        });
    });

    // Navbar
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }

        if(position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }

        if(position >= 4300) {
          $('.card-1').addClass('moveFromLeft');
          $('.card-2').addClass('moveFromBottom');
          $('.card-3').addClass('moveFromRight');
        } else {
          $('.card-1').removeClass('moveFromLeft');
          $('.card-2').removeClass('moveFromBottom');
          $('.card-3').removeClass('moveFromRight');
        }
    });
    
    // include venobox
    $('.venobox').venobox(); 
    
    // gallery 
    $('.gallery-list-item').click(function() {
      let value = $(this).attr('data-filter');

      if(value === 'all') {
        $('.filter').show(300);
      } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
      }

      $(this).addClass('active-item').siblings().removeClass('active-item');
    });
});

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ddd"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#888888"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#777",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);