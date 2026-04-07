// ─── PRODUCT MODAL (XCASHSHOP STYLE + CLASSIC) ─────────────────
let xcCurrentProduct = null;

function renderXCModalContent(initialProduct) {
  const content = document.getElementById('modal-content');
  const variants = allProducts.filter(p => p.platform === initialProduct.platform);
  variants.sort((a, b) => a.price - b.price);

  // Auto-target logic
  const isMLBB = initialProduct.platform.toLowerCase().includes('mobile legends');
  const targetInputs = isMLBB
    ? `
      <div class="xc-form-row">
        <div class="xc-form-group">
          <label class="xc-form-label">Masukkan Player ID <span style="color:#ef4444">*</span></label>
          <div style="display:flex; gap:0.5rem">
            <input type="text" class="xc-input" id="xc-input-id" placeholder="User ID" style="flex:2" />
            <input type="text" class="xc-input" id="xc-input-zone" placeholder="Zone ID" style="flex:1" />
          </div>
        </div>
      </div>
    `
    : `
      <div class="xc-form-row">
        <div class="xc-form-group">
          <label class="xc-form-label">Masukkan Player ID / Username <span style="color:#ef4444">*</span></label>
          <input type="text" class="xc-input" id="xc-input-id" placeholder="Contoh: 12345678" />
        </div>
      </div>
    `;

  let variantsHtml = '';
  variants.forEach(v => {
    let priceText = formatPrice(v.price);
    let title = v.name.replace(initialProduct.platform, '').trim();
    if (!title) title = "Top Up Biasa";

    // Add random discount badge logically
    const dcBadge = (v.discount && v.discount > 0) ? `<div class="xc-vc-discount">${v.discount}% OFF</div>` : '';
    const isActive = xcCurrentProduct && xcCurrentProduct.id === v.id ? 'active' : '';

    variantsHtml += `
      <div class="xc-variant-card ${isActive}" onclick="xcChangeVariant('${v.id}')">
        ${dcBadge}
        <div class="xc-vc-top">
          <span class="xc-vc-icon">
            <img src="images/wdp.png" alt="wdp" />
          </span>
          <span class="xc-vc-name">${title}</span>
        </div>
        <div class="xc-vc-bottom">
          <span class="xc-vc-price">${priceText}</span>
        </div>
      </div>
    `;
  });

  // Calculate rendering price
  const displayPrice = xcCurrentProduct ? formatPrice(xcCurrentProduct.price) : 'Pilih Nominal';

  content.innerHTML = `
    <div class="xc-left">
      <div class="xc-game-card">
        <div class="xc-game-icon">${initialProduct.emoji}</div>
        <div class="xc-game-pub">Platform Resmi</div>
        <div class="xc-game-title">${initialProduct.platform}</div>
        <div class="xc-features">
          <div class="xc-feature">✔️ Jaminan Layanan</div>
          <div class="xc-feature">🎧 Pelanggan 24/7</div>
          <div class="xc-feature">🛡️ Pembayaran Aman</div>
          <div class="xc-feature">⚡ Pengiriman Instan</div>
        </div>
      </div>
      <div class="xc-desc-card">
        <h3>Top Up ${initialProduct.platform}</h3>
        <p>Layanan top up resmi dengan proses instan. Harga mulai dari nominal termurah dengan sistem otomatis yang praktis.</p>
        <br>
        <p>Metode pembayaran yang tersedia:</p>
        <ul>
          <li>QRIS dan Virtual Account</li>
          <li>E-wallet (GoPay, OVO, ShopeePay)</li>
          <li>Transfer Bank Transparan</li>
        </ul>
      </div>
    </div>
    
    <div class="xc-right">
      <!-- Kotak 1: Informasi Pelanggan -->
      <div class="xc-section-card">
        <div class="xc-section-header">
          <span class="icon">🔷</span> Informasi Pelanggan
        </div>
        ${targetInputs}
        <div class="xc-form-row xc-whatsapp-row">
          <div class="xc-form-group">
            <label class="xc-form-label">Nomor WhatsApp (Opsional)</label>
            <input type="text" class="xc-input" id="xc-input-wa" placeholder="08..." />
          </div>
        </div>
      </div>

      <!-- Kotak 2: Nominal -->
      <div class="xc-section-card" style="margin-bottom: 80px">
        <div class="xc-section-header">
          <span class="icon">🔷</span> Pilih Nominal Top Up
        </div>
        <div class="xc-variant-grid">
          ${variantsHtml}
        </div>
      </div>
    </div>
  `;

  // Create / reuse the fixed bottom action bar inside the modal
  let bottomBar = document.getElementById('xc-action-bar');
  if (!bottomBar) {
    bottomBar = document.createElement('div');
    bottomBar.id = 'xc-action-bar';
    bottomBar.className = 'xc-action-bar';
    document.getElementById('product-modal').appendChild(bottomBar);
  }

  bottomBar.innerHTML = `
    <div class="xc-total-box">
      <span class="xc-total-label">Total Harga</span>
      <span class="xc-total-price" id="xc-total-price-disp">${displayPrice}</span>
    </div>
    <div class="xc-action-btns">
      <button class="xc-btn-cart" id="xc-btn-cart">🛒 +Keranjang</button>
      <button class="xc-btn-buy" id="xc-btn-buy">⚡ Beli Sekarang</button>
    </div>
  `;

  document.getElementById('xc-btn-cart').onclick = () => {
    if (!xcCurrentProduct) { showToast('Silahkan pilih nominal top up.', 'error'); return; }
    const idVal = document.getElementById('xc-input-id')?.value || '';
    const zoneVal = document.getElementById('xc-input-zone')?.value || '';
    if (!idVal) { showToast('Mohon masukkan Player ID', 'error'); return; }
    const finalTarget = isMLBB ? `${idVal} (${zoneVal})` : idVal;

    addToCart({ ...xcCurrentProduct, targetId: finalTarget });
    showToast('Produk ditambahkan ke keranjang');
  };

  document.getElementById('xc-btn-buy').onclick = () => {
    if (!xcCurrentProduct) { showToast('Silahkan pilih nominal top up.', 'error'); return; }
    const idVal = document.getElementById('xc-input-id')?.value || '';
    const zoneVal = document.getElementById('xc-input-zone')?.value || '';
    if (!idVal) { showToast('Mohon masukkan Player ID', 'error'); return; }
    const finalTarget = isMLBB ? `${idVal} (${zoneVal})` : idVal;

    addToCart({ ...xcCurrentProduct, targetId: finalTarget });
    closeModal();
    openCart();
  };
}

