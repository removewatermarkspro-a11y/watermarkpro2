# Script d'Optimisation des Images

## 🚀 Installation

```bash
npm install sharp --save-dev
```

## 📖 Utilisation

```bash
node optimize-images.js
```

## ⚙️ Configuration

Le script optimise automatiquement :
- **Format** : Conversion en WebP (30-50% plus léger)
- **Qualité** : 80% (logos: 90%, avatars: 85%)
- **Largeur max** : 1200px (garde les proportions)
- **Dossier de sortie** : `/public/images-optimized/`

## 📊 Résultats attendus

- Logo : 107 KB → ~8 KB
- Images features : 300-800 KB → 60-120 KB
- Avatars : 100-200 KB → 20-40 KB
- **Gain total estimé** : 80-90%

## ✅ Sécurité

- Les images originales restent intactes dans `/public/images/`
- Les versions optimisées sont créées dans `/public/images-optimized/`
- Vous pouvez revenir en arrière à tout moment

## 🎯 Prochaines étapes

1. Lancer le script
2. Vérifier les résultats dans `/public/images-optimized/`
3. Tester une image optimisée sur le site
4. Si OK → migrer toutes les images
