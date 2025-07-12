let bonusBar = document.querySelector(".bonusBar");
window.addEventListener("load", () => {
  animationCycle();
});

function animationCycle() {
  let bonusBarItems = document.querySelectorAll(".bonusBar_item");
  bonusBarItems[0].classList.add("bonusBar_item_animation");

  function trackElementPosition() {
    let x = bonusBarItems[0].getBoundingClientRect().x;
    if (x < window.innerWidth - 1730) {
      bonusBarItems[1].classList.add("bonusBar_item_animation");
    } else {
      requestAnimationFrame(trackElementPosition);
    }
  }

  function deleteAndAddElement() {
    let x = bonusBarItems[0].getBoundingClientRect().x;
    if (x < -1700) {
      let newElement = bonusBarItems[0];
      newElement.classList.remove("bonusBar_item_animation");
      bonusBar.removeChild(bonusBarItems[0]);
      bonusBar.appendChild(newElement);
      animationCycle();
    } else {
      requestAnimationFrame(deleteAndAddElement);
    }
  }
  requestAnimationFrame(trackElementPosition);
  requestAnimationFrame(deleteAndAddElement);
}
