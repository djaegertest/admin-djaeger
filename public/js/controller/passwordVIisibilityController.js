document.addEventListener("DOMContentLoaded", () => {
  let visibilityToggler = document.querySelector(".visibility-toggler");
  let visible = false;
  visibilityToggler.addEventListener("click", () => {
    if (!visible) {
      visibilityToggler.previousElementSibling.type = "text";
      visibilityToggler.firstElementChild.classList.add("fa-eye-slash");
      visibilityToggler.firstElementChild.classList.remove("fa-eye");
      visible = true;
    } else {
      visibilityToggler.previousElementSibling.type = "password";
      visibilityToggler.firstElementChild.classList.remove("fa-eye-slash");
      visibilityToggler.firstElementChild.classList.add("fa-eye");
      visible = false;
    }
  });
});
