/* ═══════════════════════════════════════
   Brand Ecommerce — Products JS
   Renders grid and list product cards
   ═══════════════════════════════════════ */

const products = [
  { id: 1, name: 'Canon Cmera EOS 2000, Black 10x zoom', price: 99.50, oldPrice: 1128.00, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📱', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { id: 2, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 3.5, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📲', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 3, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: null, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📱', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 4, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📷', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { id: 5, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📲', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { id: 6, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: null, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '⌚', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { id: 7, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '💻', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { id: 8, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '📱', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { id: 9, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: null, rating: 4, score: 7.5, orders: 154, shipping: 'Free Shipping', emoji: '🎧', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
];

function starHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="text-yellow-400">★</span>';
    else if (i === full && half) html += '<span class="text-yellow-400">½</span>';
    else html += '<span class="text-gray-300">★</span>';
  }
  return html;
}

function gridCardHTML(p) {
  return `
    <a href="product-detail.html" class="product-card block">
      <div class="card-img h-44">${p.emoji}</div>
      <div class="p-3">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="font-bold text-base text-gray-800">$${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<span class="text-xs text-gray-400 line-through">$${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="flex items-center gap-1 mb-1 text-xs">
          ${starHTML(p.rating)}
          <span class="text-gray-600 ml-1 font-medium">${p.score}</span>
        </div>
        <p class="text-xs text-gray-700 leading-tight mb-1">${p.name}</p>
        <p class="text-xs text-green-600 font-medium">${p.shipping}</p>
      </div>
    </a>`;
}

function listCardHTML(p) {
  return `
    <a href="product-detail.html" class="product-card-list">
      <div class="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center text-5xl shrink-0">${p.emoji}</div>
      <div class="flex-1">
        <p class="font-bold text-lg text-gray-800 mb-0.5">$${p.price.toFixed(2)}
          ${p.oldPrice ? `<span class="text-sm text-gray-400 line-through font-normal ml-2">$${p.oldPrice.toFixed(2)}</span>` : ''}
        </p>
        <div class="flex items-center gap-2 text-xs mb-1">
          ${starHTML(p.rating)}
          <span class="text-gray-600">${p.score}</span>
          <span class="text-gray-400">•</span>
          <span class="text-gray-500">${p.orders} orders</span>
          <span class="text-gray-400">•</span>
          <span class="text-green-600 font-medium">${p.shipping}</span>
        </div>
        <p class="font-semibold text-sm text-gray-800 mb-1">${p.name}</p>
        <p class="text-xs text-gray-500 leading-relaxed line-clamp-2">${p.desc}</p>
        <p class="text-blue-600 text-xs mt-1 hover:underline cursor-pointer">View details</p>
      </div>
      <button onclick="event.preventDefault(); showToast('❤️ Saved!')" class="self-start text-xl text-gray-300 hover:text-blue-600 transition ml-2">🤍</button>
    </a>`;
}

function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;
  container.innerHTML = products
    .map(p => currentView === 'grid' ? gridCardHTML(p) : listCardHTML(p))
    .join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderProducts);
