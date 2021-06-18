const toTop = document.querySelector(".ir-whatsapp");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 90) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})