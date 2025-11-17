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

const gallerySection = document.getElementById('gallery');
const galleryButton = document.querySelector('[data-action="viewGallery"]');
galleryButton?.addEventListener('click', () => {
  gallerySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const toastButtons = document.querySelectorAll('[data-action="waitlist"], [data-action="process"]');
toastButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const label = button.textContent?.trim() || 'Action';
    showToast(`${label} coming soon — visit Big Cartel for live checkout.`);
  })
);

const rootElement = document.documentElement;
const scrollPalette = {
  magenta: [255, 0, 168],
  black: [5, 5, 5]
};

const lerp = (start, end, t) => start + (end - start) * t;
const lerpColor = (origin, target, t) => origin.map((channel, index) => Math.round(lerp(channel, target[index], t)));

function applyScrollPalette(progress) {
  const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
  const pinkX = lerp(12, 80, ease);
  const pinkY = lerp(18, 0, ease);
  const blueX = lerp(80, 12, ease);
  const blueY = lerp(0, 18, ease);
  rootElement.style.setProperty('--pink-x', `${pinkX}%`);
  rootElement.style.setProperty('--pink-y', `${pinkY}%`);
  rootElement.style.setProperty('--blue-x', `${blueX}%`);
  rootElement.style.setProperty('--blue-y', `${blueY}%`);

  const accentColor = lerpColor(scrollPalette.magenta, scrollPalette.black, ease);
  const accentAltColor = lerpColor(scrollPalette.black, scrollPalette.magenta, ease);
  const formatRgb = (colorArray) => colorArray.join(', ');

  rootElement.style.setProperty('--accent', `rgb(${formatRgb(accentColor)})`);
  rootElement.style.setProperty('--accent-alt', `rgb(${formatRgb(accentAltColor)})`);
  rootElement.style.setProperty('--accent-soft', `rgba(${formatRgb(accentColor)}, 0.2)`);
  rootElement.style.setProperty('--pink-radial', `rgba(${formatRgb(accentColor)}, 0.28)`);
  rootElement.style.setProperty('--blue-radial', `rgba(${formatRgb(accentAltColor)}, 0.24)`);
}

let scheduled = false;
function handleScrollPalette() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll <= 0 ? 0 : Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    applyScrollPalette(progress);
  });
}

window.addEventListener('scroll', handleScrollPalette, { passive: true });
window.addEventListener('wheel', handleScrollPalette, { passive: true });
applyScrollPalette(0);

const looklistButton = document.querySelector('[data-action="looklist"]');
looklistButton?.addEventListener('click', () => {
  showToast(`Looklist holds ${looklistCount || 0} item${looklistCount === 1 ? '' : 's'}. Use View listing to buy on Big Cartel.`);
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
