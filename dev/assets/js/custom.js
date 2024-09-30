const swiper = new Swiper('.swiper', {
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

  const cat = {
    name: "Klaw",
    age: 1,
    color: "white",
    parents: {
      mother: 'Snow',
      father: 'Brave'
    }
  };
  
  const  fox = {
    name: "Tale",
    age: 2,
    color: "orange",
    parents: {
      mother: 'Ginger',
      father: 'Wind'
    }
  };
  
  const snake = {
    name: "Tooth",
    age: 3,
    color: "green",
    parents: {
      mother: 'Long',
      father: 'Dread'
    }
  };
  
  const logBeast = function(beast) {
    console.log( beast.name, beast.color, beast.age, beast.parents);
  }

  logBeast(cat);
  logBeast(fox);
  logBeast(snake)

  
