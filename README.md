# Widget Octobre Rose

![Octobre Rose](https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.1/images/noeud_rose.png)

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
- Possibilité d'afficher le widget sur l'ensemble du site ou sur des pages spécifiques.
- Possibilité de modifier la position du widget sur la page (par exemple, le placer à gauche).
- Lien cliquable vers un site d'information sur le cancer du sein.

## Intégration via jsDelivr

Vous pouvez ajouter le widget Octobre Rose à votre site en le chargeant directement depuis GitHub via jsDelivr.

### Option 1 : Afficher le widget sur toutes les pages du site

1. **Inclure le script du widget** dans votre code HTML, de préférence juste avant la balise de fermeture `</body>` ou dans le `<head>` si vous préférez :

   ```html
   <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.2/noeud-rose.js"></script>
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
  <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.2/noeud-rose.js"></script>
  ```

- **Personnalisez les options (facultatif)** comme indiqué précédemment.

#### Méthode B : Contrôler l'affichage du widget via le script

- **Inclure le script du widget** sur toutes les pages de votre site :

  ```html
  <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.2/noeud-rose.js"></script>
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
  - Assurez-vous que le script `noeud-rose.js` est à la version `v1.2` ou ultérieure pour supporter l'option `afficherWidget`.

### Personnalisation Avancée : Modifier la Position du Widget

Si vous souhaitez modifier la position du widget sur votre site web (par exemple, le placer en bas à gauche au lieu de en bas à droite), vous pouvez le faire en personnalisant les styles CSS via les options du widget.

#### Modifier la position du widget

Pour changer la position du widget, ajoutez les propriétés CSS personnalisées dans les options du widget.

**Exemple : Placer le widget en bas à gauche**

```html
<script>
    (function() {
        if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
            window.noeudRoseWidget.setOptions({
                customStyles: {
                    bottom: '10px',
                    left: '10px',
                    right: 'auto'
                }
            });
        }
    })();
</script>
```

Dans cet exemple, nous avons ajouté l'option `customStyles` pour définir des styles CSS personnalisés.

#### Autres exemples de personnalisation de position

- **Placer le widget en haut à droite**

  ```html
  <script>
      (function() {
          if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
              window.noeudRoseWidget.setOptions({
                  customStyles: {
                      top: '10px',
                      right: '10px',
                      bottom: 'auto'
                  }
              });
          }
      })();
  </script>
  ```

- **Placer le widget en haut à gauche**

  ```html
  <script>
      (function() {
          if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
              window.noeudRoseWidget.setOptions({
                  customStyles: {
                      top: '10px',
                      left: '10px',
                      bottom: 'auto',
                      right: 'auto'
                  }
              });
          }
      })();
  </script>
  ```

#### Notes sur la personnalisation des styles

- **Flexibilité** : Vous pouvez utiliser `customStyles` pour modifier n'importe quelle propriété CSS du widget.
- **Priorité des styles** : Les styles définis dans `customStyles` écrasent les styles par défaut du widget.
- **Respecter les unités CSS** : Assurez-vous d'inclure les unités appropriées (par exemple, `px`, `%`) lorsque vous définissez les valeurs des styles.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

Merci à toutes les personnes qui soutiennent la lutte contre le cancer du sein.

## Transparence

Ce code a été développé avec l'aide de l'intelligence artificielle **ChatGPT o1-Preview**.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
