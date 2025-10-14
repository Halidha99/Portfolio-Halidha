const textArray = ["Quality Assurance", "Developer"];
const typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textIndex];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
