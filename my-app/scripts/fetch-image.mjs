import sharp from 'sharp';
import { existsSync, mkdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const [,, url, outputName, widthStr = '1200', format = 'webp'] = process.argv;

if (!url || !outputName) {
  console.error('Usage: node scripts/fetch-image.mjs <url> <output-name> [width] [format]');
  console.error('Example: node scripts/fetch-image.mjs https://... espresso-bar 1200 webp');
  process.exit(1);
}

const width = parseInt(widthStr, 10);
if (isNaN(width) || width <= 0) {
  console.error(`Invalid width: "${widthStr}". Must be a positive integer.`);
  process.exit(1);
}

const outputDir = join(__dirname, '..', 'public', 'images');
const outputFile = join(outputDir, `${outputName}.${format}`);

if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

if (existsSync(outputFile)) {
  console.warn(`Warning: ${outputFile} already exists and will be overwritten.`);
}

console.log(`Downloading: ${url}`);
const response = await fetch(url);
if (!response.ok) {
  console.error(`Failed to fetch image: ${response.status} ${response.statusText}`);
  process.exit(1);
}
const buffer = Buffer.from(await response.arrayBuffer());
console.log(`Downloaded: ${(buffer.length / 1024).toFixed(1)} KB`);

let pipeline = sharp(buffer).resize(width, null, {
  withoutEnlargement: true,
  fit: 'inside',
});

if (format === 'webp') {
  pipeline = pipeline.webp({ quality: 85 });
} else if (format === 'avif') {
  pipeline = pipeline.avif({ quality: 60 });
} else if (format === 'jpg' || format === 'jpeg') {
  pipeline = pipeline.jpeg({ quality: 85, progressive: true });
} else if (format === 'png') {
  pipeline = pipeline.png({ compressionLevel: 8 });
} else {
  console.error(`Unsupported format: "${format}". Use webp, avif, jpg, or png.`);
  process.exit(1);
}

await pipeline.toFile(outputFile);
const stats = statSync(outputFile);

console.log(`\nSaved: public/images/${outputName}.${format}`);
console.log(`Output size: ${(stats.size / 1024).toFixed(1)} KB`);
console.log(`Reference path: '/images/${outputName}.${format}'`);
