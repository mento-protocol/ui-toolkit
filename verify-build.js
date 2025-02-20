import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const EXPECTED_FILES = [
  'dist/index.mjs',
  'dist/index.mjs.map',
  'dist/index.cjs',
  'dist/index.cjs.map',
  'dist/index.d.ts',
  'dist/styles/index.css',
  'dist/configs/index.mjs',
  'dist/configs/index.cjs',
  'dist/configs/index.d.ts',
  'dist/configs/package.json'
];

async function verifyBuild() {
  console.log('🔍 Verifying build output...\n');
  
  let hasErrors = false;
  
  // Check for expected files
  for (const file of EXPECTED_FILES) {
    try {
      await fs.access(path.join(__dirname, file));
      console.log(`✅ Found ${file}`);
    } catch (error) {
      console.error(`❌ Missing ${file}`);
      hasErrors = true;
    }
  }
  
  // Verify package.json exports
  const pkg = JSON.parse(
    await fs.readFile(path.join(__dirname, 'package.json'), 'utf8')
  );
  
  console.log('\n📦 Verifying package.json configuration...');
  
  // Check main exports
  const mainExports = pkg.exports['.'];
  if (!mainExports?.import?.endsWith('.mjs')) {
    console.error('❌ Main import should end with .mjs');
    hasErrors = true;
  }
  if (!mainExports?.require?.endsWith('.cjs')) {
    console.error('❌ Main require should end with .cjs');
    hasErrors = true;
  }
  if (!mainExports?.types?.endsWith('.d.ts')) {
    console.error('❌ Types export should end with .d.ts');
    hasErrors = true;
  }
  
  if (hasErrors) {
    console.error('\n❌ Verification failed. Please fix the issues above.');
    process.exit(1);
  } else {
    console.log('\n✅ Build verification passed!');
  }
}

verifyBuild().catch(error => {
  console.error('Error during verification:', error);
  process.exit(1);
}); 