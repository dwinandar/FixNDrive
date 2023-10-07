// PASSWORD TOGGLE SHOW/HIDE
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword?.addEventListener("click", () => {
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
