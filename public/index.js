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

const clear = () => {
  document.getElementById("result").innerHTML = "";
  document.getElementById("punchline").innerText = "";
  document.getElementById("setup").innerText = "";
};

const laugh = new Audio("laughaudio.wav");

const laughTrack = () => {
  setTimeout(() => {
    laugh.currentTime = 0;
    laugh.play();
  }, 3750);
};
// need to figure out back to back activations not laughing twice

let count = 1;
const changeColors = () => {
  document.getElementById(`prank-${count}`).style.color = "rgb(29, 29, 29)";
  count++;
  if (count === 7) {
    count = 1;
    document.getElementById(`prank-${count}`).style.color = "cornsilk";
  } else {
    document.getElementById(`prank-${count}`).style.color = "yellow";
  }
};

let cursorCount = 1;
const changeCursor = () => {
  document.getElementById(`prank-${cursorCount}`).style.cursor = "default";
  cursorCount++;
  if (cursorCount === 7) {
    cursorCount = 1;
  }
  document.getElementById(`prank-${cursorCount}`).style.cursor = "pointer";
};

const makeWhite = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.add("white-background");
  });

  const prankElements = document.getElementsByClassName('prank');
  Array.from(prankElements).forEach((prankElement) => {
    prankElement.style.color = 'white';
  });
};

const goBack = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.remove("white-background");
  });

  const prankElements = document.getElementsByClassName('prank');
  Array.from(prankElements).forEach((prankElement) => {
    prankElement.style.color = '';
  });
};

const eyesSound = new Audio('myEyes.mp3')

const myEyes = (() => {
  eyesSound.currentTime = 0
  eyesSound.play();
})

const ricky = new Audio('rickroll.mp3')

const rickRoll = (() => {
  ricky.currentTime = 0
  ricky.play();
})
