document.addEventListener("DOMContentLoaded", () => {
  let inputWrappers = document.querySelectorAll(".input-wrapper");
  for (let inputWrapper of inputWrappers) {
    inputWrapper.firstElementChild.addEventListener("focus", () => {
      inputWrapper.classList.add("focused");
    });
    inputWrapper.firstElementChild.addEventListener("blur", () => {
      if (inputWrapper.firstElementChild.value === "") {
        inputWrapper.classList.remove("focused");
      }
    });
  }
});
