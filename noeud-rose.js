// Auteur : Philippe Ruaudel
// Description : Widget pour afficher un nœud rose sur les sites web en soutien à Octobre Rose
// Licence : MIT

(function() {
    // Paramètres personnalisables par défaut
    var options = {
        afficherWidget: true,      // Options : true, false
        animation: 'fade-in',      // Options : 'fade-in', 'slide-in'
        shape: 'round',            // Options : 'round', 'square'
        pulse: true,               // Options : true, false
        customStyles: {}           // Styles CSS personnalisés
    };

    // Fonction pour permettre aux utilisateurs de définir leurs propres options
    window.noeudRoseWidget = {
        setOptions: function(userOptions) {
            if (userOptions && typeof userOptions === 'object') {
                for (var key in userOptions) {
                    if (userOptions.hasOwnProperty(key) && options.hasOwnProperty(key)) {
                        options[key] = userOptions[key];
                    }
                }
            }
        }
    };

    // Attendre que le DOM soit chargé
    document.addEventListener('DOMContentLoaded', function() {
        // Vérifier si le widget doit être affiché sur cette page
        if (!options.afficherWidget) {
            return; // Sortir si le widget ne doit pas être affiché
        }

        var noeudRose = document.createElement('img');
        noeudRose.src = 'https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.1/images/noeud_rose.png';
        noeudRose.alt = 'Octobre Rose';

        // Styles de base
        noeudRose.style.position = 'fixed';
        noeudRose.style.bottom = '10px';
        noeudRose.style.right = '10px';
        noeudRose.style.width = '50px';
        noeudRose.style.height = '50px';
        noeudRose.style.zIndex = '1000';
        noeudRose.style.cursor = 'pointer';
        noeudRose.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        // Appliquer la forme de l'icône
        if (options.shape === 'round') {
            noeudRose.style.borderRadius = '50%';
        }

        // Appliquer les styles personnalisés si fournis
        if (options.customStyles && typeof options.customStyles === 'object') {
            for (var style in options.customStyles) {
                if (options.customStyles.hasOwnProperty(style)) {
                    noeudRose.style[style] = options.customStyles[style];
                }
            }
        }

        // Préparation pour l'animation
        noeudRose.style.opacity = '0';
        noeudRose.style.transition = 'all 0.5s ease-in-out';

        if (options.animation === 'slide-in') {
            noeudRose.style.transform = 'translateX(100px)';
        }

        // Ajouter l'effet de pulsation si activé
        if (options.pulse) {
            // Définir les keyframes pour l'animation de pulsation
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            var keyFrames = '@keyframes pulse {' +
                '0% { transform: scale(1); }' +
                '50% { transform: scale(1.1); }' +
                '100% { transform: scale(1); }' +
            '}';
            styleElement.appendChild(document.createTextNode(keyFrames));
            document.head.appendChild(styleElement);

            // Appliquer l'animation de pulsation
            noeudRose.style.animation = 'pulse 1.5s infinite';
        }

        // Insertion de l'image dans le document
        document.body.appendChild(noeudRose);

        // Déclenchement de l'animation après un court délai
        setTimeout(function() {
            noeudRose.style.opacity = '1';
            if (options.animation === 'slide-in') {
                noeudRose.style.transform = 'translateX(0)';
            }
        }, 100);

        // Ajouter un gestionnaire d'événement pour le clic
        noeudRose.addEventListener('click', function() {
            window.open('https://www.cancerdusein.org/', '_blank');
        });
    });
})();
