document.addEventListener("DOMContentLoaded", () => {
  let visibilityToggler = document.querySelector(".visibility-toggler"),
    inputPassword = visibilityToggler.previousElementSibling,
    visible = false,
    addValue,
    removeValue;
  const toggleIcon = (add, remove) => {
    visibilityToggler.firstElementChild.classList.remove(remove);
    visibilityToggler.firstElementChild.classList.add(add);
  };
  visibilityToggler.addEventListener("click", () => {
    inputPassword.type = !visible ? "text" : "password";
    addValue = !visible ? "fa-eye-slash" : "fa-eye";
    removeValue = !visible ? "fa-eye" : "fa-eye-slash";
    toggleIcon(addValue, removeValue);
    visible = !visible ? true : false;
  });
});
