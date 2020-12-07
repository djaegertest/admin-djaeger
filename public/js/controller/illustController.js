document.addEventListener("DOMContentLoaded", () => {
  let illust = document.querySelector(".illust"),
    index = Math.floor(Math.random() * 3) + 1;
  illust.src = "/public/storages/images/illust" + index + ".png";
});
