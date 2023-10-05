// PASSWORD TOGGLE SHOW/HIDE
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword?.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

// PROFILE DROPDOWN TOGGLE
const profileElem = document.querySelector(".profile-wrap");
const profileDropDown = document.getElementById("profile-dropdown");

profileElem?.addEventListener("click", (e) => {
  e.stopPropagation();

  profileDropDown.classList.toggle("active");
  if (profileDropDown.classList.contains("active")) {
    document.body.onclick = () => {
      profileDropDown.classList.remove("active");
    };
  } else {
    document.body.onclick = null;
  }
});
