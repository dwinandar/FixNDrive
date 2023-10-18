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

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.marginTop = "0";
    navbar.style.width = "100%";
  } else {
    navbar.style.marginTop = "1.5rem";
    navbar.style.width = "calc(100% - 10%)";
  }
});

if (user === "login") {
  navbar.innerHTML = `<div class="logo-burger">
  <a href="/"><img src="${
    window.origin
  }/assets/Logo.svg" alt="logo-fixndrive" /></a>
  <div>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </div>
</div>
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
        <img src="${
          window.origin
        }/assets/arrow-down.svg" alt="arrow-down-icon" />
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
      ><img src="${
        window.origin
      }/assets/notif-icon.svg" alt="notif-icon" class=${
    path === "/notif.html" ? "active-nav" : ""
  }
    /></a>
    <div class="profile-wrap">
      <img src="${window.origin}/assets/profile-pic.png" alt="profile-pic" />
      <img src="${window.origin}/assets/arrow-down.svg" alt="arrow-down-icon" />
  
      <ul class="profile-dropdown" id="profile-dropdown">
        <li><a href="/profile.html">Profile Saya</a></li>
        <li><a href="/settings.html">Pengaturan</a></li>
        <li><a href="/" onclick="logout()">Keluar</a></li>
      </ul>
    </div>
  </div>`;
} else if (user === null || "notlogin") {
  if (navbar) {
    navbar.innerHTML = `<div class="logo-burger">
      <a href="/"><img src="${
        window.origin
      }/assets/Logo.svg" alt="logo-fixndrive" /></a>
      <div>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
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
          <img src="${
            window.origin
          }/assets/arrow-down.svg" alt="arrow-down-icon" />
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

const hamburger = document.querySelector(".fa");

hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".desktop-navbar > ul");
  const btnNav = document.querySelector(".btn-nav");
  const profileNav = document.querySelector(".profile-nav");
  navList.classList.toggle("active");
  if (user === "login") {
    profileNav.classList.toggle("active");
  } else if (user === null || "notlogin") {
    btnNav.classList.toggle("active");
  }

  hamburger.classList.toggle("fa-times");
});

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
    id: 1,
    img: `${window.origin}/assets/motorcare-img1.jpg`,
    alt: "motorcare-img1",
    title: "Produk penting untuk mencuci sepeda motor",
    date: "15 Oktober 2023",
    more: "artikel/motor",
  },
  {
    id: 2,
    img: `${window.origin}/assets/motorcare-img2.jpg`,
    alt: "motorcare-img2",
    title: "Cara mengganti oli dengan mudah secara mandiri",
    date: "16 Oktober 2023",
    more: "/artikel/motor",
  },
  {
    id: 3,
    img: `${window.origin}/assets/motorcare-img3.jpg`,
    alt: "motorcare-img3",
    title: "Kesalahan amatir pemilik motor baru",
    date: "17 Oktober 2023",
    more: "/artikel/motor",
  },
  {
    id: 4,
    img: `${window.origin}/assets/motorcare-img4.jpg`,
    alt: "motorcare-img4",
    title: "Jenis-jenis motor yang perlu anda ketahui!",
    date: "18 Oktober 2023",
    more: "/artikel/motor",
  },
  {
    id: 5,
    img: `${window.origin}/assets/motorcare-img5.jpg`,
    alt: "motorcare-img5",
    title: "Cara mencuci helm dengan mudah di rumah!",
    date: "19 Oktober 2023",
    more: "/artikel/motor",
  },
  {
    id: 6,
    img: `${window.origin}/assets/motorcare-img6.jpg`,
    alt: "motorcare-img6",
    title: "Perbedaan mengisi ban dengan nitrogen dan angin  biasa",
    date: "19 Oktober 2023",
    more: "/artikel/motor",
  },
];

let carcareItems = [
  {
    id: 1,
    img: `${window.origin}/assets/carcare-img1.jpg`,
    alt: "carcare-img1",
    title: "Produk penting untuk mencuci mobil",
    date: "15 Oktober 2023",
  },
  {
    id: 2,
    img: `${window.origin}/assets/carcare-img2.jpg`,
    alt: "carcare-img2",
    title: "Cara mengisi air wiper mobil dengan benar",
    date: "16 Oktober 2023",
  },
  {
    id: 3,
    img: `${window.origin}/assets/carcare-img3.jpg`,
    alt: "carcare-img3",
    title: "Kapan sebaiknya ban mobil diganti?",
    date: "17 Oktober 2023",
  },
  {
    id: 4,
    img: `${window.origin}/assets/carcare-img4.jpg`,
    alt: "carcare-img4",
    title: "Kenali lampu indikator pada panel mobil Anda!",
    date: "18 Oktober 2023",
  },
  {
    id: 5,
    img: `${window.origin}/assets/carcare-img5.jpg`,
    alt: "carcare-img5",
    title: "Matic vs Manual, Mana yang bagus?",
    date: "19 Oktober 2023",
  },
  {
    id: 6,
    img: `${window.origin}/assets/carcare-img6.jpg`,
    alt: "carcare-img6",
    title: "Perbedaan antara aki kering dan aki basah",
    date: "19 Oktober 2023",
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
    <h5><img src="${window.origin}/assets/clipboard-list.svg" alt="clipboard-list-icon">${item.date}</h5>
      <h3>${item.title}</h3>
      <a class="card-btn" href=${item.more}/${item.id}.html>Selengkapnya</a>
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
  <a href="#"><img src="${window.origin}/assets/Logo-footer.svg" alt="footer-logo" /></a>
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

// CAROUSEL SLIDER
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".carousel-slide");
  const wrapper = document.querySelector(".carousel-wrapper");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const translateValue = slideIndex * -100;
  wrapper.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// const intervalCarousel = setInterval(nextSlide, 4000);

showSlides();
