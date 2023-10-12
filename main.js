// NAVBAR COMPONENT
const navbarNotLogin = document.getElementById("navbar-notlogin");
const navbarLogin = document.getElementById("navbar-login");

const path = window.location.pathname;
navbarNotLogin
  ? (navbarNotLogin.innerHTML = `<a href="/"><img src="assets/Logo.svg" alt="logo-fixndrive" /></a>

<ul>
  <li><a href="/" class=${path === "/" ? "active-nav" : ""}>Home</a></li>
  <li>
    <div class="service-wrap">
    <span class="dropbtn ${
      path === "/carcare.html"
        ? "active-nav"
        : path === "/motorcare.html"
        ? "active-nav"
        : ""
    }">Services</span>
      <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
      <ul class="service-dropdown" id="service-dropdown">
        <li><a href="/carcare.html">Car Care</a></li>
        <li><a href="/motorcare.html">Motor Care</a></li>
        <li><a href="/needlogin.html">Schedule</a></li>
        <li><a href="/needlogin.html">Treatment Location</a></li>
      </ul>
    </div>
  </li>
  <li><a href="/needlogin.html">Forum</a></li>
  <li><a href="/contact.html" class=${
    path === "/contact.html" ? "active-nav" : ""
  }>Contact Us</a></li>
</ul>
<div class="btn-nav">
  <a href="/login.html" class="login-btn-nav">Login</a>
  <a href="/signup.html" class="signup-btn">Sign up</a>
</div>`)
  : navbarLogin
  ? (navbarLogin.innerHTML = `<a href="/homelogin.html"><img src="assets/Logo.svg" alt="logo-fixndrive" /></a>
  <ul>
    <li><a href="/" class=${
      path === "/homelogin.html" ? "active-nav" : ""
    }>Home</a></li>
    <li>
      <div class="service-wrap">
        <span class="dropbtn ${
          path === "/carcare.html"
            ? "active-nav"
            : path === "/motorcare.html"
            ? "active-nav"
            : ""
        }">Services</span>
        <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
        <ul class="service-dropdown" id="service-dropdown">
          <li><a href="/carcare.html">Car Care</a></li>
          <li><a href="/motorcare.html">Motor Care</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Treatment Location</a></li>
        </ul>
      </div>
    </li>
    <li><a href="#">Forum</a></li>
    <li><a href="/contact.html">Contact Us</a></li>
  </ul>
  <div class="profile-nav">
    <a href="/notif.html"
      ><img src="assets/notif-icon.svg" alt="notif-icon"
    /></a>
    <div class="profile-wrap">
      <img src="assets/profile-pic.png" alt="profile-pic" />
      <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
  
      <ul class="profile-dropdown" id="profile-dropdown">
        <li>My Profile</li>
        <li><a href="/settings.html">Settings</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </div>`)
  : null;

// PASSWORD TOGGLE SHOW/HIDE
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword?.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

// DROPDOWN TOGGLE
const profileElem = document.querySelector(".profile-wrap");
const profileDropDown = document.getElementById("profile-dropdown");
const serviceElem = document.querySelector(".dropbtn");
const serviceDropDown = document.getElementById("service-dropdown");

const dropDown = (elem, dropdown) => {
  elem.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdown.classList.toggle("active");
    if (dropdown.classList.contains("active")) {
      document.body.onclick = () => {
        dropdown.classList.remove("active");
      };
    } else {
      document.body.onclick = null;
    }
  });
};
if (navbarLogin) {
  dropDown(profileElem, profileDropDown);
  dropDown(serviceElem, serviceDropDown);
} else if (navbarNotLogin) {
  dropDown(serviceElem, serviceDropDown);
}

// CARD CARE ITEMS
let motorcareItems = [
  {
    img: "assets/motorcare-img1.jpg",
    alt: "motorcare-img1",
    title: "Essential products for washing motorcycles",
  },
  {
    img: "assets/motorcare-img2.jpg",
    alt: "motorcare-img2",
    title: "How to easily change oil independently",
  },
  {
    img: "assets/motorcare-img3.jpg",
    alt: "motorcare-img3",
    title: "Amateur mistakes of new motorbike owners",
  },
  {
    img: "assets/motorcare-img4.jpg",
    alt: "motorcare-img4",
    title: "The types of motorbikes you need to you need to know!",
  },
  {
    img: "assets/motorcare-img5.jpg",
    alt: "motorcare-img5",
    title: "How to easily wash your helmet at home!",
  },
  {
    img: "assets/motorcare-img6.jpg",
    alt: "motorcare-img6",
    title:
      "The difference between filling tyres with nitrogen and regular tyre air",
  },
];

