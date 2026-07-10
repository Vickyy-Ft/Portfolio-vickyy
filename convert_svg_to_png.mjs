import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets/tech';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.svg')) {
    const name = path.basename(file, '.svg');
    sharp(path.join(dir, file))
      .resize(256, 256, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(dir, `${name}.png`))
      .then(() => console.log(`Converted ${file} to ${name}.png`))
      .catch(err => console.error(`Failed to convert ${file}:`, err));
  }
}
