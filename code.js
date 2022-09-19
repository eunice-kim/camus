var camus = document.getElementById("camus-title");
var strangerTitle = document.getElementById("stranger-title");
var happyDeathTitle = document.getElementById("happy-death-title");
var fallTitle = document.getElementById("fall-title");
var exileTitle = document.getElementById("exile-title");
var sisyphusTitle = document.getElementById("sisyphus-title");

var strangerPage = document.getElementById("stranger-page");
var strangerExcerpt = document.getElementById("stranger-excerpt");
var happyDeathPage = document.getElementById("happy-death-page");
var happyDeathExcerpt = document.getElementById("happy-death-excerpt");
var fallPage = document.getElementById("fall-page");
var fallExcerpt = document.getElementById("fall-excerpt");
var exilePage = document.getElementById("exile-page");
var exileExcerpt = document.getElementById("exile-excerpt");
var sisyphusPage = document.getElementById("sisyphus-page");
var sisyphusExcerpt = document.getElementById("sisyphus-excerpt");

function showNextTitle() {
  if (camus.classList.contains("show")) {
    camus.classList.remove("show");
    strangerTitle.classList.add("show");
  }
  else if (strangerTitle.classList.contains("show")) {
    strangerTitle.classList.remove("show");
    happyDeathTitle.classList.add("show");
  }
  else if (happyDeathTitle.classList.contains("show")) {
    happyDeathTitle.classList.remove("show");
    fallTitle.classList.add("show");
  }
  else if (fallTitle.classList.contains("show")) {
    fallTitle.classList.remove("show");
    exileTitle.classList.add("show");
  }
  else if (exileTitle.classList.contains("show")) {
    exileTitle.classList.remove("show");
    sisyphusTitle.classList.add("show");
  }
  else {
    sisyphusTitle.classList.remove("show");
    strangerTitle.classList.add("show");
  }
}

function showStrangerPage() {
  strangerPage.style.display="block";
}

function hideStrangerPage() {
  strangerPage.style.display="none";
}

function showTheStrangerExcerpt() {
  strangerExcerpt.style.display="block";
}

function hideTheStrangerExcerpt() {
  strangerExcerpt.style.display="none";
}

function showHappyDeathPage() {
  happyDeathPage.style.display="block";
}

function hideHappyDeathPage() {
  happyDeathPage.style.display="none";
}

function showHappyDeathExcerpt() {
  happyDeathExcerpt.style.display="block";
}

function hideHappyDeathExcerpt() {
  happyDeathExcerpt.style.display="none";
}

function showFallPage() {
  fallPage.style.display="block";
}

function hideFallPage() {
  fallPage.style.display="none";
}

function showFallExcerpt() {
  fallExcerpt.style.display="block";
}

function hideFallExcerpt() {
  fallExcerpt.style.display="none";
}

function showExilePage() {
  exilePage.style.display="block";
}

function hideExilePage() {
  exilePage.style.display="none";
}

function showExileExcerpt() {
  exileExcerpt.style.display="block";
}

function hideExileExcerpt() {
  exileExcerpt.style.display="none";
}

function showSisyphusPage() {
  sisyphusPage.style.display="block";
}

function hideSisyphusPage() {
  sisyphusPage.style.display="none";
}

function showSisyphusExcerpt() {
  sisyphusExcerpt.style.display="block";
}

function hideSisyphusExcerpt() {
  sisyphusExcerpt.style.display="none";
}

function reverseSplitSquares() {
  var splitSquares = document.querySelectorAll('.split-square');
  var splitSquare = splitSquares[0];
  var title = document.getElementById("sisyphus-text");

  if (splitSquare.classList.contains("reversed")) {
    splitSquares.forEach((square) => {
      square.classList.remove("reversed");
    });
    title.classList.remove("white-text");
  }
  else {
    splitSquares.forEach((square) => {
      square.classList.add("reversed");
    });
    title.classList.add("white-text");
  }

}
