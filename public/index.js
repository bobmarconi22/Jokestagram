const getJoke = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((resBody) => printJoke(resBody));
};

const printJoke = (data) => {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");

  setup.innerText = data.setup;
  punchline.innerText = data.punchline;
};

// document.addEventListener("click", function (event) {
//   if (!event.target.matches("#button")) return;
//   fetch("https://official-joke-api.appspot.com/random_joke")
//     .then((response) => response.json())
//     .then((data) => sayJoke(data))
//     .catch(() => sayError());
// });

// function sayJoke(data) {
//   const setup = document.getElementById("setup");
//   const punchline = document.getElementById("punchline");
//   const error = document.getElementById("error");
// console.log(data)
//   error.innerText = "";
//   setup.innerText = data.setup;
//   punchline.innerText = data.punchline;
// }

// function sayError() {
//   const error = document.getElementById("error");
//   error.innerText = "Whoops, something went wrong. Please try again later!";
// }
