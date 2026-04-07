// ═══════════════════════════════════════════════════
// ─── GAMEZONE CORE (app.js) ────────────────────────
// ═══════════════════════════════════════════════════

// --- 1. DATABASE PRODUK (allProducts) ---
const allProducts = [
  // Top Up - Mobile Legends
  { id: 'ml-86', category: 'topup', platform: 'Mobile Legends', platformIcon: '📱', emoji: '💎', name: '86 Diamonds Mobile Legends', price: 22000, discount: 5, rating: 4.9, sold: 15400, region: 'Global', badge: 'Terlaris', description: 'Top Up 86 Diamonds resmi Mobile Legends. Pengiriman instan, 100% legal dan aman.' },
  { id: 'ml-172', category: 'topup', platform: 'Mobile Legends', platformIcon: '📱', emoji: '💎', name: '172 Diamonds Mobile Legends', price: 44000, discount: 0, rating: 4.8, sold: 11200, region: 'Global', badge: '', description: 'Top Up 172 Diamonds resmi.' },
  { id: 'ml-257', category: 'topup', platform: 'Mobile Legends', platformIcon: '📱', emoji: '💎', name: '257 Diamonds Mobile Legends', price: 65000, discount: 10, rating: 4.9, sold: 8500, region: 'Global', badge: 'Hot', description: 'Top Up 257 Diamonds.' },
  { id: 'ml-344', category: 'topup', platform: 'Mobile Legends', platformIcon: '📱', emoji: '💎', name: '344 Diamonds Mobile Legends', price: 87000, discount: 0, rating: 4.9, sold: 5400, region: 'Global', badge: '', description: 'Top Up 344 Diamonds.' },
  { id: 'ml-706', category: 'topup', platform: 'Mobile Legends', platformIcon: '📱', emoji: '💎', name: '706 Diamonds Mobile Legends', price: 175000, discount: 5, rating: 5.0, sold: 4100, region: 'Global', badge: '', description: 'Top Up 706 Diamonds.' },
  
  // Top Up - Free Fire
  { id: 'ff-140', category: 'topup', platform: 'Free Fire', platformIcon: '📱', emoji: '💎', name: '140 Diamonds Free Fire', price: 20000, discount: 0, rating: 4.8, sold: 20500, region: 'Global', badge: 'Promo', description: 'Top Up 140 Diamonds Free Fire.' },
  { id: 'ff-355', category: 'topup', platform: 'Free Fire', platformIcon: '📱', emoji: '💎', name: '355 Diamonds Free Fire', price: 50000, discount: 5, rating: 4.9, sold: 16500, region: 'Global', badge: '', description: 'Top Up 355 Diamonds.' },
  { id: 'ff-720', category: 'topup', platform: 'Free Fire', platformIcon: '📱', emoji: '💎', name: '720 Diamonds Free Fire', price: 100000, discount: 10, rating: 4.9, sold: 10500, region: 'Global', badge: 'Terlaris', description: 'Top Up 720 Diamonds.' },
  
  // Top Up - Valorant
  { id: 'val-420', category: 'topup', platform: 'Valorant', platformIcon: '💻', emoji: 'V', name: '420 Valorant Points', price: 48000, discount: 0, rating: 4.9, sold: 8900, region: 'Indonesia', badge: '', description: 'Top Up 420 VP Valorant (Region Indonesia).' },
  { id: 'val-700', category: 'topup', platform: 'Valorant', platformIcon: '💻', emoji: 'V', name: '700 Valorant Points', price: 78000, discount: 0, rating: 4.9, sold: 7600, region: 'Indonesia', badge: '', description: 'Top Up 700 VP.' },
  { id: 'val-1375', category: 'topup', platform: 'Valorant', platformIcon: '💻', emoji: 'V', name: '1375 Valorant Points', price: 148000, discount: 5, rating: 5.0, sold: 5200, region: 'Indonesia', badge: 'Pilihan Gamer', description: 'Top Up 1375 VP.' },
  
  // Game Key - Steam
  { id: 'key-gta5', category: 'gamekey', platform: 'Steam', platformIcon: '🎮', emoji: '🔑', name: 'Grand Theft Auto V Premium Edition', price: 155000, discount: 20, rating: 4.9, sold: 4200, region: 'Global', badge: 'Diskon', description: 'Steam CD Key untuk aktivasi GTA V Premium Edition. Berisi game GTA V dan bonus online pack.' },
  { id: 'key-rdr2', category: 'gamekey', platform: 'Steam', platformIcon: '🎮', emoji: '🐴', name: 'Red Dead Redemption 2', price: 280000, discount: 50, rating: 5.0, sold: 3100, region: 'Global', badge: 'Mega Sale', description: 'Steam CD Key Red Dead Redemption 2.' },
  { id: 'key-cp2077', category: 'gamekey', platform: 'Steam', platformIcon: '🎮', emoji: '🤖', name: 'Cyberpunk 2077', price: 345000, discount: 30, rating: 4.7, sold: 2800, region: 'Global', badge: '', description: 'Steam CD Key Cyberpunk 2077.' },

  // Voucher
  { id: 'v-gplay-50', category: 'voucher', platform: 'Google Play', platformIcon: '🌐', emoji: '🎟️', name: 'Google Play Gift Card Rp 50.000', price: 53000, discount: 0, rating: 4.9, sold: 12500, region: 'Indonesia', badge: '', description: 'Kode voucher Google Play senilai saldo Rp 50.000.' },
  { id: 'v-gplay-100', category: 'voucher', platform: 'Google Play', platformIcon: '🌐', emoji: '🎟️', name: 'Google Play Gift Card Rp 100.000', price: 105000, discount: 0, rating: 4.9, sold: 8500, region: 'Indonesia', badge: '', description: 'Kode voucher Google Play senilai saldo Rp 100.000.' },
  { id: 'v-steam-100', category: 'voucher', platform: 'Steam Wallet', platformIcon: '🎮', emoji: '🎟️', name: 'Steam Wallet Rp 100.000', price: 120000, discount: 0, rating: 4.8, sold: 6400, region: 'Indonesia', badge: '', description: 'Kode voucher Steam Wallet senilai saldo IDR 100.000.' },

  // Akun
  { id: 'acc-ml-mythic', category: 'akun', platform: 'Mobile Legends', platformIcon: '📱', emoji: '🏅', name: 'Akun ML Mythic Glory (Full Emblems)', price: 450000, discount: 0, rating: 5.0, sold: 1, region: 'Indonesia', badge: 'Aman', description: 'Akun pribadi anti hack-back. Winrate 60%, skin langka KOF Gusion.' },
  { id: 'acc-rs-main', category: 'akun', platform: 'RuneScape', platformIcon: '💻', emoji: '⚔️', name: 'OSRS Main Account Combat Lvl 110', price: 850000, discount: 0, rating: 4.9, sold: 1, region: 'Global', badge: '', description: 'Akun main Old School Runescape siap raid. Total level 1600+.' },

  // Item
  { id: 'itm-csgo-awp', category: 'item', platform: 'CS:GO', platformIcon: '💻', emoji: '🔫', name: 'AWP | Asiimov (Field-Tested)', price: 1250000, discount: 0, rating: 4.9, sold: 15, region: 'Global', badge: 'Populer', description: 'Skin CSGO langka. Transaksi via trade link.' },
  { id: 'itm-dota-arcana', category: 'item', platform: 'Dota 2', platformIcon: '💻', emoji: '🔮', name: 'Arcana Juggernaut (Bladeform)', price: 340000, discount: 5, rating: 4.8, sold: 42, region: 'Global', badge: '', description: 'Arcana DOTA 2 pengiriman instan via trade bot.' },

  // Joki
  { id: 'boost-ml-mythic', category: 'joki', platform: 'Mobile Legends', platformIcon: '📱', emoji: '🚀', name: 'Joki MLBB Legend ke Mythic', price: 150000, discount: 0, rating: 4.9, sold: 350, region: 'Indonesia', badge: 'Trusted', description: 'Dikerjakan oleh pro player eks-RRQ. Pengerjaan 1-2 hari.' },
  { id: 'boost-val-immo', category: 'joki', platform: 'Valorant', platformIcon: '💻', emoji: '🚀', name: 'Joki Val Ascendant ke Immortal', price: 200000, discount: 0, rating: 4.9, sold: 120, region: 'Indonesia', badge: '', description: 'Pengerjaan aman tanpa cheat/ban. Privacy 100% terjaga.' },
  
  // Streaming
  { id: 'str-nf-1mo', category: 'streaming', platform: 'Netflix', platformIcon: '📺', emoji: '🎬', name: 'Netflix Premium (Profil Privat) 1B', price: 35000, discount: 0, rating: 4.8, sold: 8900, region: 'Global', badge: 'Laris', description: 'Akun premium 1 bulan privat profile. Bergaransi 100%.' },
  { id: 'str-sp-1mo', category: 'streaming', platform: 'Spotify', platformIcon: '🎧', emoji: '🎧', name: 'Spotify Premium Family Invite 1B', price: 15000, discount: 0, rating: 4.9, sold: 11200, region: 'Global', badge: '', description: 'Link invite premium Spotify legal bulan penuh garansi.' }
];

