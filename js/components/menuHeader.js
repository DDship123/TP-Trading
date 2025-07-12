window.addEventListener("load", () => {
  let menuIframe = document.querySelector(".header .menu").contentDocument;
  let pageBtns = menuIframe.querySelectorAll(".menu_tags a");
  switch (window.location.href) {
    case "http://127.0.0.1:5500/page/home.html":
      pageBtns[0].style.textDecoration = "underline";
      pageBtns[0].style.textUnderlineOffset = "5px";
      break;
    case "http://127.0.0.1:5500/page/tradingBrokers.html":
      pageBtns[1].style.textDecoration = "underline";
      pageBtns[1].style.textUnderlineOffset = "5px";
      break;
    case "http://127.0.0.1:5500/page/blog.html":
      pageBtns[2].style.textDecoration = "underline";
      pageBtns[2].style.textUnderlineOffset = "5px";
      break;
    case "http://127.0.0.1:5500/page/news.html":
      pageBtns[3].style.textDecoration = "underline";
      pageBtns[3].style.textUnderlineOffset = "5px";
      break;
    case "http://127.0.0.1:5500/page/contact.html":
      pageBtns[4].style.textDecoration = "underline";
      pageBtns[4].style.textUnderlineOffset = "5px";
      break;
  }

  let menuBtn = menuIframe.querySelector(".menu > i");
  let menuBar = document.querySelector(".header .menu");
  menuBtn.addEventListener("click", () => {
    if (window.location.href == "http://127.0.0.1:5500/page/home.html") {
      if (menuBar.getAttribute("height") == "100px") {
        menuBar.setAttribute("height", "600px");
        menuBar.style.top = "140px";
      } else {
        setTimeout(() => {
          menuBar.setAttribute("height", "100px");
        }, 800);
        setTimeout(() => {
          menuBar.style.top = "100px";
        }, 800);
      }
    } else {
      if (menuBar.getAttribute("height") == "120px") {
        menuBar.setAttribute("height", "600px");
      } else {
        setTimeout(() => {
          menuBar.setAttribute("height", "120px");
        }, 800);
      }
    }
  });
});
