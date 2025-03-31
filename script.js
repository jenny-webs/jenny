document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-audio");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
  });
