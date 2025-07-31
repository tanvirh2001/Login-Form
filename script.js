// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

// Theme toggle logic
const themeSwitch = document.getElementById('themeSwitch');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
  }
}

// Listen for toggle changes
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Form validation and submission handling
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  // TODO: Add real authentication logic here
  // For demo, just clear error and alert success
  errorMsg.textContent = "";
  alert(`Logging in as ${username}`);

  // Optionally reset form
  // loginForm.reset();
});

// Google Sign-In callback stub
function handleCredentialResponse(response) {
  // You get an ID token here:
  // console.log("Encoded JWT ID token: " + response.credential);

  // TODO: send this token to your server for verification and login

  alert('Google Sign-In successful! Token:\n' + response.credential);
}