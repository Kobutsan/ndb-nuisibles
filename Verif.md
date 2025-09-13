# 🔧 SCRIPT DE SANTÉ ET CORRECTION AUTOMATIQUE
## À exécuter régulièrement pour maintenir le projet en bon état

---

## 📋 COMMANDES À EXÉCUTER DANS L'ORDRE

### ÉTAPE 1 : DIAGNOSTIC INITIAL (1 min)
```bash
# Afficher l'état actuel du projet
echo "🔍 === DIAGNOSTIC INITIAL ==="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Next.js version: $(npx next --version)"
echo ""

# Vérifier les branches git
git status --short

# Compter les fichiers et lignes de code
echo "📊 Statistiques du projet:"
find src -name "*.tsx" -o -name "*.ts" | wc -l | xargs echo "Fichiers TypeScript:"
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l | tail -1
echo ""
```

### ÉTAPE 2 : NETTOYAGE (30 sec)
```bash
echo "🧹 === NETTOYAGE ==="

# Nettoyer les caches
rm -rf .next
rm -rf node_modules/.cache
rm -rf *.log
rm -rf npm-debug.log*
rm -rf yarn-error.log*

# Nettoyer les fichiers de backup
find . -name "*.bak" -type f -delete

echo "✅ Caches nettoyés"
echo ""
```

### ÉTAPE 3 : MISE À JOUR DES DÉPENDANCES (2 min)
```bash
echo "📦 === MISE À JOUR DÉPENDANCES ==="

# Vérifier les dépendances obsolètes
npm outdated

# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités automatiquement
npm audit fix

# Installer les dépendances manquantes
npm install

echo "✅ Dépendances vérifiées"
echo ""
```

### ÉTAPE 4 : CORRECTION AUTOMATIQUE DU CODE (2 min)
```bash
echo "🔨 === CORRECTIONS AUTOMATIQUES ==="

# 1. ESLint - Corriger les erreurs de lint
echo "→ Correction ESLint..."
npx eslint . --fix --ext .js,.jsx,.ts,.tsx || true

# 2. Prettier - Formater le code
echo "→ Formatage Prettier..."
npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}" || true

# 3. Corriger les imports non utilisés
echo "→ Nettoyage des imports..."
npx eslint . --fix --rule 'no-unused-vars: error' || true

echo "✅ Corrections automatiques appliquées"
echo ""
```

### ÉTAPE 5 : VÉRIFICATION TYPESCRIPT (1 min)
```bash
echo "📝 === VÉRIFICATION TYPESCRIPT ==="

# Vérifier les erreurs TypeScript
npx tsc --noEmit --pretty 2>&1 | tee typescript-errors.log

# Compter les erreurs
ERROR_COUNT=$(grep -c "error TS" typescript-errors.log 2>/dev/null || echo "0")
echo ""
echo "⚠️  Nombre d'erreurs TypeScript: $ERROR_COUNT"

# Si erreurs, afficher les 5 premières
if [ "$ERROR_COUNT" -gt "0" ]; then
  echo "Premières erreurs:"
  head -20 typescript-errors.log
fi

echo ""
```

### ÉTAPE 6 : TEST DE BUILD (3 min)
```bash
echo "🏗️ === TEST DE BUILD ==="

# Tenter un build
npm run build 2>&1 | tee build.log

# Vérifier si le build a réussi
if [ $? -eq 0 ]; then
  echo "✅ Build réussi!"
  
  # Afficher la taille du bundle
  echo ""
  echo "📊 Taille du bundle:"
  du -sh .next/static
else
  echo "❌ Build échoué - Voir build.log pour les détails"
  echo ""
  echo "Premières erreurs:"
  grep -A 5 "Error:" build.log | head -20
fi

echo ""
```

### ÉTAPE 7 : ANALYSE DE QUALITÉ (1 min)
```bash
echo "📈 === ANALYSE DE QUALITÉ ==="

# Chercher les TODOs et FIXMEs
echo "📌 TODOs et FIXMEs:"
grep -r "TODO\|FIXME" --include="*.tsx" --include="*.ts" src/ | wc -l | xargs echo "Total:"
grep -r "TODO\|FIXME" --include="*.tsx" --include="*.ts" src/ | head -5

# Chercher les console.log
echo ""
echo "🔍 Console.logs trouvés:"
grep -r "console.log" --include="*.tsx" --include="*.ts" src/ | wc -l | xargs echo "Total:"

# Chercher les any TypeScript
echo ""
echo "⚠️  Types 'any' trouvés:"
grep -r ": any" --include="*.tsx" --include="*.ts" src/ | wc -l | xargs echo "Total:"

echo ""
```

### ÉTAPE 8 : VÉRIFICATION DES ASSETS (30 sec)
```bash
echo "🖼️ === VÉRIFICATION ASSETS ==="

# Vérifier les fichiers importants
FILES_TO_CHECK=(
  "public/favicon.ico"
  "public/logo.png"
  "public/sw.js"
  "src/app/manifest.ts"
  "src/app/robots.ts"
  "src/app/sitemap.ts"
  ".env.local"
)

for file in "${FILES_TO_CHECK[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file MANQUANT"
  fi
done

echo ""
```

