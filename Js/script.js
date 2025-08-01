// Function untuk memperbarui waktu secara real-time, termasuk jam, menit, dan detik
function updateCurrentTime() {
  const timeElement = document.getElementById("currenttime");
  if (timeElement) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Memformat tanggal
    const formattedDate = now.toLocaleDateString("en-US", options);

    // Memformat jam, menit, dan detik
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Menggunakan format 24 jam
    });

    // Menggabungkan tanggal dan waktu
    timeElement.textContent = `${formattedDate}, ${formattedTime}`;
  }
}

// Function utama yang dijalankan saat dokumen siap
document.addEventListener("DOMContentLoaded", () => {
  // Memanggil fungsi pertama kali saat halaman dimuat
  updateCurrentTime();

  // Memanggil fungsi updateCurrentTime setiap 1 detik (1000 milidetik)
  setInterval(updateCurrentTime, 1000);
});

// Function untuk menambahkan efek animasi pada elemen saat di-scroll
function animateOnScroll() {
  const cards = document.querySelectorAll(".card");
  const heroContent = document.querySelector(".hero h1");

  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add("visible");
    }
  });

  if (heroContent) {
    const heroPosition = heroContent.getBoundingClientRect().top;
    if (heroPosition < window.innerHeight / 1.5) {
      heroContent.classList.add("visible");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Memperbarui waktu saat halaman dimuat
  updateCurrentTime();

  // Menambahkan event listener untuk scroll
  window.addEventListener("scroll", animateOnScroll);

  // Memastikan animasi dijalankan saat halaman pertama kali dimuat
  animateOnScroll();

  const logo = document.querySelector(".logo a");
  if (logo) {
    logo.addEventListener("click", (event) => {
      alert("Selamat datang di halaman utama!");
    });
  }
});
