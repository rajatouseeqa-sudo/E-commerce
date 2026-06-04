# Brand Ecommerce — Complete Frontend

A full ecommerce UI built from the Figma designs.
Uses **HTML5 + Tailwind CSS (CDN) + Vanilla JavaScript**.
No build tools, no npm — just open and run.

---

## 📁 File Structure

```
ecommerce/
├── index.html            ← Homepage (web-main)
├── products.html         ← Product listing — grid & list view
├── product-detail.html   ← Product detail page
├── cart.html             ← Shopping cart page
├── css/
│   └── main.css          ← Global styles, animations, utilities
└── js/
    ├── main.js           ← Shared: countdown, toast, view toggle
    ├── products.js       ← Product grid/list rendering
    └── cart.js           ← Cart quantities and totals
```

---

## 🚀 How to Run (3 options)

---

### ✅ Option 1 — Just Double-Click (Simplest)

1. Download / unzip the project folder
2. Open **index.html** directly in Chrome, Firefox, Edge, or Safari
3. Done — everything works instantly, no server needed

> 💡 All pages link to each other:
> Homepage → Products → Product Detail → Cart

---

### ✅ Option 2 — VS Code Live Server (Recommended for development)

**Step 1:** Install [VS Code](https://code.visualstudio.com/)

**Step 2:** Open VS Code, install the **Live Server** extension:
- Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
- Search "Live Server" → Install (by Ritwick Dey)

**Step 3:** Open the project folder in VS Code:
- File → Open Folder → select the `ecommerce` folder

**Step 4:** Right-click on `index.html` → **"Open with Live Server"**

**Step 5:** Browser opens at `http://127.0.0.1:5500` automatically ✅

> 💡 Any file saved auto-reloads the browser

---

### ✅ Option 3 — Python Local Server

If you have Python installed:

```bash
# Navigate to the project folder
cd path/to/ecommerce

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

---

## 📄 Pages & What They Cover

| File | Figma Screen | Features |
|------|-------------|----------|
| `index.html` | web-main.jpg | Hero, deals timer, category sections, inquiry form, recommended items, footer |
| `products.html` | web-gridview.jpg + web-listview.jpg | Sidebar filters, grid/list toggle, active filter tags, pagination |
| `product-detail.html` | web-detail.jpg | Image gallery, pricing tiers, spec table, tabs, related products, you may like |
| `cart.html` | web-cart.jpg | Qty controls, remove items, live totals, coupon, saved for later, trust badges |

---

## 🛠 How to Customize

### Change Colors
Open `css/main.css`, edit the `:root` CSS variables:
```css
:root {
  --blue: #1C7EE0;     /* Primary blue */
  --green: #22C55E;    /* Checkout button */
  --orange: #F97316;   /* Promo banner */
}
```

### Add Real Products
Open `js/products.js`, edit the `products` array:
```js
const products = [
  {
    id: 1,
    name: 'Your Product Name',
    price: 49.99,
    oldPrice: 79.99,    // null if no old price
    rating: 4.5,
    score: 8.2,
    orders: 230,
    shipping: 'Free Shipping',
    emoji: '📱',        // Replace with <img> for real images
    desc: 'Product description here...'
  },
  // add more...
];
```

### Replace Emoji with Real Images
In the product card functions inside `js/products.js`,
replace the emoji span with an `<img>` tag:
```html
<img src="images/product1.jpg" class="w-full h-44 object-contain p-4" />
```

### Change Countdown Timer
In `js/main.js`, edit this line to set your end date:
```js
let totalSeconds = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;
//                 ^days        ^hours       ^mins    ^secs
```

---

## 🌐 Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| HTML5 | Page structure | — |
| Tailwind CSS | Utility-first styling | CDN (latest) |
| Vanilla JavaScript | Interactivity, dynamic rendering | ES6+ |
| Google Fonts (Sora) | Typography | CDN |
| CSS Custom Properties | Theming & variables | — |

> No npm, no webpack, no React — runs in any browser, anywhere.

---

## 🔧 Browser Compatibility

Works in all modern browsers:
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

---

## 📱 Responsive Breakpoints (Tailwind)

| Breakpoint | Width | Behaviour |
|-----------|-------|-----------|
| Default | < 768px | Mobile: single column |
| `md:` | 768px+ | Tablet: 2 columns |
| `lg:` | 1024px+ | Desktop: full layout |

---

## 💡 Quick Tips

- **Ctrl+Click** (or Cmd+Click) any link in VS Code to open files
- Use **F12** in browser to open DevTools and inspect elements
- The **Toast notification** (`showToast("message")`) can be called from any page
- All pages share `css/main.css` and `js/main.js` — edit once, works everywhere
