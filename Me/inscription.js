const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// switch UI
registerBtn.onclick = () => container.classList.add('active');
loginBtn.onclick = () => container.classList.remove('active');


// =====================
// INSCRIPTION
// =====================
const signupForm = document.getElementById("signupform");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // récupérer ou créer liste users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ajouter user
    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie " + name);

    // redirection simple
    window.location.href = "inscription.html";
});


// =====================
// LOGIN
// =====================
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(u => u.email === email && u.password === password);

    if (found) {
        alert("Bienvenue ShoosStyles " + found.name);
        window.location.href = "index.html";
    } else {
        alert("Email ou mot de passe incorrect");
    }
});