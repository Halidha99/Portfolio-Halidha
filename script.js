document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const textArray = ["Quality Assurance", "Developer"];
  const typingElement = document.querySelector(".typing");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = textArray[textIndex];
    typingElement.textContent = currentText.substring(0, charIndex);
    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(type, isDeleting ? 80 : 150);
  }
  type();

  // Menu toggle functionality
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // toggle between bars and close icons
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
      menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll(".navbar a").forEach(link =>
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      if (menuIcon.classList.contains("fa-xmark")) {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
      }
    })
  );
});

// CONTACT 
function submitContact(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in your name, email, and message.");
    return;
  }


  const mailto = `mailto:thanujakumarasekara@gmail.com?subject=${encodeURIComponent(
    subject || "Portfolio Contact from " + name
  )}&body=${encodeURIComponent(
    message + "\n\nFrom: " + name + "\nEmail: " + email
  )}`;

  window.location.href = mailto;

  
  alert("Message prepared! Your email client will open now.");
}