

function contact(event) {
  event.preventDefault();
  
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  emailjs.sendForm(
    "service_ucmw98d",
    "template_tcjaere",
    event.target,
    "I3mTYfDDoKcfMkFaN"
  )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on dryldeogracias@gmail.com"
      );
    });
}



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