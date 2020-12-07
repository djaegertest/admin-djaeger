document.addEventListener("DOMContentLoaded", () => {
  let url = new URL("https://api.quotable.io/random"),
    params = {
      maxLength: 100
    };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").innerHTML = "- " + data.author;
    })
    .catch((err) => {
      console.log(err);
    });
});