// --- 2. GLOBAL UTILS ---
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};

const showToast = (message, type = 'success') => {
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = '';
  const icon = document.createElement('span');
  icon.textContent = type === 'success' ? '✅' : '❌';
  const text = document.createTextNode(' ' + message);
  toast.appendChild(icon);
  toast.appendChild(text);
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = 'toast'; }, 3000);
};

// --- 3. SESSION / AUTH ---
function checkAuth() {
  const sessionData = localStorage.getItem('gz_session');
  if(sessionData) {
    try {
      const user = JSON.parse(sessionData);
      document.getElementById('nav-guest')?.classList.add('hidden');
      const navUser = document.getElementById('nav-user');
      navUser?.classList.remove('hidden');
      
      const parts = user.name.split(' ');
      document.getElementById('user-name-short').textContent = parts[0];
      document.getElementById('user-avatar-circle').textContent = parts[0][0].toUpperCase();
      document.getElementById('udh-avatar').textContent = parts[0][0].toUpperCase();
      document.getElementById('udh-name').textContent = user.name;
      document.getElementById('udh-email').textContent = user.email;
    } catch(e) {}
  }
}

// User Dropdown toggling
document.getElementById('user-avatar-btn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('user-dropdown')?.classList.toggle('show');
});
document.addEventListener('click', () => {
  document.getElementById('user-dropdown')?.classList.remove('show');
});
document.getElementById('dd-logout')?.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('gz_session');
  window.location.reload();
});

