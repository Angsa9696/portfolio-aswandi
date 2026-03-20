// =========================
// SCROLL FADE ANIMATION
// =========================
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.classList.add("fade");
});

const revealOnScroll = () => {
  const screenHeight = window.innerHeight;

  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;

    if (position < screenHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// =========================
// DARK MODE (MANUAL + SAVE)
// =========================
const darkToggle = document.getElementById("dark-toggle");

// cek preferensi user
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
} else {
  // kalau belum ada preferensi → pakai auto
  setAutoTheme();
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // simpan pilihan user
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// =========================
// MUSIC CONTROL
// =========================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

if (music && musicBtn) {
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicBtn.textContent = "🔇";
    } else {
      music.play();
      musicBtn.textContent = "🔊";
    }

    isPlaying = !isPlaying;
  });
}
let volume = 0;

const fadeIn = setInterval(() => {
  if (volume < 0.2) {
    volume += 0.01;
    music.volume = volume;
  } else {
    clearInterval(fadeIn);
  }
}, 100);
// =========================
// CURSOR
// =========================
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}
// =========================
// LOADER
// =========================
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
// =========================
// BACKGROUND GERAK
// =========================
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.querySelector(".hero").style.backgroundPositionY =
    scroll * 0.5 + "px";
});
// =========================
// TYPING HERO
// =========================
const text = ["Web Developer", "ML Enthusiast", "UI/UX Learner"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const currentText = text[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
// =========================
// NAVBAR ACTIVE
// =========================
const allSections = document.querySelectorAll("section, .hero");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// =========================
// PROJECT FILTER
// =========================
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // filter project
    projects.forEach((project) => {
      const category = project.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
// =========================
// AUTO DARK MODE (TIME BASED)
// =========================
function setAutoTheme() {
  const hour = new Date().getHours();

  if (hour >= 18 || hour < 6) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

setAutoTheme();
// =========================
// EASTER EGG (KONAMI CODE)
// =========================
const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let userInput = [];

document.addEventListener("keydown", (e) => {
  userInput.push(e.key);

  if (userInput.length > secretCode.length) {
    userInput.shift();
  }

  if (JSON.stringify(userInput) === JSON.stringify(secretCode)) {
    activateEasterEgg();
  }
});

// ✅ FIXED FUNCTION
function activateEasterEgg() {
  const modal = document.getElementById("easter-modal");
  const music = document.getElementById("bg-music");

  // tampilkan modal
  if (modal) {
    modal.classList.remove("hidden");
  }

  // 🌌 AKTIFKAN GALAXY MODE
  document.body.classList.add("galaxy-mode");

  // 🍃 tambah daun chaos
  const leavesContainer = document.querySelector(".leaves");

  if (leavesContainer) {
    for (let i = 0; i < 20; i++) {
      const leaf = document.createElement("span");
      leaf.innerHTML = "🍃";
      leaf.style.left = Math.random() * 100 + "%";
      leaf.style.animationDuration = 3 + Math.random() * 5 + "s";
      leavesContainer.appendChild(leaf);
    }
  }

  // 🎵 music epic
  if (music) {
    music.src = "music/music-epic.mp3"; // sesuaikan
    music.volume = 0.3;

    music.play().catch(() => {
      console.log("Autoplay diblok");
    });
  }

  // ✨ text
  showSecretText();
}

function closeEaster() {
  const modal = document.getElementById("easter-modal");
  const music = document.getElementById("bg-music");

  // 1. sembunyikan modal
  if (modal) {
    modal.classList.add("hidden");
  }

  // 2. hapus semua efek class
  document.body.classList.remove("galaxy-mode");

  // 3. reset background (hapus inline style)
  document.body.style.background = "";
  document.body.style.animation = "";
  document.body.style.backgroundSize = "";

  // 4. reset music ke awal
  if (music) {
    music.pause();
    music.currentTime = 0;

    // balik ke musik default (kalau ada)
    music.src = "music/ghibli.mp3"; // GANTI sesuai file awal kamu
  }

  // 5. hapus daun tambahan (yang dibuat saat easter egg)
  const leavesContainer = document.querySelector(".leaves");

  if (leavesContainer) {
    leavesContainer.innerHTML = `
      <span>🍃</span>
      <span>🍃</span>
      <span>🍃</span>
      <span>🍃</span>
    `;
  }

  // 6. hapus text SECRET kalau masih ada
  const secretText = document.querySelectorAll("div");
  secretText.forEach((el) => {
    if (el.innerText && el.innerText.includes("SECRET MODE")) {
      el.remove();
    }
  });
}

function showSecretText() {
  const text = document.createElement("div");
  text.innerText = "🔥 SECRET MODE ACTIVATED 🔥";

  text.style.position = "fixed";
  text.style.top = "20%";
  text.style.left = "50%";
  text.style.transform = "translateX(-50%)";
  text.style.fontSize = "30px";
  text.style.fontWeight = "bold";
  text.style.color = "#fff";
  text.style.zIndex = "9999";
  text.style.textShadow = "0 0 20px #ff00cc";

  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 3000);
}
// UNTUK HP
const logo = document.querySelector(".logo");
let tapCount = 0;

if (logo) {
  logo.addEventListener("click", () => {
    tapCount++;

    if (tapCount === 5) {
      activateEasterEgg();
      tapCount = 0;
    }

    setTimeout(() => {
      tapCount = 0;
    }, 2000);
  });
}
const modal = document.getElementById("easter-modal");
const closeBtn = document.getElementById("close-easter");

// tombol close
if (closeBtn) {
  closeBtn.addEventListener("click", closeEaster);
}

// klik luar modal
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeEaster();
    }
  });
}

// tekan ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeEaster();
  }
});

// // function close (FINAL FIX)
// function closeEaster() {
//   modal.classList.add("hidden");

//   document.body.classList.remove("galaxy-mode", "shake");

//   // reset music kalau ada
//   const music = document.getElementById("bg-music");
//   if (music) {
//     music.pause();
//     music.currentTime = 0;
//   }
// }