let carcareItems = [
  {
    img: "assets/carcare-img1.jpg",
    alt: "carcare-img1",
    title: "Essential products for car washing",
  },
  {
    img: "assets/carcare-img2.jpg",
    alt: "carcare-img2",
    title: "How to fill car wiper water correctly",
  },
  {
    img: "assets/carcare-img3.jpg",
    alt: "carcare-img3",
    title: "When should car tyres be replaced?",
  },
  {
    img: "assets/carcare-img4.jpg",
    alt: "carcare-img4",
    title: "Get to know the indicator lights on your car panel!",
  },
  {
    img: "assets/carcare-img5.jpg",
    alt: "carcare-img5",
    title: "Matic vs Manual, Which one is good?",
  },
  {
    img: "assets/carcare-img6.jpg",
    alt: "carcare-img6",
    title: "Difference between dry battery and wet battery",
  },
];

// REUSABLE CARD CARE
const reusableCardCare = (itemsArray, cardElem) => {
  for (const item of itemsArray) {
    cardElem.innerHTML += `
  <div class="card">
    <img
      src=${item.img}
      alt=${item.alt}
      class="card-img"
    />
    <div class="card-item">
      <h3>${item.title}</h3>
    </div>
  </div>`;
  }
};
const motorCardElem = document.querySelector("#motorcardwrap");
const carCardElem = document.querySelector("#carcardwrap");
if (motorCardElem) {
  reusableCardCare(motorcareItems, motorCardElem);
} else if (carCardElem) {
  reusableCardCare(carcareItems, carCardElem);
}

// FOOTER COMPONENT
const footer = document.getElementById("footer");

footer
  ? (footer.innerHTML = `<div class="footer-top">
<div>
  <a href="#"><img src="assets/Logo-footer.svg" alt="footer-logo" /></a>
</div>
<ul>
  <h3>See More Content</h3>
  <h4>Resources</h4>
  <li><a href="carcare.html">Car care</a></li>
  <li><a href="/motorcare.html">Motor Care</a></li>
  <h4>Community</h4>
  <li><a href="/forum.html">Forum</a></li>
  <h4>Find Us</h4>
  <li><a href="/contact.html">Contact</a></li>
</ul>
<div>
  <h3>Join a Newsletter</h3>
  <form>
    <label for="news">Your Email</label>
    <input
      type="email"
      class="subs-input"
      name="news"
      id="news"
      placeholder="Enter Your Email"
    />
    <button class="subs-btn">Subscribe</button>
  </form>
</div>
</div>
<div class="footer-bot">
<div>
  <p>Copyright &copy; 2023 FixNDrive. All Rights Reserved.</p>
</div>
<div>
  <p>Terms of Service</p>
  <p>Privacy Policy</p>
</div>
</div>`)
  : null;

// HERE API
// var platform = new H.service.Platform({
//   apikey: "WxPAYsSMtx9FYOEZZ8-MUzIgzTh52hdbXbMkXmUglTo",
// });

// // Obtain the default map types from the platform object:
// var defaultLayers = platform.createDefaultLayers();

// // Instantiate (and display) a map object:
// var map = new H.Map(
//   document.getElementById("mapContainer"),
//   defaultLayers.vector.normal.map,
//   {
//     zoom: 10,
//     center: { lat: -6.386694690076874, lng: 106.83932508526033 },
//   }
// );

// /**
//  * Moves the map to display over Berlin
//  *
//  * @param  {H.Map} map      A HERE Map instance within the application
//  */
// function moveMapToBerlin(map) {
//   map.setCenter({ lat: 52.5159, lng: 13.3777 });
//   map.setZoom(14);
// }

// /**
//  * Boilerplate map initialization code starts below:
//  */

// //Step 1: initialize communication with the platform
// // In your own code, replace variable window.apikey with your own apikey
// var platform = new H.service.Platform({
//   apikey: "WxPAYsSMtx9FYOEZZ8-MUzIgzTh52hdbXbMkXmUglTo",
// });
// var defaultLayers = platform.createDefaultLayers();

// //Step 2: initialize a map - this map is centered over Europe
// var map = new H.Map(
//   document.getElementById("map"),
//   defaultLayers.vector.normal.map,
//   {
//     center: { lat: 50, lng: 5 },
//     zoom: 4,
//     pixelRatio: window.devicePixelRatio || 1,
//   }
// );
// // add a resize listener to make sure that the map occupies the whole container
// window.addEventListener("resize", () => map.getViewPort().resize());

// //Step 3: make the map interactive
// // MapEvents enables the event system
// // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
// var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// // Create the default UI components
// var ui = H.ui.UI.createDefault(map, defaultLayers);

// // Now use the map as required...
// window.onload = function () {
//   moveMapToBerlin(map);
// };
