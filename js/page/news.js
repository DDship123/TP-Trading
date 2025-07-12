window.addEventListener("load", () => {
  animationCycle();
});
function animationCycle() {
  let rightBanners = document.querySelector(
    ".dailyNews_container_right_banners"
  );
  setInterval(() => {
    setTimeout(() => {
      if (rightBanners.classList.contains("banner_moveDown")) {
        rightBanners.classList.remove("banner_moveDown");
        rightBanners.classList.add("banner_moveUp");
      } else {
        rightBanners.classList.add("banner_moveUp");
      }
    }, 5 * 1000);
    setTimeout(() => {
      if (rightBanners.classList.contains("banner_moveUp")) {
        rightBanners.classList.remove("banner_moveUp");
        rightBanners.classList.add("banner_moveDown");
      } else {
        rightBanners.classList.add("banner_moveDown");
      }
    }, 10 * 1000);
  }, 15 * 1000);
}

let showImage = document.querySelector(".entry_image");
let closeImageBtn = document.querySelector(".entry_image i");

let entryImages = document.querySelectorAll(
  ".analyse_entrys_container_entry > img"
);
entryImages.forEach((image) => {
  image.addEventListener("click", () => {
    // console.log(image.getAttribute("src"));
    showImage
      .querySelector("img")
      .setAttribute("src", image.getAttribute("src"));
    showImage.style.display = "block";
  });
});
closeImageBtn.addEventListener("click", () => {
  showImage.style.display = "none";
});

let bannerImages = document.querySelectorAll(
  ".dailyNews_container_right_banners img"
);
bannerImages[0].addEventListener("click", () => {
  window.location.href =
    "https://vn.puprime.partners/forex-trading-account/?affid=88188";
});
bannerImages[1].addEventListener("click", () => {
  window.location.href =
    "https://www.vtg-mkt-apac.com/vi/open-live-account/?affid=NzI2MzgxNw==";
});