window.xcChangeVariant = function (id) {
  const p = allProducts.find(x => x.id === id);
  if (p) {
    xcCurrentProduct = p;
    // We only re-render the variants HTML + update price, or simply re-render all to be safe and lazy
    // However re-rendering all clears the input values!
    // Best is to just update classes and price text.
    document.querySelectorAll('.xc-variant-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById('xc-total-price-disp').textContent = formatPrice(p.price);
  }
};

function renderClassicModalContent(product) {
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="modal-product-img-placeholder">${product.emoji}</div>
    <div class="modal-platform">${product.platformIcon} ${product.platform}</div>
    <div class="modal-name">${product.name}</div>
    <div class="modal-region">${product.region}</div>
    <div class="modal-price-section">
      <div class="modal-price">${formatPrice(product.price)}</div>
    </div>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Rating</span>
        <span class="modal-meta-value">⭐ ${product.rating}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Terjual</span>
        <span class="modal-meta-value">${product.sold.toLocaleString('id-ID')}</span>
      </div>
    </div>
    <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${product.description}</p>
    <div class="modal-actions">
      <button class="modal-btn-cart" id="modal-add-cart">🛒 Keranjang</button>
      <button class="modal-btn-buy" id="modal-buy-now">⚡ Beli Sekarang</button>
    </div>
  `;
  document.getElementById('modal-add-cart').onclick = () => { addToCart(product); closeModal(); };
  document.getElementById('modal-buy-now').onclick = () => { addToCart(product); closeModal(); openCart(); };
}

function openProductModal(product) {
  const overlay = document.getElementById('modal-overlay');
  const modalOuter = document.getElementById('product-modal');
  const modalInner = document.getElementById('modal-content');

  // CLEANUP previous state
  const ab = document.getElementById('xc-action-bar');
  if (ab) ab.remove();

  // Unified Delegation Logic
  if (product.category === 'topup' || product.category === 'voucher') {
    // USE XC-STYLE (Two Column / Grid)
    modalOuter.className = 'modal xc-modal';
    modalInner.className = 'xc-modal-content';
    xcCurrentProduct = product; // pre-select
    renderXCModalContent(product);
  }
  else if (product.category === 'akun' || product.category === 'joki' || product.category === 'item') {
    // USE IK-STYLE (Premium Single Product View)
    modalOuter.className = 'modal ik-modal'; // ensure we use ik classes
    modalInner.className = 'ik-modal-content';
    if (typeof renderIKModalContent === 'function') {
      renderIKModalContent(product);
    } else {
      renderClassicModalContent(product);
    }
  }
  else {
    // USE CLASSIC fallback
    modalOuter.className = 'modal';
    modalInner.className = 'modal-content';
    renderClassicModalContent(product);
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