// --- 4. RENDER PRODUCTS ---
function renderProducts() {
  const grids = {
    topup: document.getElementById('topup-grid'),
    gamekey: document.getElementById('gamekey-grid'),
    voucher: document.getElementById('voucher-grid'),
    akun: document.getElementById('akun-grid'),
    item: document.getElementById('item-grid'),
    joki: document.getElementById('joki-grid'),
    streaming: document.getElementById('streaming-grid')
  };

  Object.values(grids).forEach(g => { if(g) g.innerHTML = ''; });

  const displayedPlatforms = new Set();
  
  allProducts.forEach(p => {
    if(p.category === 'topup' || p.category === 'voucher') {
      const gkey = p.category + '_' + p.platform;
      if(displayedPlatforms.has(gkey)) return;
      displayedPlatforms.add(gkey);
    }
    
    if (grids[p.category]) {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      let originalPriceHtml = '';
      let finalPrice = p.price;
      if (p.discount > 0) {
        finalPrice = Math.round(p.price - (p.price * (p.discount / 100)));
        originalPriceHtml = `<span class="pc-original-price">${formatPrice(p.price)}</span>`;
      }

      let badgesHtml = '';
      if (p.badge) badgesHtml += `<span class="pc-badge pc-badge--label">${p.badge}</span>`;
      if (p.discount > 0) badgesHtml += `<span class="pc-badge pc-badge--sale">${p.discount}% OFF</span>`;

      let displayTitle = p.name;
      let priceLabel = '';
      let displayFinalPrice = formatPrice(finalPrice);

      if (p.category === 'topup' || p.category === 'voucher') {
        displayTitle = p.category === 'topup' ? `Top Up ${p.platform}` : `Voucher ${p.platform}`;
        priceLabel = 'Mulai dari';
        originalPriceHtml = '';
      }

      const gradientMap = {
        topup:     'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        voucher:   'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        gamekey:   'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        akun:      'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        item:      'linear-gradient(135deg, #f97316 0%, #facc15 100%)',
        joki:      'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
        streaming: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      };
      const iconGradient = gradientMap[p.category] || 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';

      card.innerHTML = `
        <div class="pc-img-area" style="background: ${iconGradient};">
          <div class="pc-emoji">${p.emoji}</div>
          <div class="pc-hover-overlay">
            <span class="pc-quick-action">Lihat Detail →</span>
          </div>
          ${badgesHtml ? `<div class="pc-badges">${badgesHtml}</div>` : ''}
        </div>
        <div class="pc-body">
          <div class="pc-platform">
            <span class="pc-platform-icon">${p.platformIcon}</span>
            <span>${p.platform}</span>
          </div>
          <h3 class="pc-name">${displayTitle}</h3>
          <div class="pc-meta">
            <span class="pc-rating">⭐ ${p.rating}</span>
            <span class="pc-sold">${p.sold >= 1000 ? (p.sold / 1000).toFixed(1) + 'k' : p.sold} terjual</span>
          </div>
          <div class="pc-footer">
            <div class="pc-price-block">
              ${priceLabel ? `<span class="pc-price-label">${priceLabel}</span>` : ''}
              <div class="pc-price-row">
                ${originalPriceHtml}
                <span class="pc-price">${displayFinalPrice}</span>
              </div>
            </div>
            <button class="pc-buy-btn" aria-label="Beli ${displayTitle}">⚡</button>
          </div>
        </div>
      `;

      // Quick buy button — stops card click, opens modal directly
      card.querySelector('.pc-buy-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof openProductModal === 'function') openProductModal(p);
      });

      // Full card click
      card.addEventListener('click', () => {
        if (typeof openProductModal === 'function') openProductModal(p);
      });

      grids[p.category].appendChild(card);
    }
  });
}

