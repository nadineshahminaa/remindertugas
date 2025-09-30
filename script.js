// Data Storage
let currentUser = null;
let users = [];
let siswaData = [
    {urut: 1, induk: "2526100242", nisn: "0098544625", nama: "ABYAN ALFARIZI", gender: "L"},
    {urut: 2, induk: "2526100243", nisn: "0101662757", nama: "AISYAH CHYNTIA DEVANTARA", gender: "P"},
    {urut: 3, induk: "2526100245", nisn: "0102655034", nama: "ALIVIA CAHAYA LUKMANA", gender: "P"},
    {urut: 4, induk: "2526100246", nisn: "3093530785", nama: "ANDINI NOVRIANI", gender: "P"},
    {urut: 5, induk: "2526100247", nisn: "0102258277", nama: "ASYIFA NURMAULIDYA", gender: "P"},
    {urut: 6, induk: "2526100248", nisn: "0105702116", nama: "BAGUS PAMBUDI PRIYAMBODO", gender: "L"},
    {urut: 7, induk: "2526100249", nisn: "0107333071", nama: "BRAMANTYO ARSYA WIJAYA", gender: "L"},
    {urut: 8, induk: "2526100250", nisn: "0108224984", nama: "CRISNA JULIANA", gender: "L"},
    {urut: 9, induk: "2526100251", nisn: "0097134132", nama: "DAVIN ALFARREL NASRULLAH", gender: "L"},
    {urut: 10, induk: "2526100252", nisn: "0099847770", nama: "DEMA ARYA RAMADHAN", gender: "L"},
    {urut: 11, induk: "2526100253", nisn: "0072174075", nama: "DON MATTEU ABIE WEWENGKANG", gender: "L"},
    {urut: 12, induk: "2526100254", nisn: "0098432659", nama: "FANEZA PUTRI", gender: "P"},
    {urut: 13, induk: "2526100255", nisn: "0093650927", nama: "FARIS AHMAD GHAISAN", gender: "L"},
    {urut: 14, induk: "2526100256", nisn: "0098186352", nama: "HABIB RAMADHAN", gender: "L"},
    {urut: 15, induk: "2526100257", nisn: "0095734918", nama: "ILHAM MUHAMAD FAHRI", gender: "L"},
    {urut: 16, induk: "2526100258", nisn: "0092455615", nama: "INTAN NURAENI", gender: "P"},
    {urut: 17, induk: "2526100259", nisn: "0107292545", nama: "KHAIRA PUTRI MADANI", gender: "P"},
    {urut: 18, induk: "2526100260", nisn: "0096211841", nama: "LULU MAULIDA", gender: "P"},
    {urut: 19, induk: "2526100261", nisn: "0109986241", nama: "MAISIE ANZALA MARAMIS", gender: "P"},
    {urut: 20, induk: "2526100262", nisn: "0099270791", nama: "MUHAMAD ADITYA SAPUTRA", gender: "L"},
    {urut: 21, induk: "2526100263", nisn: "0109068873", nama: "MUHAMAD ANZAS ADZAHRI", gender: "L"},
    {urut: 22, induk: "2526100264", nisn: "3100701335", nama: "MUHAMMAD ALIF FATIR SYA'BANI", gender: "L"},
    {urut: 23, induk: "2526100265", nisn: "0106062068", nama: "MUHAMMAD CANDRA KUSUMA", gender: "L"},
    {urut: 24, induk: "2526100266", nisn: "3091775450", nama: "MUHAMMAD HAFIYZ NURHIDAYAH", gender: "L"},
    {urut: 25, induk: "2526100267", nisn: "0094840286", nama: "MUHAMMAD NOVAL AIDIL ADHA", gender: "L"},
    {urut: 26, induk: "2526100268", nisn: "0102828715", nama: "MUHAMMAD RAJIB ZAHIR", gender: "L"},
    {urut: 27, induk: "2526100269", nisn: "0096921801", nama: "MUHAMMAD REFAN ABIENA WAFA", gender: "L"},
    {urut: 28, induk: "2526100270", nisn: "0091978454", nama: "MUTIA KHAMELIA", gender: "P"},
    {urut: 29, induk: "2526100271", nisn: "0109463616", nama: "NADINE SHAHMINA", gender: "P"},
    {urut: 30, induk: "2526100272", nisn: "3101297292", nama: "NAZHRIL RIZKY ALFIANSYAH", gender: "L"},
    {urut: 31, induk: "2526100273", nisn: "0109666594", nama: "NIKO KEANDRE ADINATA", gender: "L"},
    {urut: 32, induk: "2526100274", nisn: "0097537667", nama: "NUR SYIFA FAUZIAH", gender: "P"},
    {urut: 33, induk: "2526100275", nisn: "0106213535", nama: "OKTAVIA INDRIANI", gender: "P"},
    {urut: 34, induk: "2526100276", nisn: "0093551710", nama: "RAFI UDDIN", gender: "L"},
    {urut: 35, induk: "2526100277", nisn: "3105770860", nama: "RAFLI", gender: "L"},
    {urut: 36, induk: "2526100278", nisn: "0096725431", nama: "RANTY DWI OKTAVIA", gender: "P"},
    {urut: 37, induk: "2526100279", nisn: "0101135883", nama: "REISYA AULIAUL JANNAH", gender: "P"},
    {urut: 38, induk: "2526100280", nisn: "0104775955", nama: "RESTU ALFARIZHI", gender: "L"},
    {urut: 39, induk: "2526100281", nisn: "0106735707", nama: "REVAND AQILA AL HAFIZ", gender: "L"},
    {urut: 40, induk: "2526100282", nisn: "0104647880", nama: "RIZKY MAULANA", gender: "L"},
    {urut: 41, induk: "2526100283", nisn: "0104063937", nama: "SALSABIILA AZZAHRA", gender: "P"},
    {urut: 42, induk: "2526100284", nisn: "3091083347", nama: "SITI AINUN", gender: "P"},
    {urut: 43, induk: "2526100285", nisn: "0104760638", nama: "SITI SALWA AULIA", gender: "P"},
    {urut: 44, induk: "2526100286", nisn: "0101145179", nama: "SULTHAN AZZAM RIZKQULLAH", gender: "L"},
    {urut: 45, induk: "2526100287", nisn: "0091581839", nama: "TARUNA JAYALAKSANA SUWARMAN", gender: "L"}
];

