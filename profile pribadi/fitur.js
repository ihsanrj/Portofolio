document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;

    formStatus.innerText = `Terima kasih, ${nameInput}! Pesan kamu berhasil dikirim.`;

    contactForm.reset();
  });
});
