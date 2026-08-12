/* =========================================================
   1. MOBILE NAV TOGGLE
   Shows/hides the nav menu on small screens and toggles the
   hamburger icon into an "X" when open.
   ========================================================= */
function setupNavToggle() {
  const toggleBtn = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    toggleBtn.classList.toggle("is-open");
  });

  // Auto-close the menu after tapping a link, so it doesn't
  // stay open once the user navigates on mobile.
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggleBtn.classList.remove("is-open");
    });
  });
}

/* =========================================================
   2. FOOTER YEAR
   Fills in the current year automatically so it never goes
   stale.
   ========================================================= */
function setupFooterYear() {
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();
}

/* =========================================================
   RUN EVERYTHING ONCE THE DOM IS READY
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  setupFooterYear();
});
