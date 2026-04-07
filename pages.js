// ═══════════════════════════════════════════════════
// ─── CONTENT DATABASE ────────────────────────────
// ═══════════════════════════════════════════════════

const pageContents = {
  // --- TENTANG KAMI ---
  'tentang-kami': {
    title: 'Tentang GameZone',
    breadcrumbs: ['Tentang Kami', 'Tentang GameZone'],
    content: `
      <h2>Marketplace Gaming Terbesar se-Nusantara</h2>
      <p>GameZone didirikan pada tahun 2024 dengan sebuah misi sederhana: menghubungkan para gamer di seluruh Indonesia dengan ekosistem ekonomi digital yang aman, cepat, dan terjangkau. Kami bukan hanya sebuah platform belanja, kami adalah rumah bagi para player, joki, akun trader, dan content creator.</p>
      
      <h3>Visi Kami</h3>
      <p>Menjadi destinasi nomor satu untuk segala kebutuhan gaming digital di Asia Tenggara yang menjunjung tinggi keadilan transaksi bagi penjual maupun pembeli.</p>
      
      <h3>Kenapa Memilih GameZone?</h3>
      <ul>
        <li><strong>Keamanan Terjamin 100%</strong>: Sistem sistem hold-dana kami memastikan uang kamu aman hingga produk diterima.</li>
        <li><strong>Transaksi Super Instant</strong>: Banyak produk dengan label 'Kirim Instan' yang masuk dalam hitungan detik.</li>
        <li><strong>Komunitas Kuat</strong>: Kami didukung oleh ribuan seller terpercaya dan tergabung dengan banyak forum gaming.</li>
      </ul>
      <p>Terima kasih telah mempercayakan perjalanan gaming kamu kepada GameZone. Let's play and conquer!</p>
    `
  },
  'blog': {
    title: 'Blog GameZone',
    breadcrumbs: ['Tentang Kami', 'Blog'],
    content: `
      <h2>Selamat Datang di Blog GameZone</h2>
      <p>Temukan update terbaru, tips & trik game, hingga berita e-sports terhangat langsung dari tim redaksi kami.</p>
      <div style="display:grid; gap: 1rem; margin-top: 2rem;">
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 1rem;">
          <h4><span style="color:var(--primary)">#Update</span> Fitur GameZone Wallet Kini Hadir</h4>
          <p style="font-size:0.9rem; color:#aaa; margin-top:0.5rem">12 April 2026 - Kemudahan bertransaksi tanpa ribet konfirmasi pembayaran lagi.</p>
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 1rem;">
          <h4><span style="color:var(--primary)">#Esports</span> Rekap Kualifikasi M-Series Region Asia</h4>
          <p style="font-size:0.9rem; color:#aaa; margin-top:0.5rem">05 April 2026 - Siapa saja tim Indonesia yang berpeluang besar maju ke babak penyisihan?</p>
        </div>
      </div>
    `
  },
  'identitas-brand': {
    title: 'Identitas Brand',
    breadcrumbs: ['Tentang Kami', 'Identitas Brand'],
    content: `
      <h2>Aset Brand GameZone</h2>
      <p>Bagi rekan media dan partner, kamu dapat menggunakan materi brand kami sesuai dengan panduan visual GameZone.</p>
      <div style="padding: 2rem; background: linear-gradient(135deg, #7c3aed, #06b6d4); text-align: center; border-radius: 1rem; margin: 2rem 0;">
        <h1 style="color:#fff; font-weight:900; margin:0">⚡ GameZone</h1>
      </div>
      <h3>Penggunaan Logo</h3>
      <p>Jangan mengubah proporsi, warna dasar, atau menumpuk logo di atas background yang terlalu ramai. Gunakan margin setidaknya 20px di sekitar logo untuk menjaganya tetap terlihat jelas.</p>
    `
  },
  'hubungi-kami': {
    title: 'Hubungi Kami',
    breadcrumbs: ['Tentang Kami', 'Hubungi Kami'],
    content: `
      <h2>Pusat Kontak GameZone</h2>
      <p>Ada pertanyaan atau keluhan tentang transaksi? CS kami bersiap membantumu 24/7!</p>
      <ul style="list-style:none; padding:0; margin-top: 1.5rem;">
        <li style="margin-bottom: 1rem;">📧 <strong>Email Support:</strong> support@gamezone.co.id</li>
        <li style="margin-bottom: 1rem;">📞 <strong>Hotline/WhatsApp:</strong> +62 812-3456-7890 (Teks saja)</li>
        <li style="margin-bottom: 1rem;">📍 <strong>Alamat Kantor:</strong> GameZone Tower Lt. 12, Sudirman CBD, Jakarta Selatan, Indonesia 12190.</li>
      </ul>
      <p><em>*Rata-rata waktu balasan untuk email adalah 1x24 jam kerja. Untuk penanganan terkait kendala transaksi mendesak, silakan buat tiket melalui Pusat Bantuan.</em></p>
    `
  },
  'karir': {
    title: 'Karir di GameZone',
    breadcrumbs: ['Tentang Kami', 'Karir'],
    content: `
      <h2>Join The Squad! 🚀</h2>
      <p>Kami mencari talenta brilian yang memiliki passion besar terhadap dunia gaming dan web technology.</p>
      <h3>Posisi Terbuka Saat Ini (April 2026):</h3>
      <ul>
        <li><strong>Frontend Engineer (React/NextJS)</strong> - Jakarta (Hybrid)</li>
        <li><strong>Customer Support Specialist (Shift Malam)</strong> - Remote</li>
        <li><strong>Social Media & Community Manager</strong> - Jakarta</li>
      </ul>
      <p>Kirimkan CV dan portofoliomu (atau link GitHub/Behance) ke <strong>career@gamezone.co.id</strong> dengan subjek format: <code>[POSISI] - Nama Lengkap</code>.</p>
    `
  },

  // --- PEMBELI ---
  'cara-belanja': {
    title: 'Cara Belanja di GameZone',
    breadcrumbs: ['Pembeli', 'Cara Belanja'],
    content: `
      <h2>Panduan Transaksi Pembeli</h2>
      <p>Berbelanja di platform kami sangat mudah! Ikuti langkah di bawah ini:</p>
      <ol>
        <li><strong>Login atau Daftar:</strong> Pastikan kamu sudah punya akun GameZone.</li>
        <li><strong>Cari Produk:</strong> Gunakan kolom pencarian atau klik kategori yang diinginkan (Misal: <em>Voucher &gt; Google Play</em>).</li>
        <li><strong>Klik +Keranjang atau Beli Langsung:</strong> Baca terlebih dahulu deskripsi produk dengan seksama.</li>
        <li><strong>Checkout:</strong> Tinjau ulang keranjang kamu, lalu klik Checkout.</li>
        <li><strong>Pilih Metode Pembayaran:</strong> Selesaikan pembayaran melalui QRIS, Transfer Bank, atau E-Wallet sesuai tagihan.</li>
        <li><strong>Terima Produk:</strong> Tunggu seller memproses orderan. Jika order berupa pengiriman otomatis (Instan), kode akan muncul di halaman Riwayat Pesanan.</li>
      </ol>
    `
  },
  'cara-trading': {
    title: 'Cara Trading (Akun & Item)',
    breadcrumbs: ['Pembeli', 'Cara Trading'],
    content: `
      <h2>Sistem Trading Aman GameZone</h2>
      <p>Trading akun, rare item, atau game currency membutuhkan ekstra kehati-hatian. Kami menggunakan sistem <strong>Safe-Trade</strong>.</p>
      <h3>Regulasi Trading:</h3>
      <ul>
        <li><strong>Dilarang chat di luar platform:</strong> Semua komunikasi antara pembeli dan seller harus melalui fitur Pesan GameZone.</li>
        <li><strong>Rekam layar (Screen Record):</strong> Pembeli diwajibkan melakukan perekaman layar saat pertama kali <em>log in</em> ke akun yang baru dibeli untuk bukti jika terjadi ketidaksesuaian password.</li>
        <li><strong>Konfirmasi Selesai:</strong> Jangan klik "Selesai" jika kamu belum mengamankan pesanan kamu dengan mengganti email dan password (pada pembelian Akun).</li>
      </ul>
    `
  },
  'cara-pembayaran': {
    title: 'Informasi Cara Pembayaran',
    breadcrumbs: ['Pembeli', 'Cara Pembayaran'],
    content: `
      <h2>Metode Pembayaran yang Tersedia</h2>
      <p>Kami bermitra dengan payment gateway resmi untuk mengamankan uang kamu.</p>
      <ul>
        <li><strong>Instant QRIS:</strong> Bebas pilih scan pakai aplikasi apapun (OVO, Gopay, Dana, m-BCA, dll). Konfirmasi instan.</li>
        <li><strong>Virtual Account (Transfer Bank):</strong> Tersedia BCA, Mandiri, BNI, BRI, Permata. Bebas biaya cek mutasi.</li>
        <li><strong>Retail Market:</strong> Pembayaran cash melalui Indomaret dan Alfamart terdekat.</li>
        <li><strong>GameZone Wallet:</strong> (Akan Datang) Bayar sekali klik menggunakan saldo di platform.</li>
      </ul>
      <p><em>Catatan: Terdapat biaya platform (layanan jasa) flat sebesar Rp 1.000 untuk setiap transaksi di bawah Rp 50.000.</em></p>
    `
  },
  'pusat-bantuan': {
    title: 'Pusat Bantuan & Tiket',
    breadcrumbs: ['Pembeli', 'Pusat Bantuan'],
    content: `
      <h2>Hai, ada yang bisa kami bantu?</h2>
      <p>Pilih topik yang sesuai dengan masalahmu di bawah ini:</p>
      <ul>
        <li><strong>Transaksi:</strong> Pesanan belum masuk setelah 30 menit bayar? <a href="#">Buat laporan pesanan</a></li>
        <li><strong>Akun:</strong> Lupa password atau email tidak bisa diakses? <a href="#">Pusat pemulihan akun</a></li>
        <li><strong>Penipuan:</strong> Menemukan seller yang meminta tranksaksi via WhatsApp? <a href="#">Laporkan toko</a></li>
      </ul>
      <br>
      <p>Jika masalahmu di luar dari daftar di atas, segera hubungi via email: support@gamezone.co.id</p>
    `
  },
  'promo-terkini': {
    title: 'Promo & Diskon Terkini',
    breadcrumbs: ['Pembeli', 'Promo Terkini'],
    content: `
      <h2>⚡ Flash Sale April 2026!</h2>
      <p>Gunakan kode-kode promo di bawah ini saat kamu melakukan checkout:</p>
      <div style="border:1px dashed var(--primary); padding:1rem; border-radius:0.5rem; margin-bottom:1rem; background:rgba(124,58,237,0.1)">
        <h4 style="margin:0; font-family:monospace; font-size:1.2rem;">GZ-NEWBIE50</h4>
        <p style="margin:0; color:#ddd; font-size:0.85rem">Diskon Rp 5.000 khusus pengguna baru tanpa minimal transaksi.</p>
      </div>
      <div style="border:1px dashed var(--primary); padding:1rem; border-radius:0.5rem; background:rgba(124,58,237,0.1)">
        <h4 style="margin:0; font-family:monospace; font-size:1.2rem;">SULTAN-MLBB</h4>
        <p style="margin:0; color:#ddd; font-size:0.85rem">Cashback 5% (Max Rp 50.000) khusus pembelian Diamonds Mobile Legends di atas 1000 dm.</p>
      </div>
    `
  },

  // --- PENJUAL ---
  'cara-menjadi-penjual': {
    title: 'Cara Buka Toko (Penjual)',
    breadcrumbs: ['Penjual', 'Cara Menjadi Penjual'],
    content: `
      <h2>Gabung Menjadi GameZone Seller!</h2>
      <p>Siapapun bisa berjualan di sini dengan mengikuti prosedur verifikasi KYC (Know Your Customer) kami.</p>
      <h3>Langkah Verifikasi:</h3>
      <ol>
        <li>Login ke akun pembeli, lalu klik opsi <strong>"Buka Toko"</strong> di dropdown profile kamu.</li>
        <li>Siapkan kartu identitas asli (KTP/SIM/Paspor).</li>
        <li>Lakukan foto selfie memegang identitas dengan jelas tidak buram dan tidak memantulkan cahaya.</li>
        <li>Isi data rekening Bank/E-Wallet atas nama yang sama dengan identitas. (Ini penting untuk pencairan uang!).</li>
        <li>Tunggu proses review oleh tim kami (Rata-rata 1-3 jam jam kerja).</li>
      </ol>
      <p>Jika disetujui, kamu langsung dapat mulai menambah produk, menata etalase, dan berjualan!</p>
    `
  },
  'biaya-berjualan': {
    title: 'Ketentuan Biaya Admin Berjualan',
    breadcrumbs: ['Penjual', 'Biaya Berjualan'],
    content: `
      <h2>Biaya Transparan, Jual Jadi Tenang</h2>
      <p>Tidak ada biaya bulanan atau biaya registrasi. Terdapat potongan administrasi (fee) untuk setiap pesanan yang *berhasil* diselesaikan:</p>
      <ul>
        <li><strong>Kategori Item In-Game:</strong> Potongan 3% per transaksi.</li>
        <li><strong>Kategori Top Up & Game Key:</strong> Potongan 1% per transaksi.</li>
        <li><strong>Kategori Joki & Akun:</strong> Potongan 5% per transaksi (termasuk komisi proteksi keamanan trade).</li>
      </ul>
      <p>Dana bersih yang kamu dapatkan otomatis langsung ditampilkan di dashboard penjual tanpa ada hitungan tersembunyi!</p>
    `
  },
  'metode-pencairan': {
    title: 'Metode Pencairan (Withdrawal)',
    breadcrumbs: ['Penjual', 'Metode Pencairan'],
    content: `
      <h2>Panduan Tarik Saldo Penjual</h2>
      <p>Uang dari transaksi yang telah dikonfirmasi selesai oleh pembeli akan masuk ke dalam <em>Saldo Tertahan</em> selama 1x24 jam untuk garansi, lalu berpindah ke <em>Saldo Utama</em>.</p>
      <h3>Minimum Pencairan:</h3>
      <p>Minimal penarikan adalah <strong>Rp 50.000</strong>.</p>
      <h3>Lama Waktu Proses:</h3>
      <p>Pencairan ke Bank (BCA, Mandiri, BRI, BNI) diproses dalam hitungan maksimal 2 jam pada jam kerja operasional (08:00 - 21:00 WIB). Pencairan yang dibuat pada malam hari akan dicairkan esok paginya.</p>
    `
  },
  'tips-penjual': {
    title: 'Tips Agar Sukses Berjualan',
    breadcrumbs: ['Penjual', 'Tips Penjual'],
    content: `
      <h2>Tingkatkan Omset Tokomu!</h2>
      <p>Berikut adalah 3 langkah ampuh untuk mendongkrak status toko dan kredibilitasmu di mata pembeli:</p>
      <ol>
        <li><strong>Online Tersorot Cepat:</strong> Balas chat pembeli dalam waktu di bawah 5 menit dan layani proses orderan secepat mungkin (dibawah 10 menit). Algoritma akan memberikan lencana <span class="product-badge instan">KILAT</span>.</li>
        <li><strong>Gunakan Gambar Original:</strong> Untuk kategori Akun, tutup nickname/ID secara parsial demi keamanan, tetapi gunakan tangkapan layar spesifikasi akun secara mendetail.</li>
        <li><strong>Tulis Deskripsi Transparan:</strong> Sebutkan dengan jelas stok yang tersedia, kapan jam operasional tokomu, dan bagaimana cara pembeli memberikan informasi (misal: "Harap mencantumkan Zone ID saat pesan").</li>
      </ol>
    `
  },

  // --- LEGALITAS ---
  'aturan-penggunaan': {
    title: 'Syarat & Aturan Penggunaan (TOS)',
    breadcrumbs: ['Legalitas', 'Aturan Penggunaan'],
    content: `
      <h2>Syarat dan Ketentuan Layanan</h2>
      <p>Pembaruan Terakhir: 1 Januari 2026</p>
      <p>Dengan mendaftar, mengakses, atau menggunakan layanan GameZone, Anda dengan ini menyetujui Aturan Penggunaan ini secara penuh. Harap luangkan waktu untuk membacanya dengan teliti.</p>
      <h3>1. Definisi</h3>
      <p>"Platform" mengacu pada website dan aplikasi GameZone. Pihak ketiga, seller, dan pembeli tunduk pada syarat ini.</p>
      <h3>2. Larangan Penggunaan</h3>
      <p>Pengguna dilarang berjualan atau bertransaksi menggunakan platform untuk tindak pencucian uang, penyediaan item curian (carding/fraud), penyebaran cheat ilegal, atau akun eksploitasi peretasan. GameZone berhak menangguhkan akun tanpa pemberitahuan.</p>
      <h3>3. Keputusan Sengketa</h3>
      <p>Jika terjadi transaksi yang tidak sesuai, tim GameZone akan menengahi selaku juri pengambil keputusan berdasarkan bukti rekaman, log chat, dan riwayat pesanan platform.</p>
    `
  },
  'kebijakan-refund': {
    title: 'Kebijakan Pengembalian Dana (Refund)',
    breadcrumbs: ['Legalitas', 'Kebijakan Refund'],
    content: `
      <h2>Kapan Uang Anda Bisa Kembali?</h2>
      <p>GameZone akan mengembalikan dana 100% kepada pembeli dalam kondisi berikut:</p>
      <ul>
        <li>Seller membatalkan pesanan karena kehabisan stok.</li>
        <li>Seller tidak memproses pesanan melewati batas waktu yang telah ditentukan (Contoh: 1x24 Jam tidak ada konfirmasi pengiriman).</li>
        <li>Hasil dari mediasi CS membuktikan bahwa produk/akun yang diberikan seller tidak valid/bodong/terkena hack-back, dengan catatan komplain dilakukan dalam masa tunggu pesanan selesai.</li>
      </ul>
      <p><strong>Pengecualian:</strong> Refund TIDAK BERLAKU jika kesalahan ada pada Pembeli (misal: memberikan ID game yang salah, membagikan data login kepada pihak lain, atau telah menekan tombol 'Pesanan Selesai').</p>
    `
  },
  'kebijakan-privasi': {
    title: 'Kebijakan Privasi Data',
    breadcrumbs: ['Legalitas', 'Kebijakan Privasi'],
    content: `
      <h2>Perlindungan Data Anda</h2>
      <p>Pembaruan Terakhir: 1 Januari 2026</p>
      <p>Kami sangat peduli terhadap enkripsi dan privasi keamanan Anda. GameZone menggunakan data pengguna secara terbatas untuk keperluan fungsional platform.</p>
      <h3>Informasi yang Kami Simpan</h3>
      <p>Nama, email, password (terenkripsi), dan riwayat pesanan (log transaksi). Kami juga meminta KYC berupa nomor identitas eksklusif bagi pengguna yang ingin membuka merchant/toko, yang dienkripsi secara independen dengan sistem pihak ketiga berstandar bank.</p>
      <h3>Pembagian Data Tiga Pihak</h3>
      <p>Kami tidak akan pernah memperjualbelikan database Anda. Kebijakan ini hanya memperbolehkan sharing informasi kepada pemroses gerbang pembayaran (Payment Gateway/Bank) murni untuk menyukseskan invoice transaksi.</p>
    `
  }
};
