const d = new Date();
let year = d.getFullYear();

// MOCK LOGIN
const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

let userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);

const logout = () => {
  setUserInLocalStorage("notlogin");
};

// NAVBAR COMPONENT

const navbar = document.getElementById("navbar");
const path = window.location.pathname;

if (user == "login") {
  navbar.innerHTML = `<a href="/"><img src="assets/Logo.svg" alt="logo-fixndrive" /></a>
  <ul>
    <li><a href="/" class=${path === "/" ? "active-nav" : ""}>Beranda</a></li>
    <li>
      <div class="service-wrap">
        <span class="dropbtn ${
          path === "/carcare.html"
            ? "active-nav"
            : path === "/motorcare.html"
            ? "active-nav"
            : path === "/schedule.html"
            ? "active-nav"
            : ""
        }">Layanan</span>
        <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
        <ul class="service-dropdown" id="service-dropdown">
          <li><a href="/carcare.html">Perawatan Mobil</a></li>
          <li><a href="/motorcare.html">Perawatan Motor</a></li>
          <li><a href="/schedule.html">Jadwal</a></li>
          <li><a href="#">Lokasi Perawatan</a></li>
        </ul>
      </div>
    </li>
    <li><a href="/forum.html" class=${
      path === "/forum.html" ? "active-nav" : ""
    }>Forum</a></li>
    <li><a href="/contact.html" class=${
      path === "/contact.html" ? "active-nav" : ""
    }>Kontak</a></li>
  </ul>
  <div class="profile-nav">
    <a href="/notif.html"
      ><img src="assets/notif-icon.svg" alt="notif-icon"
    /></a>
    <div class="profile-wrap">
      <img src="assets/profile-pic.png" alt="profile-pic" />
      <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
  
      <ul class="profile-dropdown" id="profile-dropdown">
        <li><a href="/profile.html">Profile Saya</a></li>
        <li><a href="/settings.html">Pengaturan</a></li>
        <li><a href="/" onclick="logout()">Keluar</a></li>
      </ul>
    </div>
  </div>`;
} else if (user == null || "notlogin") {
  if (navbar) {
    navbar.innerHTML = `<a href="/"><img src="assets/Logo.svg" alt="logo-fixndrive" /></a>
    <ul>
      <li><a href="/" class=${path === "/" ? "active-nav" : ""}>Beranda</a></li>
      <li>
        <div class="service-wrap">
        <span class="dropbtn ${
          path === "/carcare.html"
            ? "active-nav"
            : path === "/motorcare.html"
            ? "active-nav"
            : ""
        }">Layanan</span>
          <img src="assets/arrow-down.svg" alt="arrow-down-icon" />
          <ul class="service-dropdown" id="service-dropdown">
            <li><a href="/carcare.html">Perawatan Mobil</a></li>
            <li><a href="/motorcare.html">Perawatan Motor</a></li>
            <li><a href="/needlogin.html">Jadwal</a></li>
            <li><a href="/needlogin.html">Lokasi Perawatan</a></li>
          </ul>
        </div>
      </li>
      <li><a href="/needlogin.html">Forum</a></li>
      <li><a href="/contact.html" class=${
        path === "/contact.html" ? "active-nav" : ""
      }>Kontak</a></li>
    </ul>
    <div class="btn-nav">
      <a href="/login.html" class="login-btn-nav">Masuk</a>
      <a href="/signup.html" class="signup-btn">Daftar</a>
    </div>`;
  }
}
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
const serviceElem = document.querySelector(".service-wrap");
const serviceDropDown = document.getElementById("service-dropdown");

const dropDown = (elem, dropdown) => {
  if (elem) {
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
  }
};
dropDown(profileElem, profileDropDown);
dropDown(serviceElem, serviceDropDown);

// CARD CARE ITEMS
let motorcareItems = [
  {
    img: "assets/motorcare-img1.jpg",
    alt: "motorcare-img1",
    title: "Produk penting untuk mencuci sepeda motor",
  },
  {
    img: "assets/motorcare-img2.jpg",
    alt: "motorcare-img2",
    title: "Cara mengganti oli dengan mudah secara mandiri",
  },
  {
    img: "assets/motorcare-img3.jpg",
    alt: "motorcare-img3",
    title: "Kesalahan amatir pemilik motor baru",
  },
  {
    img: "assets/motorcare-img4.jpg",
    alt: "motorcare-img4",
    title: "Jenis-jenis motor yang perlu anda ketahui!",
  },
  {
    img: "assets/motorcare-img5.jpg",
    alt: "motorcare-img5",
    title: "Cara mencuci helm dengan mudah di rumah!",
  },
  {
    img: "assets/motorcare-img6.jpg",
    alt: "motorcare-img6",
    title: "Perbedaan mengisi ban dengan nitrogen dan angin  biasa",
  },
];

let carcareItems = [
  {
    img: "assets/carcare-img1.jpg",
    alt: "carcare-img1",
    title: "Produk penting untuk mencuci mobil",
  },
  {
    img: "assets/carcare-img2.jpg",
    alt: "carcare-img2",
    title: "Cara mengisi air wiper mobil dengan benar",
  },
  {
    img: "assets/carcare-img3.jpg",
    alt: "carcare-img3",
    title: "Kapan ban mobil harus diganti?",
  },
  {
    img: "assets/carcare-img4.jpg",
    alt: "carcare-img4",
    title: "Kenali lampu indikator pada panel mobil Anda!",
  },
  {
    img: "assets/carcare-img5.jpg",
    alt: "carcare-img5",
    title: "Matic vs Manual, Mana yang bagus?",
  },
  {
    img: "assets/carcare-img6.jpg",
    alt: "carcare-img6",
    title: "Perbedaan antara aki kering dan aki basah",
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
  <h3>Lihat konten lainnya</h3>
  <h4>Layanan</h4>
  <li><a href="carcare.html">Perawatan Mobil</a></li>
  <li><a href="/motorcare.html">Perawatan Motor</a></li>
  <h4>Komunitas</h4>
  <li><a href="/forum.html">Forum</a></li>
  <h4>Temukan Kami</h4>
  <li><a href="/contact.html">Kontak Kami</a></li>
</ul>
<div>
  <h3>Bergabung untuk langganan</h3>
  <form>
    <label for="news">Email Kamu</label>
    <input
      type="email"
      class="subs-input"
      name="news"
      id="news"
      placeholder="masukkan email kamu"
    />
    <button class="subs-btn">Berlangganan</button>
  </form>
</div>
</div>
<div class="footer-bot">
<div>
  <p>Copyright &copy; ${year} FixNDrive. Hak Cipta Dilindungi.</p>
</div>
<div>
  <p>Syarat & Ketentuan</p>
  <p>Kebijakan Privasi</p>
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
