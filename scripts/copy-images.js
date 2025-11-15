import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../../photos');
const destDir = join(__dirname, '../public/coffee_shops/kaviaren_pod_vrbou/photos');

function copyRecursive(src, dest) {
  try {
    mkdirSync(dest, { recursive: true });
    const entries = readdirSync(src);

    for (const entry of entries) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      const stat = statSync(srcPath);

      if (stat.isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
        console.log(`Copied: ${entry}`);
      }
    }
  } catch (error) {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }
}

console.log('Copying images...');
copyRecursive(sourceDir, destDir);
console.log('Images copied successfully!');

