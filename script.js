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
// DARK MODE
// =========================
const darkToggle = document.getElementById("dark-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
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

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
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
