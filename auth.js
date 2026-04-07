// ═══════════════════════════════════════════════════
// ─── AUTH PAGE LOGIC ─────────────────────────────
// ═══════════════════════════════════════════════════

const AUTH_STORAGE_KEY = 'gz_users';
const SESSION_KEY      = 'gz_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || '[]');
}
function saveUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}
function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

// ── UTILS ──
const showToast = (message, type = 'success') => {
  const toast = document.getElementById('toast');
  toast.textContent = '';
  const icon = document.createElement('span');
  icon.textContent = type === 'success' ? '✅' : '❌';
  const text = document.createTextNode(' ' + message);
  toast.appendChild(icon);
  toast.appendChild(text);
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
};

// ── Tabs ──
function switchAuthTab(tab) {
  const loginWrap    = document.getElementById('auth-login-wrap');
  const registerWrap = document.getElementById('auth-register-wrap');
  const tabLogin     = document.getElementById('tab-login');
  const tabRegister  = document.getElementById('tab-register');
  
  if (!loginWrap || !registerWrap) return;

  if (tab === 'login') {
    loginWrap.classList.remove('hidden');
    registerWrap.classList.add('hidden');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    
    // update url parameter without reloading
    const url = new URL(window.location);
    url.searchParams.set('tab', 'login');
    window.history.pushState({}, '', url);
  } else {
    loginWrap.classList.add('hidden');
    registerWrap.classList.remove('hidden');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    
    const url = new URL(window.location);
    url.searchParams.set('tab', 'register');
    window.history.pushState({}, '', url);
  }
}

// ── Password ──
function calcPasswordStrength(pw) {
  let score = 0;
  if (pw.length >= 8)  score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

function updatePasswordStrength(pw) {
  const fill  = document.getElementById('pw-strength-fill');
  const label = document.getElementById('pw-strength-label');
  if (!fill || !label) return;
  const score  = calcPasswordStrength(pw);
  const pct    = (score / 5) * 100;
  const colors = ['#ef4444','#f97316','#eab308','#22c55e','#10b981'];
  const labels = ['Sangat Lemah','Lemah','Cukup','Kuat','Sangat Kuat'];
  fill.style.width      = pct + '%';
  fill.style.background = colors[Math.min(score - 1, 4)] || '#ef4444';
  label.textContent     = pw ? (labels[Math.min(score - 1, 4)] || 'Sangat Lemah') : 'Kekuatan password';
  label.style.color     = pw ? (colors[Math.min(score - 1, 4)] || '#ef4444') : '';
}

function setupTogglePw(btnId, inputId) {
  const btn   = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type     = isHidden ? 'text' : 'password';
    btn.textContent = isHidden ? '🙈' : '👁️';
  });
}

