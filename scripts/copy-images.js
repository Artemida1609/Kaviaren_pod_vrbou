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
    let copiedCount = 0;

    for (const entry of entries) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      const stat = statSync(srcPath);

      if (stat.isDirectory()) {
        const subCopied = copyRecursive(srcPath, destPath);
        copiedCount += subCopied;
      } else {
        copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    }
    return copiedCount;
  } catch (error) {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }
}

try {
  const count = copyRecursive(sourceDir, destDir);
  if (count > 0) {
    console.log(`✓ Copied ${count} image(s) to public folder`);
  }
} catch (error) {
  // If source directory doesn't exist, that's okay - images might already be in public
  if (error.code !== 'ENOENT') {
    console.error('Error copying images:', error.message);
    process.exit(1);
  }
}

