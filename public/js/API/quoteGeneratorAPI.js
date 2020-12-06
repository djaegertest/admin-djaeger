document.addEventListener("DOMContentLoaded", () => {
  const generateQuote = () => {
    let url = new URL("https://api.quotable.io/random"),
      params = {
        maxLength: 100
      };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then(function (data) {
        return data.json({
          minLength: 10,
          maxLength: 11
        });
      })
      .then(function (data) {
        document.querySelector("#quote").innerHTML = data.content;
        document.querySelector("#author").innerHTML = "- " + data.author;
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  generateQuote();
});
