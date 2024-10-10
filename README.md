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
- Possibilité d'afficher le widget sur l'ensemble du site ou sur des pages spécifiques.
- Lien cliquable vers un site d'information sur le cancer du sein.

## Intégration Rapide via jsDelivr

Vous pouvez ajouter le widget Octobre Rose à votre site en insérant simplement la balise suivante dans votre code HTML, de préférence juste avant la balise de fermeture `</body>` :

 ```html 
 <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
```



## Personnalisation des Options
Si vous souhaitez personnaliser le widget (animation, forme, pulsation), ajoutez le script suivant après l'inclusion du script du widget :



```html
<script>
    (function() {
        if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
            window.noeudRoseWidget.setOptions({
                animation: 'slide-in',  // Options : 'fade-in', 'slide-in'
                shape: 'square',        // Options : 'round', 'square'
                pulse: false            // Options : true, false
            });
        }
    })();
</script> 
```

## Exemple Complet

```html 
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Site avec le Widget Octobre Rose</title>
</head>
<body>

    <!-- Contenu de votre site -->

    <!-- Inclusion du widget Octobre Rose -->
    <script src="https://cdn.jsdelivr.net/gh/caouic/octobre-rose-widget@v1.0/noeud-rose.js"></script>
    <script>
        (function() {
            if (window.noeudRoseWidget && typeof window.noeudRoseWidget.setOptions === 'function') {
                window.noeudRoseWidget.setOptions({
                    animation: 'slide-in',
                    shape: 'square',
                    pulse: false
                });
            }
        })();
    </script>
</body>
</html>

```
## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Remerciements
Merci à toutes les personnes qui soutiennent la lutte contre le cancer du sein.

## Transparence
Ce code a été développé avec l'aide de l'intelligence artificielle ChatGPT o1-Preview.

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

