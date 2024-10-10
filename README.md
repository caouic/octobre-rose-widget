# Widget Octobre Rose

![Octobre Rose](https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/images/noeud_rose.png)

## Description

Ce projet permet d'ajouter facilement un nœud rose sur votre site web pour soutenir **Octobre Rose**, la campagne annuelle de sensibilisation au dépistage du cancer du sein.

## Auteur

Ce projet a été créé par **Philippe Ruaudel**.

## Fonctionnalités

- Affichage d'un nœud rose en bas à droite du site.
- Choix de l'animation d'apparition : fondu enchaîné ou glissement depuis la droite.
- Option pour afficher l'icône en forme ronde ou carrée.
- Ajout d'une ombre autour du widget.
- Option pour activer un effet de pulsation (cœur qui bat).
- **Possibilité d'afficher le widget sur l'ensemble du site ou sur des pages spécifiques.**
- Lien cliquable vers un site d'information sur le cancer du sein.

## Intégration via jsDelivr

Vous pouvez ajouter le widget Octobre Rose à votre site en le chargeant directement depuis GitHub via jsDelivr.

### Option 1 : Afficher le widget sur toutes les pages du site

1. **Inclure le script du widget** dans votre code HTML, de préférence juste avant la balise de fermeture `</body>` ou dans le `<head>` si vous préférez :

   ```html
   <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
   ```

2. **Personnaliser les options (facultatif)** en ajoutant le script suivant **après** l'inclusion du script du widget :

   ```html
   <script>
       (function() {
           if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
               window.noeudRoseWidget.setOptions({
                   animation: 'fade-in',  // Options : 'fade-in', 'slide-in'
                   shape: 'round',        // Options : 'round', 'square'
                   pulse: true            // Options : true, false
               });
           }
       })();
   </script>
   ```

### Option 2 : Afficher le widget sur des pages spécifiques

#### Méthode A : Inclure le script uniquement sur les pages souhaitées

- **Dans les pages spécifiques** où vous souhaitez afficher le widget, ajoutez le script du widget :

  ```html
  <!-- Inclusion du widget Octobre Rose sur une page spécifique -->
  <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
  ```

- **Personnalisez les options (facultatif)** comme indiqué précédemment.

#### Méthode B : Contrôler l'affichage du widget via le script

- **Inclure le script du widget** sur toutes les pages de votre site :

  ```html
  <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
  ```

- **Ajouter le script de personnalisation** pour contrôler l'affichage du widget en fonction de la page :

  ```html
  <script>
      (function() {
          if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
              var pagesAvecWidget = ['/contact.html', '/a-propos.html']; // Liste des pages où afficher le widget
              var cheminActuel = window.location.pathname;

              if (pagesAvecWidget.includes(cheminActuel)) {
                  // Afficher le widget avec les options souhaitées
                  window.noeudRoseWidget.setOptions({
                      afficherWidget: true,
                      animation: 'slide-in',
                      shape: 'square',
                      pulse: false
                  });
              } else {
                  // Ne pas afficher le widget sur cette page
                  window.noeudRoseWidget.setOptions({
                      afficherWidget: false
                  });
              }
          }
      })();
  </script>
  ```

  **Remarques :**

  - Remplacez `'/contact.html'` et `'/a-propos.html'` par les chemins des pages où vous souhaitez afficher le widget.
  - Assurez-vous que le script `noeud-rose.js` est à la version `v1.0` ou ultérieure pour supporter l'option `afficherWidget`.

### Exemple Complet

**Affichage du widget sur toutes les pages :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Site avec le Widget Octobre Rose</title>
</head>
<body>

    <!-- Contenu de votre site -->

    <!-- Inclusion du widget Octobre Rose sur toutes les pages -->
    <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
    <script>
        (function() {
            if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
                window.noeudRoseWidget.setOptions({
                    animation: 'fade-in',
                    shape: 'round',
                    pulse: true
                });
            }
        })();
    </script>
</body>
</html>
```

**Affichage du widget sur des pages spécifiques (Méthode B) :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Site avec le Widget Octobre Rose</title>
</head>
<body>

    <!-- Contenu de votre site -->

    <!-- Inclusion du widget Octobre Rose sur toutes les pages -->
    <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
    <script>
        (function() {
            if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
                var pagesAvecWidget = ['/contact.html', '/a-propos.html']; // Pages où afficher le widget
                var cheminActuel = window.location.pathname;

                if (pagesAvecWidget.includes(cheminActuel)) {
                    // Afficher le widget avec les options souhaitées
                    window.noeudRoseWidget.setOptions({
                        afficherWidget: true,
                        animation: 'slide-in',
                        shape: 'square',
                        pulse: false
                    });
                } else {
                    // Ne pas afficher le widget sur cette page
                    window.noeudRoseWidget.setOptions({
                        afficherWidget: false
                    });
                }
            }
        })();
    </script>
</body>
</html>
```

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

Merci à toutes les personnes qui soutiennent la lutte contre le cancer du sein.

## Transparence

Ce code a été développé avec l'aide de l'intelligence artificielle **ChatGPT o1-Preview**.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
