const fs = require('fs');
const path = require('path');

function aggressivePatch() {
  const webpackPath = path.join(
    __dirname,
    'node_modules',
    '@docusaurus',
    'core',
    'lib',
    'commands',
    'start',
    'webpack.js'
  );

  if (!fs.existsSync(webpackPath)) {
    console.log('❌ File not found:', webpackPath);
    return;
  }

  console.log(`🔧 Patching: ${webpackPath}`);
  
  let content = fs.readFileSync(webpackPath, 'utf8');
  const original = content;

  content = content.replace(
    /new\s+webpack\.ProgressPlugin\s*\([^)]+\)/g,
    'new webpack.ProgressPlugin({})'
  );

  if (content === original) {
    content = content.replace(/,\s*new\s+webpack\.ProgressPlugin\s*\([^)]+\)/g, '');
  }
  if (content === original) {
    content = content.replace(/new\s+webpack\.ProgressPlugin\s*\([^)]+\),?\s*/g, '');
  }
  
  if (content === original) {
    content = content.replace(
      /(ProgressPlugin)/g,
      '// DISABLED: $1'
    );
    console.log('⚠️ Commented out ProgressPlugin references');
  }

  if (content !== original) {
    fs.writeFileSync(webpackPath, content, 'utf8');
    console.log('✅ File patched successfully!');

    const diff = original.split('\n').filter((line, i) => 
      original.split('\n')[i] !== content.split('\n')[i]
    ).slice(0, 5);
    if (diff.length > 0) {
      console.log('📝 Changed lines:');
      diff.forEach(l => console.log('   ', l.substring(0, 100)));
    }
  } else {
    console.log('⚠️ No changes made - trying to show ProgressPlugin context:');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (line.toLowerCase().includes('progressplugin')) {
        console.log(`   Line ${i + 1}: ${line.trim()}`);
      }
    });
  }
}

aggressivePatch();
module.exports = {};