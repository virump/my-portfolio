const images = [
  "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "/imges/yash.jpg",
  "https://images.pexels.com/photos/32423809/pexels-photo-32423809/free-photo-of-aerial-view-of-kayaking-at-robberg-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "/imges/viru2.jpg",
  "https://images.pexels.com/photos/32396739/pexels-photo-32396739/free-photo-of-serene-motorcycle-ride-through-bamboo-grove.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "/imges/jay.jpg",
  "https://images.pexels.com/photos/32304900/pexels-photo-32304900/free-photo-of-scenic-view-of-cape-town-s-twelve-apostles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const galleryContainer = document.querySelector(".gallery-container");
let activeIndex = null;
let autoPlay = false;
let autoPlayDelay = 3000;
let intervalId = null;

// Create image items
images.forEach((src, index) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");
  div.style.backgroundImage = `url(${src})`;
  div.tabIndex = 0;
  div.setAttribute("aria-label", `Image ${index + 1} of ${images.length}`);
  div.setAttribute("role", "button");

  div.addEventListener("click", () => {
    if (activeIndex === index) {
      activeIndex = null;
    } else {
      activeIndex = index;
    }
    updateGallery();
  });

  div.addEventListener("mouseenter", () => {
    if (!autoPlay) {
      activeIndex = index;
      updateGallery();
    }
  });

  div.addEventListener("mouseleave", () => {
    if (!autoPlay) {
      activeIndex = null;
      updateGallery();
    }
  });

  div.addEventListener("focus", () => {
    div.classList.add("focused");
  });

  div.addEventListener("blur", () => {
    div.classList.remove("focused");
  });

  div.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      div.click();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = index > 0 ? index - 1 : images.length - 1;
      galleryContainer.children[prev].focus();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = index < images.length - 1 ? index + 1 : 0;
      galleryContainer.children[next].focus();
    }
  });

  galleryContainer.appendChild(div);
});

// Update the gallery styles
function updateGallery() {
  [...galleryContainer.children].forEach((child, idx) => {
    child.classList.toggle("active", idx === activeIndex);
  });
}

// Auto-play setup
if (autoPlay) {
  intervalId = setInterval(() => {
    activeIndex = activeIndex === null ? 0 : (activeIndex + 1) % images.length;
    updateGallery();
  }, autoPlayDelay);
}
