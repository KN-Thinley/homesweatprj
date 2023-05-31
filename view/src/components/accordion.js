const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
