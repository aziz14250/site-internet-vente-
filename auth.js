// auth.js

// Gestion des modals
const authModal = document.getElementById('auth-modal');
const registerModal = document.getElementById('register-modal');
const closeButtons = document.querySelectorAll('.close-btn');
const authBtn = document.getElementById('auth-btn');
const showRegisterLink = document.getElementById('show-register');
const homeLink = document.getElementById('home-link');  // Lien Accueil

// Afficher le modal de connexion uniquement lorsqu'on clique sur le bouton
authBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    registerModal.style.display = 'none';  // Assure que le modal d'inscription est caché
});

// Afficher le modal d'inscription
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

// Fermer les modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        authModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Soumission du formulaire de connexion
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Connexion avec : ${username} / ${password}`);
    // Ajoutez ici l'appel à votre backend (requête fetch)
});

// Soumission du formulaire d'inscription
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;

    console.log(`Inscription avec : ${newUsername}, ${email}, ${newPassword}`);
    // Ajoutez ici l'appel à votre backend (requête fetch)
});

// Lien Accueil
homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige vers la page d'accueil
});