// --- 5. CART LOGIC ---
let cart = [];

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const itemsContainer = document.getElementById('cart-items');
  const emptyMsg = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  const totalPriceEl = document.getElementById('cart-total-price');

  if(badge) badge.textContent = cart.length;

  if (cart.length === 0) {
    if(emptyMsg) emptyMsg.style.display = 'flex';
    if(footer) footer.style.display = 'none';
    if(itemsContainer) {
      Array.from(itemsContainer.children).forEach(c => {
        if (c.id !== 'cart-empty') c.style.display = 'none';
      });
    }
    return;
  }

  if(emptyMsg) emptyMsg.style.display = 'none';
  if(footer) footer.style.display = 'block';

  itemsContainer.innerHTML = '';
  itemsContainer.appendChild(emptyMsg);
  
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-target">Target: ${item.targetId || 'N/A'}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
    `;
    itemsContainer.appendChild(div);
  });

  if(totalPriceEl) totalPriceEl.textContent = formatPrice(total);
}

window.addToCart = (product) => {
  cart.push(product);
  updateCartUI();
  // Cart icon pop animation
  const btn = document.getElementById('btn-cart');
  if(btn) {
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
  }
};

window.removeFromCart = (index) => {
  cart.splice(index, 1);
  updateCartUI();
};

window.clearCartAfterOrder = () => {
  cart = [];
  updateCartUI();
};

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('show');
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('show');
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Sidebars & Modals Events
document.getElementById('btn-cart')?.addEventListener('click', openCart);
document.getElementById('cart-close')?.addEventListener('click', closeCart);
document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

window.closeModal = function() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = 'auto';
  // Pause youtube if it was opened from modal patch
  const actionContainer = document.getElementById('xc-action-bar');
  if(actionContainer) actionContainer.innerHTML = '';
};
document.getElementById('modal-close')?.addEventListener('click', closeModal);
document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// --- 6. CHECKOUT LOGIC ---
const checkoutModal = document.getElementById('checkout-modal');
const checkoutOverlay = document.getElementById('checkout-overlay');
let checkoutStep = 1;
let selectedPayment = '';

window.openCheckout = function() {
  closeCart();
  if (!localStorage.getItem('gz_session')) {
    showToast('Silahkan login terlebih dahulu!', 'error');
    setTimeout(() => { window.location.href = 'auth.html?tab=login'; }, 1000);
    return;
  }
  
  if (cart.length === 0) return;
  checkoutOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  goToCheckoutStep(1);

  // Auto-fill user data
  try {
     const u = JSON.parse(localStorage.getItem('gz_session'));
     document.getElementById('co-name').value = u.name || '';
     document.getElementById('co-email').value = u.email || '';
  } catch(e){}

  // Render Mini Summary on Step 1
  let sub = cart.reduce((a, b) => a + b.price, 0);
  document.getElementById('mini-summary').innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem; color:var(--text-secondary)">
      <span>Total Tagihan (${cart.length} item)</span>
      <span style="font-weight:600; color:var(--primary)">${formatPrice(sub)}</span>
    </div>
  `;
};

