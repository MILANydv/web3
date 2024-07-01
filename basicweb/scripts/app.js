document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registerForm")
    .addEventListener("submit", registerUser);
  document.getElementById("loginForm").addEventListener("submit", loginUser);

  if (localStorage.getItem("loggedInUser")) {
    showDashboard(localStorage.getItem("loggedInUser"));
  }
});

function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (localStorage.getItem(username)) {
    document.getElementById("registerMessage").innerText =
      "Username already exists. Please choose a different username.";
  } else {
    localStorage.setItem(username, password);
    document.getElementById("registerMessage").innerText =
      "Registration successful. You can now login.";
    document.getElementById("registerForm").reset();
  }
}

function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    showDashboard(username);
  } else {
    document.getElementById("loginMessage").innerText =
      "Invalid username or password. Please try again.";
  }
}

function showDashboard(username) {
  // Encode the username to handle special characters properly
  var encodedUsername = encodeURIComponent(username);
  window.location.href = "dashboard.html?username=" + encodedUsername;
}


function showRegisterForm() {
  document.getElementById("register").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("registerMessage").innerText = "";
}

function showLoginForm() {
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginMessage").innerText = "";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  showLoginForm();
}
