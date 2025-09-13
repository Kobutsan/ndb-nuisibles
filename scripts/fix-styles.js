const fs = require('fs');
const path = require('path');

// Liste des fichiers à vérifier
const directories = [
  'src/app',
  'src/components',
  'app'
];

// Patterns à corriger
const fixes = [
  // Texte blanc sur fond blanc
  { 
    pattern: /text-white(?!\s+bg-)/g,
    replacement: 'text-foreground'
  },
  // Boutons trop petits
  {
    pattern: /className="([^"]*\b)button\b([^"]*)"(?![^>]*min-h)/g,
    replacement: 'className="$1button$2 min-h-[44px]"'
  },
  // Espacements manquants
  {
    pattern: /<section(?![^>]*className)/g,
    replacement: '<section className="py-12 md:py-20"'
  },
  // Conteneurs sans padding
  {
    pattern: /className="container(?![^"]*px-)/g,
    replacement: 'className="container px-4'
  },
  // Textes sans couleur définie
  {
    pattern: /<p(?![^>]*text-)/g,
    replacement: '<p className="text-foreground"'
  },
  {
    pattern: /<h([1-6])(?![^>]*text-)/g,
    replacement: '<h$1 className="text-foreground"'
  },
  // Cards sans fond
  {
    pattern: /className="([^"]*\b)card\b([^"]*)"(?![^>]*bg-)/g,
    replacement: 'className="$1card bg-card$2"'
  },
  // Fix leftIcon dans Button
  {
    pattern: /leftIcon={([^}]+)}/g,
    replacement: ''
  },
  // Fix rightIcon dans Button
  {
    pattern: /rightIcon={([^}]+)}/g,
    replacement: ''
  }
];

function fixFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  fixes.forEach(fix => {
    const newContent = content.replace(fix.pattern, fix.replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  });
  
  // Fix spécifique pour les imports de composants UI avec majuscules
  const uiImportFixes = [
    { from: '@/components/ui/Button', to: '@/components/ui/button' },
    { from: '@/components/ui/Badge', to: '@/components/ui/badge' },
    { from: '@/components/ui/Card', to: '@/components/ui/card' },
  ];
  
  uiImportFixes.forEach(fix => {
    if (content.includes(fix.from)) {
      content = content.replace(new RegExp(fix.from, 'g'), fix.to);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (stat.isFile()) {
      fixFile(filePath);
    }
  });
}

console.log('🔧 Correction des styles en cours...\n');

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  }
});

console.log('\n✨ Correction terminée !');