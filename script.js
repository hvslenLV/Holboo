function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "register.html";
}

// PAGE GUARD (хамгаалалт)
function protectPage() {
  const user = getUser();
  if (!user) {
    window.location.href = "register.html";
  }
}

// AUTO REDIRECT IF LOGGED IN
function redirectIfLoggedIn() {
  const user = getUser();
  if (user) {
    window.location.href = "match.html";
  }
}