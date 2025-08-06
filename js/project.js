  const items = [
    {
      id: 1,
      title: "SRS Talent Connect",
      brand: "virump",
      description: "An open-source skilling platform to explore, learn, and grow.",
      tags: ["Tailwind", "Next.js", "PLpgSQL"],
      imageUrl: "/imges/srs.png",
      link: "https://github.com/virump/srs-talent-connect"
    },
    {
      id: 2,
      title: " SAFE-HER",
      brand: "virump",
      description: "A women’s safety web app with location tracking and emergency alert features for quick help during unsafe situations.",
      tags: ["Python", "Django", "HTML"],
      imageUrl: "/imges/safeher.png",
      link: "https://github.com/virump/SAFE-HER"
    },
    {
      id: 3,
      title: " Chess-Game",
      brand: "virump",
      description: "A basic browser-based chess game allowing two players to play classic chess on a responsive board.",
      tags: ["Nodejs", "Ejs", "CSS"],
      imageUrl: "/imges/chessgame.png",
      link: "https://github.com/virump/Chess-Game"
    },
   {
      id: 4,
      title: "Spotify‑clone",
      brand: "virump",
      description: "A front-end clone of the Spotify web player and playback simulation.",
      tags: ["UI/UX", "Frontend", "CSS"],
      imageUrl: "/imges/spotify.png",
      link: "https://github.com/virump/Spotify-clone"
    }
  ];

  let activeIndex = 0;
  const container = document.getElementById("carouselContainer");
  const dotsContainer = document.getElementById("dotsContainer");

  function renderCarousel() {
    container.innerHTML = "";
    dotsContainer.innerHTML = "";

    items.forEach((item, idx) => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener";

      if (idx === activeIndex) card.classList.add("active");
      else if (idx === (activeIndex + 1) % items.length) card.classList.add("next");
      else if (idx === (activeIndex - 1 + items.length) % items.length) card.classList.add("prev");

      card.innerHTML = `
        <div class="card-img" style="background-image: url(${item.imageUrl})"></div>
        <div class="card-content">
          <h3>${item.title}</h3>
          <p><strong>${item.brand}</strong></p>
          <p>${item.description}</p>
          <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <span class="learn-more">Learn more →</span>
        </div>
      `;

      container.appendChild(card);

      const dot = document.createElement("span");
      dot.className = "dot" + (idx === activeIndex ? " active" : "");
      dot.onclick = () => {
        activeIndex = idx;
        renderCarousel();
      };
      dotsContainer.appendChild(dot);
    });
  }

  document.querySelector(".prev-btn").onclick = () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    renderCarousel();
  };

  document.querySelector(".next-btn").onclick = () => {
    activeIndex = (activeIndex + 1) % items.length;
    renderCarousel();
  };

  renderCarousel();

  // Auto-slide every 5s
  setInterval(() => {
    activeIndex = (activeIndex + 1) % items.length;
    renderCarousel();
  }, 5000);