function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const paragraphs = document.querySelectorAll(".para");
  paragraphs.forEach((paragraph, index) => {
    if (isElementInViewport(paragraph)) {
      paragraph.classList.add("in-view");
    } else {
      paragraph.classList.remove("in-view");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);

handleScrollAnimation();
