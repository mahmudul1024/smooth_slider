const ImagesArray = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
];

const carousalFunc = () => {
  let imageIndex = 0;
  setInterval(() => {
    const imageCatch = document.getElementById("main");

    imageCatch.setAttribute("src", ImagesArray[imageIndex]);
    imageIndex++;
    if (imageIndex === 4) {
      imageIndex = 0;
    }
  }, 1000);
};

carousalFunc();
console.log("ki");
