const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all tsx files
const files = glob.sync('src/**/*.tsx', { cwd: process.cwd() });

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed SVG paths (p tags instead of path)
  const malformedPattern = /<p\s+className="text-foreground"ath\s+/g;
  if (malformedPattern.test(content)) {
    content = content.replace(/<p\s+className="text-foreground"ath\s+/g, '<path ');
    modified = true;
  }
  
  // Also fix closing tags
  if (content.includes('</p>') && content.includes('<svg')) {
    // Only replace </p> tags that are inside SVG elements
    const lines = content.split('\n');
    let inSvg = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('<svg')) inSvg = true;
      if (lines[i].includes('</svg>')) inSvg = false;
      if (inSvg && lines[i].includes('<p ') && lines[i].includes('ath ')) {
        lines[i] = lines[i].replace(/<p\s+className="text-foreground"ath\s+/g, '<path ');
        modified = true;
      }
    }
    if (modified) {
      content = lines.join('\n');
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log('\n✨ All SVG path elements fixed!');