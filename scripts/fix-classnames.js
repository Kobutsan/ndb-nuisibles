const fs = require('fs');
const path = require('path');

// Fichiers à corriger
const filesToFix = [
  'src/app/devis/confirmation/page.tsx',
  'src/app/devis/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/tarifs/page.tsx',
  'src/app/services/professionnels/page.tsx',
  'src/app/services/punaises-de-lit/page.tsx',
  'src/app/services/deratisation/page.tsx',
  'src/components/sections/CTASection.tsx',
  'src/components/sections/VeloCargo.tsx',
  'src/components/sections/Tarifs.tsx',
  'src/components/sections/ServicesGrid.tsx',
  'src/components/forms/DevisForm.tsx',
  'src/components/layout/Header.tsx',
  'src/components/integrations/GoogleReviews.tsx'
];

function fixDuplicateClassNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern pour détecter les className dupliqués
    const pattern = /className="([^"]+)"\s+className="([^"]+)"/g;
    
    // Remplacer tous les className dupliqués
    const newContent = content.replace(pattern, (match, class1, class2) => {
      modified = true;
      return `className="${class1} ${class2}"`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Correction des className dupliqués...\n');

let totalFixed = 0;
filesToFix.forEach(file => {
  if (fixDuplicateClassNames(file)) {
    totalFixed++;
  }
});

console.log(`\n✨ Terminé! ${totalFixed} fichiers corrigés.`);