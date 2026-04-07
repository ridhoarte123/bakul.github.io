// ─── PRODUCT MODAL (ITEMKU STYLE) ──────────────────────────────
let ikCurrentProduct = null;
let ikCurrentQuantity = 1;

function renderIKModalContent(product) {
  const variants = allProducts.filter(p => p.platform === product.platform);
  variants.sort((a, b) => a.price - b.price);

  let variantsHtml = '';
  variants.forEach(v => {
    const isActive = (v.id === product.id) ? 'active' : '';
    variantsHtml += `
      <div class="ik-variant-card ${isActive}" onclick="ikChangeVariant('${v.id}')">
        <div class="ik-vc-icon">${v.emoji || '💎'}</div>
        <div class="ik-vc-name">${v.name.replace(product.platform, '').trim()}</div>
        <div class="ik-vc-price">${formatPrice(v.price)}</div>
      </div>
    `;
  });

  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="ik-left">
      <div class="ik-product-hero">
        <div class="ik-product-img-box">${product.emoji || '🎮'}</div>
        <div class="ik-product-hero-text">
          <div class="ik-product-title">${product.name}</div>
          <div class="ik-badges">
            <span class="ik-badge" style="color:#10b981; border-color:#10b981">Dapat diaktifkan di Indonesia</span>
            ${product.badge ? `<span class="ik-badge">${product.badge}</span>` : ''}
            <span class="ik-badge" style="color:#f97316; border-color:#f97316">Pengiriman Instan</span>
          </div>
          <div class="ik-meta">
            <span class="star">★</span> <span style="color:#fff; font-weight:700">${product.rating}/5.0</span> 
            <span>(${product.sold.toLocaleString('id-ID')} ulasan)</span>
          </div>
          <a href="#" class="ik-how-to-buy">Cara Beli & Tips</a>
        </div>
      </div>

      <div class="ik-variants-section">
        <div class="ik-variants-title">Pilih Produk</div>
        <div class="ik-tabs">
          <div class="ik-tab active">Sesudah Pajak</div>
          <div class="ik-tab">Sebelum Pajak</div>
        </div>
        <div class="ik-variant-grid">
          ${variantsHtml}
        </div>
      </div>
    </div>

    <div class="ik-right">
      <div class="ik-right-card">
        <div>
          <div class="ik-r-title">Informasi Pesanan</div>
          <div style="margin-top: 1rem;" class="ik-seller">
            <div class="ik-seller-info">
              <div class="ik-seller-avatar">👾</div>
              <div>
                <div class="ik-seller-name">GameZone Official</div>
                <div class="ik-seller-status">Terakhir online 2 Menit lalu</div>
              </div>
            </div>
            <div class="ik-seller-rating"><span class="star">★</span> 4.9/5.0</div>
          </div>
          <div class="ik-desc-snippet" style="margin-top:1rem">
             <strong>REGION: ${product.region}</strong><br>
             ${product.description}
          </div>
        </div>

        <div class="ik-form-group">
          <label class="ik-label">Username / Target ID <span style="color: #ef4444">*</span></label>
          <input type="text" class="ik-input" id="ik-input-target" placeholder="Contoh: username123" />
        </div>

        <div class="ik-qty-row">
          <label class="ik-label">Stok: 99+</label>
          <div class="ik-qty-ctrl">
            <button class="ik-qty-btn" onclick="ikUpdateQty(-1)">−</button>
            <input type="text" class="ik-qty-input" id="ik-input-qty" value="${ikCurrentQuantity}" readonly />
            <button class="ik-qty-btn" onclick="ikUpdateQty(1)">+</button>
          </div>
        </div>

        <div class="ik-helper-box">
          <span>Kamu akan dapat: <strong style="color: #fff">${product.name}</strong></span>
          <a href="#">Panduan</a>
        </div>

        <div class="ik-total-row">
          <span class="ik-total-label">Total</span>
          <span class="ik-total-price" id="ik-total-price">${formatPrice(product.price * ikCurrentQuantity)}</span>
        </div>

        <div class="ik-action-row">
          <button class="ik-btn-cart" id="ik-btn-cart" title="Tambah ke keranjang">🛒</button>
          <button class="ik-btn-buy" id="ik-btn-buy">Beli Sekarang</button>
        </div>
        <div class="ik-trust">
          🛡️ 100% Transaksi Aman Dijamin
        </div>
      </div>
    </div>
  `;

  // Attach events
  document.getElementById('ik-btn-cart').addEventListener('click', () => {
    const target = document.getElementById('ik-input-target').value;
    if(!target) { showToast('Mohon isi Username / Target ID', 'error'); return; }
    
    // We clone product to attach targetId
    const cartProduct = { ...product, targetId: target };
    for(let i=0; i<ikCurrentQuantity; i++) {
       addToCart(cartProduct);
    }
    closeModal();
    showToast(`${ikCurrentQuantity}x ${product.name} masuk ke keranjang`, 'success');
  });

  document.getElementById('ik-btn-buy').addEventListener('click', () => {
    const target = document.getElementById('ik-input-target').value;
    if(!target) { showToast('Mohon isi Username / Target ID', 'error'); return; }
    
    const cartProduct = { ...product, targetId: target };
    for(let i=0; i<ikCurrentQuantity; i++) {
       addToCart(cartProduct);
    }
    closeModal();
    openCart();
  });
}

window.ikChangeVariant = function(id) {
  const product = allProducts.find(p => p.id === id);
  if (product) {
    ikCurrentQuantity = 1; // reset
    ikCurrentProduct = product;
    renderIKModalContent(product);
  }
};

window.ikUpdateQty = function(delta) {
  ikCurrentQuantity += delta;
  if (ikCurrentQuantity < 1) ikCurrentQuantity = 1;
  document.getElementById('ik-input-qty').value = ikCurrentQuantity;
  if (ikCurrentProduct) {
     document.getElementById('ik-total-price').textContent = formatPrice(ikCurrentProduct.price * ikCurrentQuantity);
  }
};

function openProductModal(product) {
  const overlay = document.getElementById('modal-overlay');
  
  ikCurrentProduct = product;
  ikCurrentQuantity = 1;
  renderIKModalContent(product);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
