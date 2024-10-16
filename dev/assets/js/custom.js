const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
      delay: 6000,
    },
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  const swiperAdv = new Swiper('.swiper-adv', {
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },

    breakpoints:{
      992:{
        spaceBetween: 0,
        loop: false,
        slidesPerGroup: 8,
        simulateTouch: false,
        pagination: {
          enabled: false,
          el: '.swiper-pagination',
        }
      }
    }
 
  });

  const swiperDelivery = new Swiper('.swiper-del', {
    speed: 400,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          enabled: true,
        },
      },
      861: {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },
        
        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      },
      1252: {
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',         
        },

        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      }
      } 
    }      
  }); 

  const swiperServices = new Swiper('.serv-swiper', {
    speed: 400,
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next-serv',
      prevEl: '.swiper-button-prev-serv',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-serv',
          prevEl: '.swiper-button-prev-serv',         
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          enabled: true,
        },
      },
      861: {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-serv',
          prevEl: '.swiper-button-prev-serv',         
        },
        
        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      },
      1252: {
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
          enabled: true, 
          nextEl: '.swiper-button-next-serv',
          prevEl: '.swiper-button-prev-serv',         
        },

        pagination: {
        enabled: false,
        el: '.swiper-pagination',
      }
      } 
    }      
  }); 
  