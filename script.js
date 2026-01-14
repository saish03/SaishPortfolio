// ================= script.js (UNCHANGED & SAFE) =================
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-target");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
});
