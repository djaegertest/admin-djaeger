document.addEventListener("DOMContentLoaded", () => {
  let signInModalOpen = document.querySelector("#sign-in-modal-open");
  let signInModalClose = document.querySelector("#sign-in-modal-close");
  let signInModal = document.querySelector("#sign-in-modal");
  let overlay = document.querySelector("#overlay");
  const closeModal = () => {
    signInModal.classList.add("translate-y-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 750);
  };
  signInModalOpen.addEventListener("click", () => {
    signInModal.classList.remove("translate-y-full");
    overlay.classList.remove("hidden");
  });
  signInModalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
});
