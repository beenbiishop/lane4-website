const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (header) {
  const syncHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader);
}

if (menuToggle && mobileNav) {
  const setMenuState = (isOpen) => {
    mobileNav.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    setMenuState(!mobileNav.classList.contains("open"));
  });

  document.addEventListener("click", (event) => {
    if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuState(false);
    }
  });
}
