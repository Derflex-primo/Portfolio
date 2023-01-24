// template_tcjaere
// service_mhlv03l
// I3mTYfDDoKcfMkFaN


 

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


  // TOGLLE RESUME 12am

  let isModalOpen = false;
  let contrastToggle = false;


  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
  

 