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
  document.getElementById("cookies").style.display = "none";
};

const laugh = new Audio("media/laughaudio.wav");

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
  document.getElementById(`prank-${count}`).style.fontSize = "0";
  document.getElementById(`prank-${count}`).style.width = "1px";
  document.getElementById(`prank-${count}`).style.height = "1px";
  count++;
  if (count === 7) {
    count = 1;
    document.getElementById(`prank-${count}`).style.color = "rgb(29, 29, 29)";
    document.getElementById(`prank-${count}`).style.fontSize = "0";
    document.getElementById(`prank-${count}`).style.width = "1px";
    document.getElementById(`prank-${count}`).style.height = "1px";
  } else {
    document.getElementById(`prank-${count}`).style.color = "yellow";
    document.getElementById(`prank-${count}`).style.fontSize = "20px";
    document.getElementById(`prank-${count}`).style.width = "400px";
    document.getElementById(`prank-${count}`).style.height = "auto";
  }
};

let cursorCount = 1;
const changeCursor = () => {
  document.getElementById(`prank-${cursorCount}`).style.cursor = "default";
  cursorCount++;
  if (cursorCount === 7) {
    cursorCount = 1;
    document.getElementById(`prank-${cursorCount}`).style.cursor = "default";
    disableAllButts();
    return;
  }
  document.getElementById(`prank-${cursorCount}`).style.cursor = "pointer";
};

const makeWhite = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.add("white-background");
  });

  const prankElements = document.getElementsByClassName("prank");
  Array.from(prankElements).forEach((prankElement) => {
    prankElement.style.color = "white";
  });
};

const goBack = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.remove("white-background");
  });

  const prankElements = document.getElementsByClassName("prank");
  Array.from(prankElements).forEach((prankElement) => {
    prankElement.style.color = "";
  });
};

const eyesSound = new Audio("media/myEyes.mp3");

const myEyes = () => {
  eyesSound.currentTime = 0;
  eyesSound.play();
};

const ricky = new Audio("media/rickroll.mp3");

const rickRoll = () => {
  ricky.currentTime = 0;
  ricky.play();
};

const rickVid = () => {
  const rickSpot = document.createElement("video");
  rickSpot.setAttribute("src", "media/rickroll.mp4");
  document.getElementById("result").appendChild(rickSpot);
  rickSpot.play();
};

const disableAllButts = () => {
  let buttons = document.querySelectorAll(".prank-class");
  buttons.forEach(function (button) {
    button.disabled = true;
  });
};

buttonCount = 1;
const enableNextButt = () => {
  let nextButt = document.getElementById(`prank-${buttonCount}`);
  nextButt.disabled = false;
  buttonCount++;
};

const showCookies = () => {
  document.getElementById("cookies").style.display = "flex";
};

const selectAllCookies = () => {
  let boxes = document.getElementsByClassName("cookie-box");
  let allCookiesCheckbox = document.getElementById("all-cookies");

  if (allCookiesCheckbox.checked) {
    for (const box of boxes) {
      box.checked = true;
    }
  } else {
    for (const box of boxes) {
      box.checked = false;
    }
  }
};
