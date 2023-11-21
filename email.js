let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}



function sendMailAndShowOverlay() {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  // Show loading overlay
  loading.classList += " modal__overlay--visible";

  // Send mail using emailjs
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_uol5twe";
  const templateID = "template_tcjaere";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Email sending is complete, remove loading overlay
      loading.classList.remove("modal__overlay--visible");

      // Show success overlay
      success.classList += " modal__overlay--visible";

      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      console.log(res);
    })
    .catch(() => {
      // Remove loading overlay in case of an error
      loading.classList.remove("modal__overlay--visible");

      // Handle error (you might want to show an error overlay or alert)
      alert("The email service is temporarily unavailable. Please try again later.");
    });
}





let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}


const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;

    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}


