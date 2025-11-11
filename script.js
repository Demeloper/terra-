const catalogSource = 'https://t3rraignis.bigcartel.com';

const products = [
  {
    name: 'Euclid mug',
    type: 'mug',
    description: 'Deep evergreen glaze with Euclidean diagrams carved into the slip.',
    price: '€20',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/67b02dca-1ac7-43b9-8b40-715f45da3604/euclid-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/euclid-mug`
  },
  {
    name: 'Blue roses mug',
    type: 'mug',
    description: 'Cobalt roses and tattoo flash script wrapping a milky-white mug.',
    price: '€23',
    availability: 'out of stock',
    image: 'https://assets.bigcartel.com/product_images/3a6d9e59-ff99-4cd9-a8c7-3b37ed9b46aa/blue-roses-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/blue-roses-mug`
  },
  {
    name: 'Tessellations ashtray',
    type: 'ashtray',
    description: 'Checkerboard tessellations with a gloss over the carved trench.',
    price: '€27',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/bce85fe1-6153-4592-8d34-f86fbfabb61a/tessellations-ashtray.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/tessellations-ashtray`
  },
  {
    name: 'Balaclava ashtray',
    type: 'ashtray',
    description: 'A balaclava illustration pulled from the recent biker sketchbook.',
    price: '€23',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/320d7221-150d-4ca5-bff5-e53f08f23328/balaclava-ashtray.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/balaclava-ashtray`
  },
  {
    name: 'Vintage mug',
    type: 'mug',
    description: 'Cafe-racer graphics over a rust + forest dip glaze.',
    price: '€30',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/f9bad290-9ec8-431a-b6fc-c37e264a3219/vintage-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/vintage-mug`
  },
  {
    name: 'Moon mug',
    type: 'mug',
    description: 'Phases of the moon circling a matte night-sky glaze.',
    price: '€23',
    availability: 'out of stock',
    image: 'https://assets.bigcartel.com/product_images/019b8934-3fef-4388-9880-947929bf9c4c/moon-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/moon-mug`
  },
  {
    name: 'Dagger ashtray',
    type: 'ashtray',
    description: 'A dagger-and-rose flash paired with amber stained glaze.',
    price: '€27',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/f70ae1e2-3084-4a07-8562-0852f03510cf/dagger-ashtray.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/dagger-ashtray`
  },
  {
    name: 'Hibiscus mug',
    type: 'mug',
    description: 'High-contrast hibiscus petals wrapping a heavy stoneware mug.',
    price: '€25',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/a61df5ac-3788-4c37-a085-4b6a998ccb23/hibiscus-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/hibiscus-mug`
  },
  {
    name: 'Moon ashtray',
    type: 'ashtray',
    description: 'Celestial vignette with cratered grooves across the tray.',
    price: '€25',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/db7342af-3194-4563-b5a3-c782ad73d685/moon-ashtray.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/moon-ashtray`
  },
  {
    name: 'Pickles ashtray',
    type: 'ashtray',
    description: 'Playful pickle characters ring the rim—straight from the Instagram reel.',
    price: '€25',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/b57fb779-855d-4011-baa2-19256d1adc84/pickles-ashtray.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/pickles-ashtray`
  },
  {
    name: 'Swan mug',
    type: 'mug',
    description: 'White swans contrasted against a midnight backdrop.',
    price: '€27',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/8579cab3-1feb-4389-92cc-822b0b01e555/swan-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/swan-mug`
  },
  {
    name: 'Knife mug',
    type: 'mug',
    description: 'Knife-and-flame illustration wrapping a satin charcoal glaze.',
    price: '€25',
    availability: 'in stock',
    image: 'https://assets.bigcartel.com/product_images/f32ca01c-37e0-4b34-a013-d941456b21e2/knife-mug.jpg?auto=format&fit=max&w=900',
    link: `${catalogSource}/product/knife-mug`
  }
];

const productGrid = document.getElementById('productGrid');
const template = document.getElementById('product-card-template');
const looklistCountEl = document.getElementById('looklistCount');
const toast = document.getElementById('actionStatus');
let looklistCount = 0;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2400);
}

function renderProducts() {
  if (!productGrid || !template) return;
  productGrid.innerHTML = '';

  products.forEach((product) => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector('img');
    const badge = clone.querySelector('.badge');
    const name = clone.querySelector('.product-name');
    const desc = clone.querySelector('.product-desc');
    const typeEl = clone.querySelector('.product-type');
    const price = clone.querySelector('.price');
    const chip = clone.querySelector('.availability-chip');
    const reserveButton = clone.querySelector('[data-action="reserve"]');
    const externalLink = clone.querySelector('.external-link');

    img.src = product.image;
    img.alt = product.name;
    const formattedType = product.type.charAt(0).toUpperCase() + product.type.slice(1);
    badge.textContent = formattedType;
    name.textContent = product.name;
    typeEl.textContent = `${formattedType} · ceramic`;
    desc.textContent = product.description;
    price.textContent = product.price;

    const normalizedStatus = product.availability.toLowerCase();
    chip.textContent = normalizedStatus === 'in stock' ? 'In stock' : 'Sold out';
    chip.dataset.status = normalizedStatus;

    const isAvailable = normalizedStatus === 'in stock';
    reserveButton.disabled = !isAvailable;
    reserveButton.textContent = isAvailable ? 'Add to looklist' : 'Sold out';

    reserveButton.addEventListener('click', () => {
      looklistCount += 1;
      looklistCountEl.textContent = looklistCount;
      showToast(`${product.name} saved. Tap View listing to purchase on Big Cartel.`);
    });

    externalLink.href = product.link;
    externalLink.addEventListener('click', () => {
      showToast('Opening Big Cartel listing in a new tab.');
    });

    productGrid.appendChild(clone);
  });
}

renderProducts();

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const waitlistForm = document.querySelector('.waitlist-form');
waitlistForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Thanks! We will email the ceramic drop schedule soon.');
  event.currentTarget.reset();
});

const heroButtons = document.querySelectorAll('[data-action="notify"], [data-action="viewLookbook"], [data-action="waitlist"], [data-action="process"]');
heroButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const label = button.textContent?.trim() || 'Action';
    showToast(`${label} coming soon — visit Big Cartel for live checkout.`);
  })
);

const looklistButton = document.querySelector('[data-action="looklist"]');
looklistButton?.addEventListener('click', () => {
  showToast(`Looklist holds ${looklistCount || 0} item${looklistCount === 1 ? '' : 's'}. Use View listing to buy on Big Cartel.`);
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const floatingLogo = document.querySelector('.floating-logo');
if (floatingLogo) {
  const state = {
    x: window.innerWidth * 0.2,
    y: window.innerHeight * 0.15,
    vx: 0.12, // px per ms
    vy: 0.09
  };
  const size = { width: floatingLogo.offsetWidth, height: floatingLogo.offsetHeight };
  const updateSize = () => {
    size.width = floatingLogo.offsetWidth;
    size.height = floatingLogo.offsetHeight;
  };
  window.addEventListener('resize', () => {
    updateSize();
    state.x = Math.min(state.x, window.innerWidth - size.width);
    state.y = Math.min(state.y, window.innerHeight - size.height);
  });

  let lastTime = performance.now();
  const step = (time) => {
    const delta = time - lastTime;
    lastTime = time;

    const maxX = Math.max(0, window.innerWidth - size.width);
    const maxY = Math.max(0, window.innerHeight - size.height);

    state.x += state.vx * delta;
    state.y += state.vy * delta;

    if (state.x <= 0 || state.x >= maxX) {
      state.vx *= -1;
      state.x = Math.min(Math.max(state.x, 0), maxX);
    }
    if (state.y <= 0 || state.y >= maxY) {
      state.vy *= -1;
      state.y = Math.min(Math.max(state.y, 0), maxY);
    }

    floatingLogo.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
