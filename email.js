

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




function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_mhlv03l",
        "template_tcjaere",
        event.target,
        "user_I3mTYfDDoKcfMkFaN"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on dryldeogracias@gmail.com"
        );
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
  

  