let tasks = [];

const subjects = [
    "PJOK", "ENGLISH", "IPAS", "INDONESIA", "SBK", "PKN", "PAI", 
    "MATH", "INFORMATIKA", "SUNDA", "SEJARAH", "PRODUKTIF BU DIAH", 
    "PRODUKTIF PA DIDIN", "PRODUKTIF PAK RIZKY"
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    checkAuth();
    initializeEventListeners();
    renderSiswaTable();
    renderTasks();
    updateStats();
});

// Storage Functions
function loadFromStorage() {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    users = storedUsers;
    tasks = storedTasks;
    currentUser = storedCurrentUser;
}

function saveToStorage() {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Auth Functions
function checkAuth() {
    if (!currentUser) {
        showLoginModal();
    } else {
        updateUserProfile();
    }
}

function showLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function showRegisterModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('registerModal').classList.add('active');
}

function hideModals() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('registerModal').classList.remove('active');
}

function updateUserProfile() {
    const userName = document.querySelector('.user-name');
    const userImg = document.querySelector('.user-profile img');

    if (currentUser) {
        userName.textContent = currentUser.name;
        userImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=667eea&color=fff`;
    }

    // Restrict task addition to teachers only
    const addTaskBtn = document.getElementById('addTaskBtn');
    if (currentUser && currentUser.role === 'admin') {
        addTaskBtn.style.display = 'inline-flex';
    } else {
        addTaskBtn.style.display = 'none';
    }
}

// Event Listeners
function initializeEventListeners() {
    // Auth
    document.getElementById('showRegister').addEventListener('click', showRegisterModal);
    document.getElementById('showLogin').addEventListener('click', () => {
        document.getElementById('registerModal').classList.remove('active');
        showLoginModal();
    });
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.querySelector('.nav-item').addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });
    
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.navigate;
            navigateToPage(page);
        });
    });
    
    // Menu Toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });
    
    // Profile Dropdown
    document.getElementById('userProfile').addEventListener('click', () => {
        document.querySelector('.profile-dropdown').classList.toggle('active');
    });
    
    // Settings
    document.getElementById('settingsToggle').addEventListener('click', () => {
        document.getElementById('settingsPanel').classList.toggle('active');
    });
    
    document.getElementById('themeToggle').addEventListener('change', handleThemeToggle);
    document.getElementById('fontSizeSlider').addEventListener('input', handleFontSize);
    
    // Tasks
    document.getElementById('addTaskBtn').addEventListener('click', showAddTaskModal);
    
    // Siswa
    document.getElementById('addSiswaBtn').addEventListener('click', showAddSiswaModal);
}

// Auth Handlers
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        saveToStorage();
        hideModals();
        updateUserProfile();
        showNotification('Login berhasil!', 'success');
    } else {
        showNotification('Email atau password salah!', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const role = document.getElementById('registerRole').value;
    
    if (users.find(u => u.email === email)) {
        showNotification('Email sudah terdaftar!', 'error');
        return;
    }
    
    const newUser = { name, email, password, role };
    users.push(newUser);
    currentUser = newUser;
    saveToStorage();
    hideModals();
    updateUserProfile();
    showNotification('Registrasi berhasil!', 'success');
}

function handleLogout() {
    currentUser = null;
    saveToStorage();
    showLoginModal();
    showNotification('Logout berhasil!', 'success');
}

// Navigation
function handleNavigation(e) {
    e.preventDefault();
    const page = e.currentTarget.dataset.page;
    if (page) {
        navigateToPage(page);
    }
}

function navigateToPage(pageName) {
    // Remove active from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active to current nav item
    const currentNav = document.querySelector(`[data-page="${pageName}"]`);
    if (currentNav) {
        currentNav.classList.add('active');
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show current page
    const currentPage = document.getElementById(`${pageName}Page`);
    if (currentPage) {
        currentPage.classList.add('active');
    }
}

// Settings
function handleThemeToggle(e) {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

function handleFontSize(e) {
    const value = e.target.value;
    document.getElementById('fontSizeValue').textContent = value;
    document.documentElement.style.setProperty('--font-scale', value - 5);
    localStorage.setItem('fontSize', value);
}

// Load saved settings
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').checked = true;
}

const savedFontSize = localStorage.getItem('fontSize');
if (savedFontSize) {
    document.getElementById('fontSizeSlider').value = savedFontSize;
    document.getElementById('fontSizeValue').textContent = savedFontSize;
    document.documentElement.style.setProperty('--font-scale', savedFontSize - 5);
}

// Siswa Functions
function renderSiswaTable() {
    const tbody = document.getElementById('siswaTableBody');
    tbody.innerHTML = '';
    
    siswaData.forEach(siswa => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${siswa.urut}</td>
            <td>${siswa.induk}</td>
            <td>${siswa.nisn}</td>
            <td>${siswa.nama}</td>
            <td>${siswa.gender}</td>
            <td>
                <button class="btn-action btn-edit" onclick="editSiswa(${siswa.urut})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-action btn-delete" onclick="deleteSiswa(${siswa.urut})">
                    <i class="fas fa-trash"></i> Hapus
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function showAddSiswaModal() {
    const nama = prompt('Masukkan nama siswa:');
    if (!nama) return;
    
    const nisn = prompt('Masukkan NISN:');
    if (!nisn) return;
    
    const gender = prompt('Jenis kelamin (L/P):');
    if (!gender || (gender !== 'L' && gender !== 'P')) return;
    
    const newUrut = siswaData.length + 1;
    const newInduk = '2526100' + (242 + newUrut - 1);
    
    siswaData.push({
        urut: newUrut,
        induk: newInduk,
        nisn: nisn,
        nama: nama.toUpperCase(),
        gender: gender.toUpperCase()
    });
    
    renderSiswaTable();
    updateStats();
    showNotification('Siswa berhasil ditambahkan!', 'success');
}

function editSiswa(urut) {
    const siswa = siswaData.find(s => s.urut === urut);
    if (!siswa) return;
    
    const nama = prompt('Edit nama siswa:', siswa.nama);
    if (nama) siswa.nama = nama.toUpperCase();
    
    const nisn = prompt('Edit NISN:', siswa.nisn);
    if (nisn) siswa.nisn = nisn;
    
    const gender = prompt('Edit jenis kelamin (L/P):', siswa.gender);
    if (gender && (gender === 'L' || gender === 'P')) siswa.gender = gender.toUpperCase();
    
    renderSiswaTable();
    showNotification('Data siswa berhasil diupdate!', 'success');
}

function deleteSiswa(urut) {
    if (!confirm('Yakin ingin menghapus data siswa ini?')) return;
    
    siswaData = siswaData.filter(s => s.urut !== urut);
    
    // Reorder urut
    siswaData.forEach((s, index) => {
        s.urut = index + 1;
    });
    
    renderSiswaTable();
    updateStats();
    showNotification('Data siswa berhasil dihapus!', 'success');
}

// Tasks Functions
function renderTasks() {
    const container = document.getElementById('tasksContainer');
    container.innerHTML = '';
    
    if (tasks.length === 0) {
        container.innerHTML = `
            <div class="glass-card" style="padding: 40px; text-align: center;">
                <i class="fas fa-inbox" style="font-size: 64px; color: var(--primary-color); opacity: 0.3; margin-bottom: 16px;"></i>
                <h3>Belum ada tugas</h3>
                <p style="opacity: 0.7;">Klik tombol "Tambah Tugas" untuk membuat tugas baru</p>
            </div>
        `;
        return;
    }
    
    tasks.forEach((task, index) => {
        const deadline = new Date(task.deadline);
        const now = new Date();
        const daysUntil = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
        
        let status = 'pending';
        let statusText = 'Belum Selesai';
        
        if (task.completed) {
            status = 'completed';
            statusText = 'Selesai';
        } else if (daysUntil < 0) {
            status = 'overdue';
            statusText = 'Terlambat';
        }
        
        const card = document.createElement('div');
        card.className = 'task-card glass-card';
        card.innerHTML = `
            <div class="task-header">
                <span class="task-subject">${task.subject}</span>
                <div class="task-actions">
                    <button onclick="toggleTaskComplete(${index})">
                        <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                    </button>
                    <button onclick="deleteTask(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
            <div class="task-footer">
                <div class="task-deadline">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(task.deadline)}</span>
                </div>
                <span class="task-status status-${status}">${statusText}</span>
            </div>
        `;
        container.appendChild(card);
    });
    
    updateStats();
}

function showAddTaskModal() {
    const title = prompt('Judul tugas:');
    if (!title) return;
    
    const description = prompt('Deskripsi tugas:');
    if (!description) return;
    
    const subjectIndex = prompt(`Pilih mata pelajaran (1-${subjects.length}):\n` + 
        subjects.map((s, i) => `${i + 1}. ${s}`).join('\n'));
    
    const subjectIdx = parseInt(subjectIndex) - 1;
    if (isNaN(subjectIdx) || subjectIdx < 0 || subjectIdx >= subjects.length) return;
    
    const deadline = prompt('Deadline (YYYY-MM-DD):');
    if (!deadline) return;
    
    const newTask = {
        title,
        description,
        subject: subjects[subjectIdx],
        deadline,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveToStorage();
    renderTasks();
    showNotification('Tugas berhasil ditambahkan!', 'success');
}

function toggleTaskComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveToStorage();
    renderTasks();
    showNotification(tasks[index].completed ? 'Tugas ditandai selesai!' : 'Tugas ditandai belum selesai!', 'success');
}

function deleteTask(index) {
    if (!confirm('Yakin ingin menghapus tugas ini?')) return;
    
    tasks.splice(index, 1);
    saveToStorage();
    renderTasks();
    showNotification('Tugas berhasil dihapus!', 'success');
}

// Stats
function updateStats() {
    document.getElementById('totalTasks').textContent = tasks.filter(t => !t.completed).length;
    
    const now = new Date();
    const upcomingDeadlines = tasks.filter(t => {
        if (t.completed) return false;
        const deadline = new Date(t.deadline);
        const daysUntil = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
        return daysUntil >= 0 && daysUntil <= 7;
    }).length;
    
    document.getElementById('upcomingDeadlines').textContent = upcomingDeadlines;
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification glass-card';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(135deg, #48bb78, #38a169)' : 
                     type === 'error' ? 'linear-gradient(135deg, #f56565, #e53e3e)' : 
                     'linear-gradient(135deg, #667eea, #764ba2)'};
        color: white;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    `;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Task Reminders
function checkTaskReminders() {
    const now = new Date();
    
    tasks.forEach(task => {
        if (task.completed) return;
        
        const deadline = new Date(task.deadline);
        const daysUntil = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
        
        if (daysUntil === 1 && !task.reminded) {
            showNotification(`Reminder: Tugas "${task.title}" deadline besok!`, 'info');
            task.reminded = true;
            saveToStorage();
        }
    });
}

// Check reminders every hour
setInterval(checkTaskReminders, 3600000);
checkTaskReminders();