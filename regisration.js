   document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      validateForm();

      });


function validateForm() {
 // event.preventDefault(); // Prevent form submission by default

  console.log("Validating!...")

  let isValid = true;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple email validation
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Password length check
  if (password.length <= 6) {
    alert("Password must be more than 6 characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    onSubmitData(email, password); // Send data to server
  }

  return false; // Always return false to avoid default form submission (handled via JS)
}

function onSubmitData(email, password) {
    console.log("Submitting...")
  fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(result => {
    console.log("Server Response:", result);
  })
  .catch(error => {
    console.error("Fetch Error:", error);
  });
}
