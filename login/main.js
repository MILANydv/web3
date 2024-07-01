document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different username.");
    } else {
      localStorage.setItem(username, password);
      alert("Registration successful. You can now login.");
    }
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert("Login successful.");
    // Redirect or perform some action upon successful login
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
