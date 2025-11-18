var imgsList = Array.from(document.getElementsByClassName("img-item"));
var lightboxContainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var curr = 0;
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var closeButton = document.getElementById("close");

for (var i = 0; i < imgsList.length; i++) {
  imgsList[i].addEventListener("click", function (e) {
    curr = imgsList.indexOf(e.target);
    var imgsrc = e.target.getAttribute("src");
    lightboxContainer.classList.replace("d-none", "d-flex");
    lightboxItem.style.backgroundImage = `url(${imgsrc})`;
  });
}

function slide(i) {
  curr += i;
  if (curr == imgsList.length) {
    curr = 0;
  }
  if (curr == -1) {
    curr = imgsList.length - 1;
  }
  var imgsrc = imgsList[curr].getAttribute("src");
  lightboxItem.style.backgroundImage = `url(${imgsrc})`;
}
/*function prevSlide() {
  if (curr == -1) {
    curr = imgsList.length - 1;
  }

  curr--;
  var imgsrc = imgsList[curr].getAttribute("src");
  lightboxItem.style.backgroundImage = `url(${imgsrc})`;
}*/

nextButton.addEventListener("click", function () {
  slide(1);
});
prevButton.addEventListener("click", function () {
  slide(-1);
});

function close() {
  lightboxContainer.classList.replace("d-flex", "d-none");
}
closeButton.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    close();
  }
});
