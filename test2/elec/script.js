
    // Gestion du bouton Retour
document.getElementById('backButton').addEventListener('click', function() {
    // Si l'historique contient au moins une page précédente
    if (history.length > 1) {
        history.back();
    } else {
        // Redirection vers une page d'accueil par défaut
        window.location.href = "index.html";
    }
});
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close mobile menu after click
                if (window.innerWidth <= 900) {
                    document.querySelector('nav ul').classList.remove('show');
                }
            }
        });
    });

    // Animation for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        });
    });

    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const navList = document.querySelector('nav ul');
        navList.classList.toggle('show');
        
        // Ajout d'une overlay pour le fond
        if (navList.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function(e) {
        const navList = document.querySelector('nav ul');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (window.innerWidth <= 900 && 
            navList.classList.contains('show') && 
            !navList.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navList.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
