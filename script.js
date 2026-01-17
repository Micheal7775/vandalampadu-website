/* SEARCH */
function toggleSearch() {
  const box = document.getElementById("searchBox");
  if (!box) return;
  box.classList.toggle("active");
}

/* MENU */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.style.display =
    (menu.style.display === "flex") ? "none" : "flex";
}

/* SLIDER */
document.querySelectorAll(".slider").forEach(slider => {

  const slides = slider.querySelector(".slides");

  // 👇 img + video both count
  const items = slides.children;

  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let index = 0;

  function show(i) {
    index = (i + items.length) % items.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.onclick = () => show(index - 1);
  next.onclick = () => show(index + 1);
});

function openModal(type) {

  const overlay = document.getElementById("legalOverlay");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  const content = {
    terms: {
      title: "Terms of Use",
      text: "This website is for informational purposes only. Content may not be reused without permission."
    },
    privacy: {
      title: "Privacy Notice",
      text: "No personal data is collected unless voluntarily provided by the user."
    },
    cookies: {
      title: "Cookie Preferences",
      text: "Cookies are used only to improve user experience."
    },
    language: {
      title: "Country & Language Options",
      text: "Currently available in English. Tamil language support is planned."
    },
    accessibility: {
      title: "Accessibility Support",
      text: "This website is designed to be accessible to all users."
    }
  };

  title.textContent = content[type].title;
  body.textContent = content[type].text;

  overlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // stop background scroll
}

function closeModal() {
  document.getElementById("legalOverlay").style.display = "none";
  document.body.style.overflow = "auto"; // enable scroll back
}

  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {   // 200px keela pona show
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
