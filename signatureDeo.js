const swiperr = new Swiper('.swiper', { 

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
      },
  
  });

 

  function getRandomBetween(min, max) {
    return (Math.random() * (max - min)) + min
  }
  
  function createCloudGradient() {
    let res = []
    
    for (let i = 0; i < 8; i++) {
      let width = getRandomBetween(10, 20)
      let height = getRandomBetween(5, 10)
      let cx = getRandomBetween(width, 100 - width)
      let cy = getRandomBetween(height, 100 - height)
      let transparency = getRandomBetween(50, 90)
      res.push(`radial-gradient(${width}% ${height}% at ${cx}% ${cy}%, hsla(0deg, 0%, 100%, ${transparency}%) 99%, transparent)`)
    }
    
    return res.join(',')
  }
  
  document.querySelectorAll('.cloud-layer').forEach(layer => layer.style.backgroundImage = createCloudGradient())