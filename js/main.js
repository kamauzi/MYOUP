const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

const hero = document.querySelector(".hero");
const heroImages = [
  "assets/images/hero.jpeg",
  "assets/images/gallery/gallery1.jpeg",
  "assets/images/gallery/gallery2.jpeg",
  "assets/images/gallery/gallery3.jpeg",
  "assets/images/gallery/gallery4.jpeg",
  "assets/images/gallery/gallery6.jpeg",
  "assets/images/gallery/gallery7.jpeg"
];
let currentHeroImage = 0;
if (hero) {
  setInterval(() => {
    currentHeroImage = (currentHeroImage + 1) % heroImages.length;
    hero.style.backgroundImage = `linear-gradient(rgba(15, 61, 38, 0.60), rgba(15, 61, 38, 0.60)), url("${heroImages[currentHeroImage]}")`;
  }, 5000);
}