### ÉTAPE 9 : CORRECTIONS SPÉCIFIQUES AU PROJET (1 min)
```bash
echo "🎯 === CORRECTIONS SPÉCIFIQUES NDB ==="

# 1. Corriger les className dupliqués
echo "→ Correction des className dupliqués..."
find src -type f \( -name "*.tsx" -o -name "*.jsx" \) -exec sed -i.bak -E 's/className="([^"]+)"\s+className="([^"]+)"/className="\1 \2"/g' {} \;

# 2. Corriger les variants incorrects
echo "→ Correction des variants Badge/Button..."
find src -type f -name "*.tsx" -exec sed -i.bak \
  -e 's/variant="primary"/variant="default"/g' \
  -e 's/variant="success"/variant="default"/g' \
  -e 's/variant="warning"/variant="default"/g' \
  -e 's/variant="danger"/variant="destructive"/g' \
  -e 's/size="md"/size="default"/g' {} \;

# 3. Nettoyer les fichiers de backup
find . -name "*.bak" -type f -delete

echo "✅ Corrections spécifiques appliquées"
echo ""
```

### ÉTAPE 10 : RAPPORT FINAL (30 sec)
```bash
echo "📊 === RAPPORT FINAL ==="
echo "========================="

# Résumé des problèmes
echo ""
echo "RÉSUMÉ DES PROBLÈMES:"

# TypeScript
TS_ERRORS=$(grep -c "error TS" typescript-errors.log 2>/dev/null || echo "0")
if [ "$TS_ERRORS" -eq "0" ]; then
  echo "✅ TypeScript: OK"
else
  echo "❌ TypeScript: $TS_ERRORS erreurs"
fi

# Build
if [ -f ".next/BUILD_ID" ]; then
  echo "✅ Build: Réussi"
else
  echo "❌ Build: Échoué"
fi

# Assets
MISSING_ASSETS=$(grep -c "MANQUANT" <<< "$(
  for file in "public/favicon.ico" "public/logo.png"; do
    [ ! -f "$file" ] && echo "MANQUANT"
  done
)" 2>/dev/null || echo "0")

if [ "$MISSING_ASSETS" -eq "0" ]; then
  echo "✅ Assets: Complets"
else
  echo "⚠️  Assets: $MISSING_ASSETS fichiers manquants"
fi

# Performance
if [ -d ".next" ]; then
  BUNDLE_SIZE=$(du -sh .next/static 2>/dev/null | cut -f1)
  echo "📦 Bundle: $BUNDLE_SIZE"
fi

echo ""
echo "========================="
echo "🏁 Vérification terminée!"
echo ""

# Nettoyer les fichiers temporaires
rm -f typescript-errors.log build.log

# Suggestion d'actions
if [ "$TS_ERRORS" -gt "0" ] || [ ! -f ".next/BUILD_ID" ]; then
  echo "⚠️  ACTIONS REQUISES:"
  [ "$TS_ERRORS" -gt "0" ] && echo "  - Corriger les erreurs TypeScript"
  [ ! -f ".next/BUILD_ID" ] && echo "  - Résoudre les erreurs de build"
  echo ""
  echo "Exécuter: npm run dev pour voir les erreurs en détail"
else
  echo "✅ Le projet est en bon état!"
  echo "Prêt pour: npm run dev ou npm run build"
fi
```

---

## 🚀 SCRIPT TOUT-EN-UN

### Créer le fichier `health-check.sh` :
```bash
#!/bin/bash

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🏥 HEALTH CHECK - NDB NUISIBLES${NC}"
echo "======================================"
echo ""

# Fonction pour afficher les étapes
step() {
  echo -e "${YELLOW}→ $1${NC}"
}

# Fonction pour les succès
success() {
  echo -e "${GREEN}✅ $1${NC}"
}

# Fonction pour les erreurs
error() {
  echo -e "${RED}❌ $1${NC}"
}

# DÉBUT DU HEALTH CHECK
step "Nettoyage des caches..."
rm -rf .next node_modules/.cache *.log

step "Vérification des dépendances..."
npm install --silent

step "Correction automatique du code..."
npx eslint . --fix --quiet 2>/dev/null
npx prettier --write . --log-level silent 2>/dev/null

step "Vérification TypeScript..."
TS_OUTPUT=$(npx tsc --noEmit 2>&1)
TS_ERRORS=$(echo "$TS_OUTPUT" | grep -c "error TS" || echo "0")

if [ "$TS_ERRORS" -eq "0" ]; then
  success "TypeScript OK"
else
  error "TypeScript: $TS_ERRORS erreurs"
fi

step "Test de build..."
if npm run build > /dev/null 2>&1; then
  success "Build réussi"
  READY=true
else
  error "Build échoué"
  READY=false
fi

echo ""
echo "======================================"
if [ "$READY" = true ]; then
  echo -e "${GREEN}✅ PROJET SAIN - Prêt pour production!${NC}"
else
  echo -e "${RED}⚠️  CORRECTIONS NÉCESSAIRES${NC}"
  echo "Exécuter: npm run build pour voir les erreurs"
fi
```

### Installation du script :
```bash
# Créer le script
nano health-check.sh
# Coller le contenu

# Rendre exécutable
chmod +x health-check.sh

# Ajouter au package.json
npm set-script health "bash health-check.sh"

# Utilisation
npm run health
```

---

## 📌 COMMANDE RAPIDE À RETENIR

### Pour une vérification complète rapide :
```bash
npx eslint . --fix && npx prettier --write . && npm run build
```

### Pour un diagnostic complet :
```bash
./health-check.sh
```

---

## 🎯 UTILISATION RECOMMANDÉE

- **Tous les jours** : `npm run build` (vérification rapide)
- **2 fois/semaine** : `npm run health` (check complet)
- **Avant déploiement** : Exécuter toutes les étapes manuellement
- **Après gros changements** : Script complet + tests manuels

Ce script te donnera un état de santé complet du projet et corrigera automatiquement ce qui peut l'être!