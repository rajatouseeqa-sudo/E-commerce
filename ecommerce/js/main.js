/* ═══════════════════════════════════════
   Brand Ecommerce — Main JS
   Shared utilities used across all pages
   ═══════════════════════════════════════ */

// ─── Toast notification ───
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Countdown Timer ───
let totalSeconds = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;

function pad(n) { return String(n).padStart(2, '0'); }

function tickCountdown() {
  if (totalSeconds <= 0) return;
  totalSeconds--;
  const ids = ['h-days','h-hours','h-mins','h-secs'];
  const vals = [
    Math.floor(totalSeconds / 86400),
    Math.floor((totalSeconds % 86400) / 3600),
    Math.floor((totalSeconds % 3600) / 60),
    totalSeconds % 60
  ];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pad(vals[i]);
  });
}

if (document.getElementById('h-days')) {
  setInterval(tickCountdown, 1000);
}

// ─── Sidebar accordion toggle ───
function toggleSection(id) {
  const body = document.getElementById(id);
  const iconId = id.replace('-body', '-icon');
  const icon = document.getElementById(iconId);
  if (!body) return;
  body.classList.toggle('hidden');
  if (icon) icon.textContent = body.classList.contains('hidden') ? '∨' : '∧';
}

// ─── Remove active filter badge ───
function removeFilter(btn) {
  btn.closest('span').remove();
}

// ─── Grid / List view toggle ───
let currentView = 'grid';

function setView(mode) {
  currentView = mode;
  const container = document.getElementById('products-container');
  const gridBtn = document.getElementById('grid-btn');
  const listBtn = document.getElementById('list-btn');
  if (!container) return;

  if (mode === 'grid') {
    container.className = 'grid grid-cols-3 gap-4 mb-4';
    gridBtn.className = 'px-3 py-1.5 text-sm bg-blue-600 text-white transition';
    listBtn.className = 'px-3 py-1.5 text-sm bg-white text-gray-600 hover:bg-gray-50 transition';
  } else {
    container.className = 'flex flex-col mb-4';
    listBtn.className = 'px-3 py-1.5 text-sm bg-blue-600 text-white transition';
    gridBtn.className = 'px-3 py-1.5 text-sm bg-white text-gray-600 hover:bg-gray-50 transition';
  }
  renderProducts();
}

// ─── Move to cart (saved for later) ───
function moveToCart(btn) {
  const card = btn.closest('.border');
  if (card) {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    setTimeout(() => card.remove(), 300);
  }
  showToast('✓ Item moved to cart!');
}
