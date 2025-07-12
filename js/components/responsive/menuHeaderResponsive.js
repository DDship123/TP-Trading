let menuBtn = document.querySelector(".menu > i");
let menuTags = document.querySelector(".menu ul");

menuBtn.addEventListener("click", () => {
  menuTags.classList.toggle("menu_tags_active");
});
