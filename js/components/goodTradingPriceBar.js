let priceBar = document.querySelector(".priceBar");

window.addEventListener("load", () => {
  startAnimationCycle();
});

function startAnimationCycle() {
  let priceBarList = document.querySelectorAll(".priceBar_list");
  if (priceBarList.length < 1) return;

  // Kích hoạt phần tử đầu tiên
  priceBarList[0].classList.add("price_list_animation");

  // Theo dõi khi nó gần rời khỏi màn hình để kích hoạt phần tử tiếp theo
  function checkPosition() {
    const x = priceBarList[0].getBoundingClientRect().x;
    if (x < window.innerWidth - 2653) {
      priceBarList[1].classList.add("price_list_animation");
    } else {
      requestAnimationFrame(checkPosition);
    }
  }

  // Theo dõi khi phần tử đầu đã chạy hết và xóa nó đi
  function removeAndAddPriceBarList() {
    const x = priceBarList[0].getBoundingClientRect().x;
    if (x < -2650) {
      let newPriceBarList = priceBarList[0];
      newPriceBarList.classList.remove("price_list_animation");
      priceBar.removeChild(priceBarList[0]);
      priceBar.appendChild(newPriceBarList);
      // Gọi lại chu kỳ để xử lý phần tử mới
      startAnimationCycle();
    } else {
      requestAnimationFrame(removeAndAddPriceBarList);
    }
  }

  requestAnimationFrame(checkPosition);
  requestAnimationFrame(removeAndAddPriceBarList);

  // Vì requestAnimationFrame() chỉ chạy đúng 1 lần cho mỗi lời gọi, và:

  // Nếu bạn không gọi lại requestAnimationFrame() bên trong chính callback thì nó sẽ không tự lặp lại.

  // Trong đoạn code bạn đang dùng, cả checkPosition() và removePriceBarList()
  // chỉ tự gọi lại chính nó khi còn điều kiện cần kiểm tra.
}
//requestAnimationFrame() là một API JavaScript giúp bạn tạo animation mượt mà hơn,
// bằng cách yêu cầu trình duyệt gọi một hàm ngay trước khi trình duyệt vẽ khung hình tiếp theo (repaint).

// callback: Là hàm sẽ được gọi mỗi khi trình duyệt chuẩn bị vẽ khung hình mới (~60 lần/giây).

// Bạn có thể lặp lại animation bằng cách gọi lại chính requestAnimationFrame() bên trong callback.
