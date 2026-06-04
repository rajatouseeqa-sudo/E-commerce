/* ═══════════════════════════════════════
   Brand Ecommerce — Cart JS
   Handles cart quantities and totals
   ═══════════════════════════════════════ */

// Item quantities (qty, price per unit)
const cartItems = {
  1: { qty: 9,  price: 78.99 },
  2: { qty: 3,  price: 39.00 },
  3: { qty: 1,  price: 170.50 },
};

const DISCOUNT = 60.00;
const TAX      = 14.00;

// ─── Change quantity ───
function changeQty(id, delta) {
  const item = cartItems[id];
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  const el = document.getElementById(`qty-${id}`);
  if (el) el.textContent = item.qty;
  updateTotals();
}

// ─── Remove item ───
function removeItem(id) {
  const row = document.querySelector(`[data-item="${id}"]`);
  if (row) {
    row.style.transition = 'opacity 0.3s ease, max-height 0.3s ease';
    row.style.opacity = '0';
    setTimeout(() => row.remove(), 300);
  }
  delete cartItems[id];
  updateTotals();
  showToast('🗑 Item removed');
}

// ─── Recalculate totals ───
function updateTotals() {
  let subtotal = 0;
  Object.values(cartItems).forEach(item => {
    subtotal += item.qty * item.price;
  });
  const total = subtotal - DISCOUNT + TAX;

  const subtotalEl = document.getElementById('subtotal');
  const totalEl    = document.getElementById('total');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl)    totalEl.textContent    = `$${Math.max(0, total).toFixed(2)}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', updateTotals);
