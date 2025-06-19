document.addEventListener('DOMContentLoaded', function() {

    // --- Gestion du menu hamburger ---
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (navToggle && sidebar) {
        navToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });

        // Fermer la sidebar quand un lien est cliqué sur mobile
        sidebar.addEventListener('click', function(event) {
            if (event.target.tagName === 'A' && window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    }

    // --- Gestion de la classe 'active' pour le lien de navigation ---
    const currentPath = window.location.pathname; // Ex: /TRC25-Documentation-Mecanique/pieces/piece3.html
    const navLinks = document.querySelectorAll('.sidebar a');

    // IMPORTANT : Ajustez repoBase selon votre configuration GitHub Pages
    const repoBase = '/TRC25-Documentation-Mecanique'; 
    // Si votre site est à la racine d'un domaine personnalisé (ex: docs.mondomaine.com), laissez ''

    let normalizedCurrentPath = currentPath;
    if (normalizedCurrentPath.startsWith(repoBase)) {
        normalizedCurrentPath = normalizedCurrentPath.substring(repoBase.length);
    }
    // Gérer la page d'accueil ou la racine du dépôt
    if (normalizedCurrentPath === '/' || normalizedCurrentPath === '' || normalizedCurrentPath.endsWith('/index.html')) {
        normalizedCurrentPath = '/index.html'; // Normaliser pour une comparaison simple
    }

    navLinks.forEach(link => {
        let linkHref = link.getAttribute('href');
        
        // Ignorer les liens externes (GitHub)
        if (linkHref.startsWith('http://') || linkHref.startsWith('https://')) {
            return;
        }

        // Normaliser le chemin du lien de la même manière
        let linkPath = linkHref;
        if (linkPath.startsWith(repoBase)) {
            linkPath = linkPath.substring(repoBase.length);
        }
        if (linkPath === '/' || linkPath === '' || linkPath.endsWith('/index.html')) {
            linkPath = '/index.html';
        }

        // Comparaison finale
        if (normalizedCurrentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // S'assurer qu'un seul lien est actif
        }
    });
});