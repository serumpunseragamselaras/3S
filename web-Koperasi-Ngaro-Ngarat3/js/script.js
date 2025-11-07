// Feather Icons
feather.replace();

// === Navbar Toggle ===
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Tutup nav jika klik di luar
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// === Search Toggle ===
const searchBtn = document.querySelector("#search");
const searchForm = document.querySelector("#search-form");
const searchInput = document.getElementById("search-input");

searchBtn.onclick = (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchInput.focus();
};

// Fungsi pencarian langsung saat mengetik
searchInput.addEventListener("keyup", function () {
  let input = searchInput.value.toLowerCase();
  let items = document.querySelectorAll(".menu-card h3");

  items.forEach((item) => {
    let card = item.closest(".menu-card");
    if (item.textContent.toLowerCase().includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// === Contact Form ===
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Tombol loading
  btn.disabled = true;
  btn.textContent = "Mengirim...";

  fetch(form.action, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      msg.textContent = "✅ Pesan berhasil dikirim!";
      msg.style.color = "lightgreen";
      msg.classList.add("show");
      form.reset();
    })
    .catch(() => {
      msg.textContent = "❌ Gagal mengirim, coba lagi!";
      msg.style.color = "red";
      msg.classList.add("show");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Kirim Pesan";
    });
});
