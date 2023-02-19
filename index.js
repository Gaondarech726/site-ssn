const analogielement = document.getElementById("about-text");
const analogi = document.querySelector('.about-us');

const downloadelement = document.getElementById("download-text")
const download = document.querySelector(".download")

function analogiButtonClick() {
   analogielement.scrollIntoView({block: "center", behavior: "smooth"});
}

function downloadButtonClick() {
   downloadelement.scrollIntoView({block: "center", behavior: "smooth"});
}

analogi.addEventListener("click", analogiButtonClick)

download.addEventListener("click", downloadButtonClick)