const getJoke = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((resBody) => printJoke(resBody));
};

const printJoke = (data) => {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  console.log(data.type);

  setup.innerText = data.setup;
  setTimeout(() => {
    punchline.innerText = data.punchline;
  }, 3500);
};

const getImg = () => {
  fetch("https://api.pexels.com/v1/search?query=peoplelaughing&per_page=70", {
    headers: {
      Authorization: "QNNl5HtrmpJHjKhORebWETDoOeznpRfhzRoKAPa2HzLw5Y1rBMXUQMVv",
    },
  })
    .then((res) => res.json())
    .then((resBody) => printImg(resBody));
};

const printImg = (data) => {
  const laughter = document.createElement("img");
  let num = Math.floor(Math.random() * 70);
  console.log(num);
  //   console.log(data.photos[num].src.original);
  setTimeout(() => {
    laughter.setAttribute("src", data.photos[num].src.medium);
  }, 3750);

  document.getElementById("result").appendChild(laughter);
};

const clearImg = () => {
  document.getElementById("result").innerHTML = "";
  document.getElementById("punchline").innerText = "";
};