// ── Handlers ──
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-password').value;
  let valid   = true;
  const errEmail   = document.getElementById('login-err-email');
  const errPw      = document.getElementById('login-err-pw');
  const errGeneral = document.getElementById('login-err-general');
  errEmail.textContent = ''; errPw.textContent = ''; errGeneral.textContent = '';

  if (!email || !/\S+@\S+\.\S+/.test(email)) { errEmail.textContent = 'Masukkan email yang valid.'; valid = false; }
  if (!pw || pw.length < 6) { errPw.textContent = 'Password minimal 6 karakter.'; valid = false; }
  if (!valid) return;

  const spinner = document.getElementById('login-spinner');
  const btnText = document.getElementById('login-btn-text');
  const btn     = document.getElementById('btn-login-submit');
  spinner.classList.remove('hidden'); btnText.textContent = 'Memverifikasi...'; btn.disabled = true;

  setTimeout(() => {
    const users = getUsers();
    const user  = users.find(u => u.email === email && u.password === btoa(pw));
    spinner.classList.add('hidden'); btnText.textContent = '⚡ Masuk Sekarang'; btn.disabled = false;
    
    if (!user) { errGeneral.textContent = '❌ Email atau password salah. Coba lagi.'; return; }
    
    saveSession(user);
    showToast('Berhasil masuk! Mengalihkan...', 'success');
    
    // Redirect back to main page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }, 1000);
}

function handleRegister(e) {
  e.preventDefault();
  const name     = document.getElementById('reg-name').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const pw       = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;
  const agreeTos = document.getElementById('agree-tos').checked;
  
  let valid = true;
  const errName     = document.getElementById('reg-err-name');
  const errUsername = document.getElementById('reg-err-username');
  const errEmail    = document.getElementById('reg-err-email');
  const errPw       = document.getElementById('reg-err-pw');
  const errConfirm  = document.getElementById('reg-err-confirm');
  const errGeneral  = document.getElementById('reg-err-general');
  [errName,errUsername,errEmail,errPw,errConfirm,errGeneral].forEach(el => { el.textContent = ''; });

  if (!name || name.length < 2) { errName.textContent = 'Nama minimal 2 karakter.'; valid = false; }
  if (!username || !/^[a-zA-Z0-9_]{3,20}$/.test(username)) { errUsername.textContent = 'Username 3-20 karakter, hanya huruf/angka/_.'; valid = false; }
  if (!email || !/\S+@\S+\.\S+/.test(email)) { errEmail.textContent = 'Masukkan email yang valid.'; valid = false; }
  if (!pw || pw.length < 8) { errPw.textContent = 'Password minimal 8 karakter.'; valid = false; }
  if (pw !== confirm) { errConfirm.textContent = 'Konfirmasi password tidak cocok.'; valid = false; }
  if (!agreeTos) { errGeneral.textContent = '⚠️ Kamu harus menyetujui Syarat & Ketentuan.'; valid = false; }
  if (!valid) return;

  const users = getUsers();
  if (users.find(u => u.email === email)) { errEmail.textContent = 'Email ini sudah terdaftar.'; return; }
  if (users.find(u => u.username === username)) { errUsername.textContent = 'Username sudah dipakai.'; return; }

  const spinner = document.getElementById('register-spinner');
  const btnText = document.getElementById('register-btn-text');
  const btn     = document.getElementById('btn-register-submit');
  spinner.classList.remove('hidden'); btnText.textContent = 'Membuat akun...'; btn.disabled = true;

  setTimeout(() => {
    const newUser = { id: 'u' + Date.now(), name, username, email, password: btoa(pw), joinedAt: new Date().toISOString(), orders: [] };
    users.push(newUser);
    saveUsers(users);
    saveSession(newUser);
    
    spinner.classList.add('hidden'); btnText.textContent = '🎉 Buat Akun Gratis'; btn.disabled = false;
    
    showToast('Akun berhasil dibuat! Mengalihkan...', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  }, 1200);
}

// Init Page
document.addEventListener('DOMContentLoaded', () => {
  // Determine which tab to show from URL
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get('tab') || 'login';
  switchAuthTab(tab);

  // Tab switching
  document.getElementById('tab-login')?.addEventListener('click', () => switchAuthTab('login'));
  document.getElementById('tab-register')?.addEventListener('click', () => switchAuthTab('register'));
  document.getElementById('switch-to-register')?.addEventListener('click', () => switchAuthTab('register'));
  document.getElementById('switch-to-login')?.addEventListener('click', () => switchAuthTab('login'));

  // Password toggles
  setupTogglePw('toggle-login-pw',    'login-password');
  setupTogglePw('toggle-reg-pw',      'reg-password');
  setupTogglePw('toggle-reg-confirm', 'reg-confirm');

  // Listeners
  document.getElementById('reg-password')?.addEventListener('input', (e) => updatePasswordStrength(e.target.value));
  document.getElementById('auth-login-form')?.addEventListener('submit', handleLogin);
  document.getElementById('auth-register-form')?.addEventListener('submit', handleRegister);

  document.getElementById('forgot-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Link reset password dikirim ke email kamu! (simulasi) 📩', 'success');
  });
  document.getElementById('btn-google-login')?.addEventListener('click', () => showToast('Login Google segera hadir! 🚀', 'success'));
  document.getElementById('btn-google-register')?.addEventListener('click', () => showToast('Daftar Google segera hadir! 🚀', 'success'));
});
