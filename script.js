function showRegister() {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
}

function showLogin() {
    registerBox.style.display = "none";
    loginBox.style.display = "block";
}

function login() {
    let u = loginUser.value;
    let p = loginPass.value;
    let savedUser = localStorage.getItem("user") || "adminlincuna";
    let savedPass = localStorage.getItem("pass") || "adminlincuna123";
    if (u === savedUser && p === savedPass) {
        loginBox.style.display = "none";
        mainContent.style.display = "block";
    } else {
        alert("Wrong username or password");
    }
}

function register() {
    let u = regUser.value;
    let p = regPass.value;
    if (u === "" || p === "") return alert("Fill all fields");
    localStorage.setItem("user", u);
    localStorage.setItem("pass", p);
    alert("Registered successfully");
    showLogin();
}

function createRipple(event) {
    const element = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

let isDark = false;
function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
        document.body.style.background = 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)';
        document.querySelector('.theme-toggle').textContent = '☀️';
    } else {
        document.body.style.background = 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)';
        document.querySelector('.theme-toggle').textContent = '🌙';
    }
}

function logout() {
    document.querySelector('.container').style.animation = 'slideOut 0.5s ease-in';
    setTimeout(() => {
        alert('Thanks for visiting!');
        location.reload();
    }, 500);
}
