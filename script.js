const buttons = document.querySelectorAll(".card-item-btn");

buttons.forEach((button) => {
 button.addEventListener("click", function () {
  const descriptions = this.nextElementSibling; //the next sibling element of the clicked button
  const plusIcons = this.querySelector(".plus-icon");
  const minusIcons = this.querySelector(".minus-icon");

  if (descriptions.style.maxHeight) {
   descriptions.style.maxHeight = null;
   plusIcons.style.display = "block"; // making it visible.
   minusIcons.style.display = "none"; //hiding it.
  } else {
   descriptions.style.maxHeight = descriptions.scrollHeight + "px";
   plusIcons.style.display = "none";
   minusIcons.style.display = "block";
  }
 });
});
