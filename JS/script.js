// ===== Light / Dark mode =====
// Find the button by its id
const themeToggle = document.getElementById("theme-toggle");

// When clicked, add or remove the "dark" class on <body>.
// The CSS (body.dark) does all the colour changes.
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// ===== Visitor form =====
const form = document.getElementById("visitor-form");
const nameInput = document.getElementById("visitor-name");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page
  event.preventDefault();

  // trim() removes spaces at the start and end
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Reject an empty email
  if (email === "") {
    message.textContent = "Please enter your email address.";
    message.classList.add("error");
    emailInput.focus();
    return; // stop here
  }

  // Valid: show a polite greeting (use "visitor" if no name was typed)
  message.classList.remove("error");
  message.textContent = "Thank you, " + (name || "visitor") + "! Your details were received.";

  // Clear the form so it is ready for the next visitor
  form.reset();
});
