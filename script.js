// https://preview.themeforest.net/item/djewno-jewelry-store-woocommerce-wordpress-theme/full_screen_preview/51164479
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".gt-menu");
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const mouseIndicator = document.querySelector(".gt-mouse-indicator");
  const mouseDown = mouseIndicator.querySelector(".gt-mouse-down");

  // Custom bounce animation using GSAP (or pure JS)
  const bounceAnimation = () => {
    mouseDown.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(10px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 1200,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  };

  // Observer to start animation when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          mouseIndicator.dataset.animated === "false"
        ) {
          mouseIndicator.dataset.animated = "true";
          bounceAnimation(); // Start animation
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(mouseIndicator);
});
