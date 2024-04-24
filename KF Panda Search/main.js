// KF Panda Search

// HTML Variables
var charName = document.getElementById("charName");
var charQuote = document.getElementById("charQuote");
var charImg = document.getElementById("charImg");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", theme);

// Functions
function theme() {
  var theme = document.getElementById("theme-in").value;
  var random = (Math.random() * 255).toFixed(0);
  var random2 = (Math.random() * 255).toFixed(0);
  var random3 = (Math.random() * 255).toFixed(0);
  var random4 = (Math.random() * 255).toFixed(0);
  var random5 = (Math.random() * 255).toFixed(0);
  var random6 = (Math.random() * 255).toFixed(0);

  if (theme === "light" || theme === "white" || theme === "") {
    document.getElementById("body").style.background = "rgba(255,255,255,0.7)";
    document.getElementById("html").style.color = "rgb(0, 0, 0)";
    document.getElementById("div").style.color = "rgb(0, 0, 0)";
    document.getElementById("div").style.background = "rgba(72, 116, 63, 0.7)";
  } else if (theme === "dark" || theme === "black") {
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("html").style.color = "rgb(255, 255, 255)";
    document.getElementById("div").style.color = "rgb(255, 255, 255)";
    document.getElementById("div").style.background = "rgb(0, 0, 0)";
  } else if (theme === "random") {
    document.getElementById("body").style.color =
      "rgba(" + random + ", " + random2 + ", " + random3 + ")";
    document.getElementById("body").style.background =
      "rgba(" + random4 + ", " + random5 + ", " + random6 + ")";
    document.getElementById("div").style.color =
      "rgba(" + random + ", " + random2 + ", " + random3 + ")";
    document.getElementById("div").style.background =
      "rgba(" +
      (random4 - 20) +
      ", " +
      (random5 - 20) +
      ", " +
      (random6 - 20) +
      ")";
  }

  document.getElementById("theme-in").value = "";
}

function btnClicked() {
  // Input
  let name = document.getElementById("charIn").value.toLowerCase();

  // If statement
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charName.innerHTML = "Po";
    charQuote.innerHTML = '"Buddy, I am the Dragon Warrior!"';
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charName.innerHTML = "Tigress";
    charQuote.innerHTML = '"That was hardcore!"';
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charName.innerHTML = "Mantis";
    charQuote.innerHTML = '"Fear the bug!"';
    charImg.src = "img/mantis.png";
  } else if (name === "crane") {
    charName.innerHTML = "Crane";
    charQuote.innerHTML = '"Wings of Justice!"';
    charImg.src = "img/crane.png";
  } else if (name === "monkey") {
    charName.innerHTML = "Monkey";
    charQuote.innerHTML = '"We should hang out!"';
    charImg.src = "img/monkey.png";
  } else if (name === "viper") {
    charName.innerHTML = "Viper";
    charQuote.innerHTML = `"I don't need to bite to fight!"`;
    charImg.src = "img/viper.png";
  } else if (name === "wolf" || name === "boss wolf") {
    charName.innerHTML = "Boss Wolf";
    charQuote.innerHTML = '"If you mess with the wolf, you get the fangs."';
    charImg.src = "img/boss-wolf.png";
  } else if (name === "croc" || name === "master croc") {
    charName.innerHTML = "Master Croc";
    charQuote.innerHTML =
      '"And then you will be stopped by the unstoppable weapon!"';
    charImg.src = "img/croc.png";
  } else if (name === "kai" || name === "master kai") {
    charName.innerHTML = "Master Kai";
    charQuote.innerHTML = '"I will have his chi."';
    charImg.src = "img/kai.png";
  } else if (name === "ping" || name === "mr. ping") {
    charName.innerHTML = "Mr. Ping";
    charQuote.innerHTML = '"I love you too, son."';
    charImg.src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charName.innerHTML = "Master Oogway";
    charQuote.innerHTML =
      '"You may wish for an apple, or an orange, but you will get a peach."';
    charImg.src = "img/oogway.png";
  } else if (name === "shen" || name === "lord shen" || name === "peacock") {
    charName.innerHTML = "Lord Shen";
    charQuote.innerHTML = '"Happiness... must be taken. And I will take mine."';
    charImg.src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    charName.innerHTML = "Master Shifu";
    charQuote.innerHTML = '"Inner peace... Inner peace..."';
    charImg.src = "img/shifu.png";
  } else if (name === "goat" || name === "soothsayer") {
    charName.innerHTML = "Soothsayer";
    charQuote.innerHTML =
      '"Even with his poor eyesight, he can see the truth. Why is it that you cannot?"';
    charImg.src = "img/soothsayer.png";
  } else if (name === "ox" || name === "master ox" || name === "storming ox") {
    charName.innerHTML = "Storming Ox";
    charQuote.innerHTML = `"It's time to surrender, panda."`;
    charImg.src = "img/storming-ox.png";
  } else if (
    name === "tai" ||
    name === "master tai lung" ||
    name === "tai lung" ||
    name === "lung"
  ) {
    charName.innerHTML = "Master Tai Lung";
    charQuote.innerHTML = '"I have come home, Master."';
    charImg.src = "img/tai-lung.png";
  } else {
    charName.innerHTML = "?";
    charQuote.innerHTML = "?";
    charImg.src = "img/question-mark.png";
  }
  document.getElementById("charIn").value = "";
}
