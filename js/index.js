/**
 * ================================================================================
 * MASTER TP - TRADING COURSE WEBSITE
 * Main JavaScript File - Handles all interactive functionality
 * ================================================================================
 * Features:
 * - Title text animation with staggered letter effects
 * - Strategy icon animations with smooth transitions
 * - Navigation active state management
 * - Background element positioning
 * - Modal popup for course registration
 * ================================================================================
 */

// ==================== MAIN APPLICATION INITIALIZATION ====================
window.addEventListener("DOMContentLoaded", () => {
  initializeTitleAnimation();
  initializeIconAnimation();
  initializeNavigation();
  initializeBackgroundElements();
});

// ==================== TITLE ANIMATION FUNCTIONS ====================
function initializeTitleAnimation() {
  const title = document.querySelector(".hero__title");
  const titleSpans = title.querySelectorAll("span");
  let isFirstAnimationComplete = false;

  // Run initial title animation on page load
  titleSpans.forEach((span, index) => {
    if (!isFirstAnimationComplete) {
      animateTitle(span, index);
    }
    if (index === titleSpans.length - 1) {
      isFirstAnimationComplete = true;
    }
  });

  // Set up continuous animation loop after first animation
  if (isFirstAnimationComplete) {
    setInterval(() => {
      titleSpans.forEach((span, index) => {
        animateTitle(span, index);
      });
    }, 8800); // Repeat every 8.8 seconds
  }
}

function animateTitle(span, index) {
  setTimeout(() => {
    span.classList.add("active");
  }, index * 200); // Stagger each letter by 200ms

  setTimeout(() => {
    span.classList.remove("active");
  }, index * 200 + 500); // Remove animation after 500ms
}

// ==================== ICON ANIMATION FUNCTIONS ====================
function initializeIconAnimation() {
  const strategyIcons = document.querySelectorAll(".hero__strategy i");

  strategyIcons.forEach((icon, index) => {
    // Add smooth transition styles
    icon.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    // Initial delay for staggered start
    setTimeout(() => {
      // Continuous smooth animation cycle
      setInterval(() => {
        // Smooth scale up with glow effect
        icon.style.transform = "scale(1.3) rotate(10deg)";
        icon.style.color = "#FFD700";

        // Hold the effect briefly
        setTimeout(() => {
          icon.style.transform = "scale(1.1) rotate(-5deg)";
        }, 800);

        // Return to normal state
        setTimeout(() => {
          icon.style.transform = "scale(1) rotate(0deg)";
          icon.style.color = "#FFD700";
        }, 1600);
      }, 4000); // Repeat every 4 seconds
    }, index * 800); // Stagger each icon by 800ms
  });
}

// ==================== NAVIGATION FUNCTIONS ====================
function initializeNavigation() {
  const navigationLinks = document.querySelectorAll(".navigation__link");
  const brandElement = document.querySelector(".navigation__brand");

  // Handle navigation link clicks
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      removeNavigationActiveClass(navigationLinks);
      link.classList.add("navigation__link--active");
    });
  });

  // Handle brand logo click
  brandElement.addEventListener("click", () => {
    removeNavigationActiveClass(navigationLinks);
  });
}

function removeNavigationActiveClass(links) {
  links.forEach((link) => {
    if (link.classList.contains("navigation__link--active")) {
      link.classList.remove("navigation__link--active");
    }
  });
}

// ==================== BACKGROUND ELEMENTS FUNCTIONS ====================
function initializeBackgroundElements() {
  const backgroundImages = document.querySelectorAll(".changeBackgroundImage");
  const heroSection = document.querySelector("#hero");
  const courseSection = document.querySelector("#course");

  // Position background elements based on section heights
  if (backgroundImages.length >= 2) {
    backgroundImages[0].style.top = `${heroSection.clientHeight - 25}px`;
    backgroundImages[1].style.top = `${
      heroSection.clientHeight + courseSection.clientHeight - 25
    }px`;
  }
}

// ==================== MODAL FUNCTIONALITY ====================
document.addEventListener("DOMContentLoaded", () => {
  initializeModal();
});

function initializeModal() {
  const modal = document.getElementById("registration-modal");
  const openModalButton = document.querySelector(".navigation__cta");
  const closeModalButton = document.getElementById("close-modal");
  const modalOverlay = document.querySelector(".modal__overlay");
  const modalForm = document.querySelector(".modal__registration-form");

  // Event Listeners
  setupModalEventListeners();
  // setupFormSubmission();

  // ==================== Modal Event Handlers ====================
  function setupModalEventListeners() {
    // Open modal when CTA button is clicked
    openModalButton.addEventListener("click", (event) => {
      event.preventDefault();
      showModal();
    });

    // Close modal when close button is clicked
    closeModalButton.addEventListener("click", hideModal);

    // Close modal when overlay is clicked
    modalOverlay.addEventListener("click", hideModal);

    // Close modal when Escape key is pressed
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("modal--show")) {
        hideModal();
      }
    });
  }

  // ==================== Form Submission Handler ====================
  // function setupFormSubmission() {
  //   modalForm.addEventListener("submit", (event) => {
  //     event.preventDefault();

  //     // Get form input values
  //     const nameInput = modalForm.querySelector('input[type="text"]');
  //     const phoneInput = modalForm.querySelector('input[type="tel"]');
  //     const emailInput = modalForm.querySelector('input[type="email"]');

  //     const name = nameInput.value.trim();
  //     const phone = phoneInput.value.trim();
  //     const email = emailInput.value.trim();

  //     // Validate required fields
  //     if (!name || !phone) {
  //       alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
  //       return;
  //     }

  //     // Show success message (replace with actual form submission logic)
  //     alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");

  //     // Reset form and close modal
  //     modalForm.reset();
  //     hideModal();
  //   });
  // }

  // ==================== Modal Display Functions ====================
  function showModal() {
    modal.style.display = "flex";
    // Force reflow to ensure display change is applied
    modal.offsetHeight;
    modal.classList.add("modal--show");
  }

  function hideModal() {
    modal.classList.remove("modal--show");

    // Hide modal after transition completes
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}
