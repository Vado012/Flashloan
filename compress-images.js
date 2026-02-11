import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(__dirname, 'public-backup');

// Create backup
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
  console.log('📁 Created backup folder');
}

const compressImage = async (file) => {
  const filePath = path.join(publicDir, file);
  const backupPath = path.join(backupDir, file);
  const ext = path.extname(file).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  try {
    // Backup original
    fs.copyFileSync(filePath, backupPath);

    const originalSize = fs.statSync(filePath).size;
    
    if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    } else {
      await sharp(filePath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(filePath + '.tmp');
    }

    fs.renameSync(filePath + '.tmp', filePath);
    const newSize = fs.statSync(filePath).size;
    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${file}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saved}% saved)`);
  } catch (err) {
    console.error(`❌ Error compressing ${file}:`, err.message);
  }
};

(async () => {
  const files = fs.readdirSync(publicDir);
  console.log(`🖼️  Found ${files.length} files. Compressing images...\n`);
  
  for (const file of files) {
    await compressImage(file);
  }
  
  console.log('\n✨ Compression complete! Originals backed up to public-backup/');
})();
