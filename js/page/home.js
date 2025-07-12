let bannerImageList = document.querySelector(".banners_container_image_list");
window.addEventListener("load", () => {
  setTimeout(() => {
    animationcycle();
  }, 3 * 1000);
});

function animationcycle() {
  bannerImageList = document.querySelector(".banners_container_image_list");
  if (bannerImageList.classList.contains("bannerAnimationToLeft")) {
    bannerImageList.classList.remove("bannerAnimationToLeft");
    bannerImageList.classList.add("bannerAnimationToRight");
    setTimeout(() => {
      animationcycle();
    }, 10 * 1000);
  } else if (bannerImageList.classList.contains("bannerAnimationToRight")) {
    bannerImageList.classList.remove("bannerAnimationToRight");
    bannerImageList.classList.add("bannerAnimationToLeft");
    setTimeout(() => {
      animationcycle();
    }, 10 * 1000);
  } else {
    bannerImageList.classList.add("bannerAnimationToLeft");
    setTimeout(() => {
      animationcycle();
    }, 10 * 1000);
  }
}

let leftBtn = document.querySelectorAll(".tradingBrokers_container i")[0];
let rightBtn = document.querySelectorAll(".tradingBrokers_container i")[1];
let tradingBrokersContainerList = document.querySelector(".overFlow_hidden");
let dots = document.querySelectorAll(".tradingBrokers_dots_dot");
let dotIndex = 0;
leftBtn.addEventListener("click", () => {
  if (dotIndex < 1) {
    tradingBrokersContainerList.style.right = "100%";
    dotIndex++;
    removeDotActive();
    dots[0].classList.add("dot_active");
  }
});
rightBtn.addEventListener("click", () => {
  if (dotIndex >= 0) {
    tradingBrokersContainerList.style.right = "0px";
    dotIndex--;
    removeDotActive();
    dots[1].classList.add("dot_active");
  }
});
function removeDotActive() {
  dots = document.querySelectorAll(".tradingBrokers_dots_dot");
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("dot_active")) {
      dots[i].classList.remove("dot_active");
      return;
    }
  }
}

let brokers = document.querySelectorAll(
  ".tradingBrokers_container_list_group_image img"
);
brokers.forEach((broker) => {
  broker.addEventListener("click", () => {
    window.location.href = "/page/tradingBrokers.html";
  });
});

let bannerImages = document.querySelectorAll(
  ".banners_container_image_list img"
);
bannerImages[0].addEventListener("click", () => {
  window.location.href =
    "https://vn.puprime.partners/forex-trading-account/?affid=88188";
});
bannerImages[1].addEventListener("click", () => {
  window.location.href =
    "https://www.vtg-mkt-apac.com/vi/open-live-account/?affid=NzI2MzgxNw==";
});
