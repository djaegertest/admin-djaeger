document.addEventListener("DOMContentLoaded", () => {
  let sidebarTogglerLarge = document.getElementById("sidebar-toggler-lg"),
    sidebarTogglerSmall = document.getElementById("sidebar-toggler-sm"),
    mainLayout = document.getElementById("main-layout");

  sidebarTogglerLarge.addEventListener("click", () => {
    mainLayout.classList.toggle("w-full");
    mainLayout.classList.toggle("is-open");
  });

  sidebarTogglerSmall.addEventListener("click", () => {
    mainLayout.classList.toggle("translate-x-1/2");
    mainLayout.classList.toggle("rounded-3xl");
  });
});