window.closeCheckout = function() {
  checkoutOverlay.classList.remove('open');
  document.body.style.overflow = 'auto';
};

function goToCheckoutStep(step) {
  checkoutStep = step;
  document.querySelectorAll('.checkout-step-content').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active'));
  
  if (step === 4) {
    document.getElementById(`checkout-step-success`).classList.remove('hidden');
    document.getElementById('checkout-steps').style.display = 'none';
  } else {
    document.getElementById('checkout-steps').style.display = 'flex';
    document.getElementById(`checkout-step-${step}`).classList.remove('hidden');
    document.getElementById(`cs-step-${step}`).classList.add('active');
  }
}

// Payment Selection
document.querySelectorAll('.pm-option').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.pm-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    const rb = opt.querySelector('input[type="radio"]');
    if (rb) {
      rb.checked = true;
      selectedPayment = rb.value;
      document.getElementById('err-payment').textContent = '';
    }
  });
});

document.getElementById('btn-checkout')?.addEventListener('click', openCheckout);
document.getElementById('checkout-close-btn')?.addEventListener('click', closeCheckout);

// Navigation Step 1 -> 2
document.getElementById('co-next-1')?.addEventListener('click', (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('co-name');
  if(!name.value) { document.getElementById('err-name').textContent = 'Nama wajib diisi'; valid=false; }
  else document.getElementById('err-name').textContent = '';
  if (valid) goToCheckoutStep(2);
});

