window.addEventListener("load", async () => {
  let languageContext;
  switch (window.location.pathname) {
    case "/index.html":
      languageContext = await import("./page/homeText.js");
      break;
    case "":
      languageContext = await import("./page/homeText.js");
      break;
    case "/page/tradingBrokers.html":
      languageContext = await import("./page/tradingBrokersText.js");
      break;
    case "/page/blog.html":
      languageContext = await import("./page/blogText.js");
      break;
    case "/page/news.html":
      languageContext = await import("./page/newsText.js");
      break;
    case "/page/contact.html":
      languageContext = await import("./page/contactText.js");
      break;
  }
  let menuIframe = document.querySelector(".header .menu").contentDocument;
  let vietnameseLanguage = menuIframe.querySelectorAll(
    ".menu_tags li:last-child .options > span"
  )[0];
  let englishLanguage = menuIframe.querySelectorAll(
    ".menu_tags li:last-child .options > span"
  )[1];
  let ball = menuIframe.querySelector(
    ".menu_tags li:last-child .options .ball"
  );

  let index = 0;
  function traverseChildren(element, language) {
    let elementText = [].reduce.call(
      element.childNodes,
      function (a, b) {
        return a + (b.nodeType === 3 ? b.textContent : "");
      },
      ""
    );
    elementText = elementText.trim();
    if (elementText !== "") {
      if (language == "VN") {
        element.innerHTML = languageContext.vietnamese[index];
        index++;
        ``;
      } else if (language == "EN") {
        element.innerHTML = languageContext.english[index];
        index++;
      }
    }

    for (let child of element.children) {
      traverseChildren(child, language);
    }
  }

  vietnameseLanguage.addEventListener("click", () => {
    if (ball.querySelector("span").innerHTML == "EN") {
      ball.style.right = "53%";
      ball.querySelector("span").innerHTML = "VN";
      let sections = document.querySelectorAll("body section");
      for (let i = 0; i < sections.length - 1; i++) {
        traverseChildren(sections[i], ball.querySelector("span").innerHTML);
      }
      traverseChildren(
        sections[sections.length - 1]
          .querySelector("iframe")
          .contentDocument.querySelector("section"),
        ball.querySelector("span").innerHTML
      );
      index = 0;
    }
  });

  englishLanguage.addEventListener("click", () => {
    if (ball.querySelector("span").innerHTML == "VN") {
      ball.style.right = "3%";
      ball.querySelector("span").innerHTML = "EN";
      let sections = document.querySelectorAll("body section");
      for (let i = 0; i < sections.length - 1; i++) {
        traverseChildren(sections[i], ball.querySelector("span").innerHTML);
      }
      traverseChildren(
        sections[sections.length - 1]
          .querySelector("iframe")
          .contentDocument.querySelector("section"),
        ball.querySelector("span").innerHTML
      );
      index = 0;
    }
  });
});
