// === kookat Deep Space Shared JS ===
// Generates CSS-only starfield backgrounds

function generateStarsCSS() {
  const smallStars = [];
  const mediumStars = [];
  const bigStars = [];

  for (let i = 0; i < 700; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    smallStars.push(`${x}px ${y}px rgba(232, 230, 240, ${0.3 + Math.random() * 0.5})`);
  }

  for (let i = 0; i < 200; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    mediumStars.push(`${x}px ${y}px rgba(201, 168, 76, ${0.3 + Math.random() * 0.4})`);
  }

  for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    bigStars.push(`${x}px ${y}px rgba(74, 143, 204, ${0.3 + Math.random() * 0.5})`);
  }

  const style = document.createElement('style');
  style.id = 'starfield-css';
  style.textContent = `
    :root {
      --stars-small: ${smallStars.join(',\n')};
      --stars-medium: ${mediumStars.join(',\n')};
      --stars-big: ${bigStars.join(',\n')};
    }
  `;
  document.head.appendChild(style);
}

function createStarfield() {
  generateStarsCSS();
  const container = document.createElement('div');
  container.className = 'stars-container';
  container.innerHTML = '<div class="stars"></div>';
  document.body.prepend(container);
}

function createNebula() {
  const nebula = document.createElement('div');
  nebula.className = 'bg-nebula';
  document.body.prepend(nebula);
}

document.addEventListener('DOMContentLoaded', () => {
  createNebula();
  createStarfield();
});
