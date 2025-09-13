const fs = require('fs');
const path = require('path');

// Files to fix
const files = [
  'src/components/sections/ProcessusIntervention.tsx',
  'src/components/sections/Tarifs.tsx',
  'src/components/sections/VeloCargo.tsx',
  'src/components/sections/Hero.tsx',
  'src/app/qui-sommes-nous/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove size attribute from Badge components
    content = content.replace(/(<Badge[^>]*)\ssize="[^"]*"/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${file}`);
  } else {
    console.log(`⚠️ File not found: ${file}`);
  }
});

console.log('\n✨ All Badge size attributes removed!');