// Navigation Step 2 -> 3
document.getElementById('co-next-2')?.addEventListener('click', () => {
  if (!selectedPayment) {
    document.getElementById('err-payment').textContent = 'Silakan pilih metode pembayaran terlebih dahulu.';
    return;
  }
  
  // Render Summary
  const confirmItems = document.getElementById('confirm-items');
  confirmItems.innerHTML = '';
  cart.forEach(item => {
    confirmItems.innerHTML += `
      <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem; padding-bottom:0.5rem; border-bottom:1px dashed #333">
        <div>
           <div style="font-weight:600">${item.name}</div>
           ${item.targetId ? `<div style="font-size:0.8rem; color:#aaa">Target: ${item.targetId}</div>` : ''}
        </div>
        <div>${formatPrice(item.price)}</div>
      </div>
    `;
  });

  const name = document.getElementById('co-name').value;
  const targetId = cart.length > 0 && cart[0].targetId ? cart[0].targetId : '—';
  document.getElementById('confirm-info').innerHTML = `<p>${name}</p>${targetId !== '—' ? `<p style="color:#aaa; font-size:0.9rem">Akun Target: ${targetId}</p>` : ''}`;
  
  const paymentName = document.querySelector(`.pm-option input[value="${selectedPayment}"]`)?.closest('.pm-option').querySelector('.pm-name').textContent;
  document.getElementById('confirm-payment').innerHTML = `<p style="font-weight:600; color:var(--primary)">${paymentName}</p>`;
  
  let subtotal = cart.reduce((a, b) => a + b.price, 0);
  let fee = subtotal > 50000 ? 0 : 1000;
  
  document.getElementById('price-rows').innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;"><span>Biaya Layanan</span><span>${fee > 0 ? formatPrice(fee) : 'Gratis'}</span></div>
    <div style="display:flex; justify-content:space-between; border-top:1px solid #333; margin-top:0.5rem; padding-top:0.5rem; font-weight:700; font-size:1.2rem; color:var(--primary);">
      <span>Total Bayar</span><span>${formatPrice(subtotal + fee)}</span>
    </div>
  `;

  goToCheckoutStep(3);
});

// Navigation Backwards
document.getElementById('co-back-2')?.addEventListener('click', () => goToCheckoutStep(1));
document.getElementById('co-back-3')?.addEventListener('click', () => goToCheckoutStep(2));

// Pay Action
document.getElementById('co-btn-pay')?.addEventListener('click', () => {
  const btn = document.getElementById('co-btn-pay');
  const spinner = document.getElementById('co-pay-spinner');
  const txt = document.getElementById('co-pay-text');
  
  btn.disabled = true;
  spinner.classList.remove('hidden');
  txt.textContent = 'Memproses...';

  setTimeout(() => {
    btn.disabled = false;
    spinner.classList.add('hidden');
    txt.textContent = '⚡ Bayar Sekarang';
    
    // Render Success View
    document.getElementById('success-order-id').textContent = 'Order ID: GZ-INV-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('success-items').innerHTML = `<p style="color:#aaa">${cart.map(i => i.name).join('<br>')}</p>`;
    
    goToCheckoutStep(4);
  }, 1500);
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  renderProducts();

  // Category filters — use explicit map to handle id mismatches (topup→top-up, gamekey→game-key, etc.)
  const catSectionMap = {
    'topup':     'top-up',
    'gamekey':   'game-key',
    'voucher':   'voucher',
    'akun':      'akun-section',
    'item':      'item-section',
    'joki':      'joki-section',
    'streaming': 'streaming-section',
  };

  const catButtons = document.querySelectorAll('.category-card');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;

      document.querySelectorAll('.products-section').forEach(sec => {
        if (cat === 'all') {
          sec.style.display = 'block';
        } else {
          // Match against explicit map, fallback to id.includes for safety
          const targetId = catSectionMap[cat] || cat;
          sec.style.display = (sec.id === targetId) ? 'block' : 'none';
        }
      });

      // Scroll to the matching section
      if (cat !== 'all') {
        const targetId = catSectionMap[cat] || cat;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      }
    });
  });

  // Promo setup
  let promoIndex = 0;
  const promoSlides = document.querySelectorAll('.promo-slide');
  const promoDots = document.querySelectorAll('.promo-dot');
  setInterval(() => {
     if(promoSlides.length === 0) return;
     promoSlides[promoIndex].classList.remove('active');
     promoDots[promoIndex].classList.remove('active');
     promoIndex = (promoIndex + 1) % promoSlides.length;
     promoSlides[promoIndex].classList.add('active');
     promoDots[promoIndex].classList.add('active');
  }, 5000);

  // Mobile Menu Logic
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav?.classList.toggle('show');
    document.body.style.overflow = mobileNav?.classList.contains('show') ? 'hidden' : 'auto';
  });
  // Close menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav?.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Search & Filtering Logic
  const searchInput = document.getElementById('search-input');
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  const filterProducts = (query) => {
    const q = query.trim().toLowerCase();
    const sections = document.querySelectorAll('.products-section');
    sections.forEach(sec => {
      let hasVisible = false;
      const cards = sec.querySelectorAll('.product-card');
      cards.forEach(card => {
        // Use new pc-* class names (redesigned cards)
        const nameEl = card.querySelector('.pc-name') || card.querySelector('.product-name');
        const platformEl = card.querySelector('.pc-platform') || card.querySelector('.product-platform');
        const name = nameEl ? nameEl.textContent.toLowerCase() : '';
        const platform = platformEl ? platformEl.textContent.toLowerCase() : '';
        if (!q || name.includes(q) || platform.includes(q)) {
          card.style.display = '';
          hasVisible = true;
        } else {
          card.style.display = 'none';
        }
      });
      // Hide section if no products match, or show all if no query
      sec.style.display = (hasVisible || !q) ? 'block' : 'none';
    });
  };

  searchInput?.addEventListener('input', (e) => filterProducts(e.target.value));
  heroSearchInput?.addEventListener('input', (e) => filterProducts(e.target.value));
  heroSearchBtn?.addEventListener('click', () => filterProducts(heroSearchInput.value));

  // Hero Tags
  document.querySelectorAll('.hero-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.textContent;
      heroSearchInput.value = q;
      filterProducts(q);
      window.scrollTo({ top: document.getElementById('categories').offsetTop - 80, behavior: 'smooth' });
    });
  });
});
