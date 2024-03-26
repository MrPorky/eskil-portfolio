import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeTo = async (
  fromPath: string,
  toPath: string,
  targetWidth: number
) => {
  const dir = path.dirname(toPath);
  await fs.mkdirSync(dir, { recursive: true });

  const { width: originalWidth } = await sharp(fromPath).metadata();

  if (!originalWidth) {
    throw new Error(`No width found for ${fromPath}`);
  }

  const width = Math.max(originalWidth, targetWidth);
  const resizedWidth = Math.min(targetWidth, Math.ceil(originalWidth * 1.1));

  if (resizedWidth === width) {
    await sharp(fromPath).resize({ width }).toFile(toPath);
  } else {
    const ext = path.extname(fromPath);
    const tmpFile = `./images/tmp/${new Date().getTime()}${ext}`;

    await sharp(fromPath).resize({ width: resizedWidth }).toFile(tmpFile);
    await resizeTo(tmpFile, toPath, targetWidth);
  }
};

await fs.mkdirSync('./images/tmp', { recursive: true });
await resizeTo(
  './images/profilbild.jpg',
  './src/assets/images/profilbild.webp',
  400
);

await resizeTo('./images/yara/1.png', './src/assets/images/yara/1.webp', 300);
await resizeTo('./images/yara/2.jpeg', './src/assets/images/yara/2.webp', 400);

await resizeTo(
  './images/volvo/1.avif',
  './src/assets/images/volvo/1.webp',
  400
);
await resizeTo(
  './images/volvo/2.avif',
  './src/assets/images/volvo/2.webp',
  400
);

await resizeTo(
  './images/osstell/1.jpg',
  './src/assets/images/osstell/1.webp',
  350
);
await resizeTo(
  './images/osstell/2.png',
  './src/assets/images/osstell/2.webp',
  400
);

await resizeTo(
  './images/guardtools/1.webp',
  './src/assets/images/guardtools/1.webp',
  400
);
await resizeTo(
  './images/guardtools/2.webp',
  './src/assets/images/guardtools/2.webp',
  400
);

await resizeTo(
  './images/happy faces/logo.png',
  './src/assets/images/happy faces/logo.webp',
  250
);

await resizeTo(
  './images/grafokett/logo.png',
  './src/assets/images/grafokett/logo.webp',
  250
);
await resizeTo(
  './images/grafokett/1.png',
  './src/assets/images/grafokett/1.webp',
  400
);
await resizeTo(
  './images/grafokett/2.jpg',
  './src/assets/images/grafokett/2.webp',
  400
);

await resizeTo(
  './images/studio ekberg/logo.png',
  './src/assets/images/studio ekberg/logo.webp',
  250
);

await resizeTo(
  './images/emerson/1.jpg',
  './src/assets/images/emerson/1.webp',
  250
);
await resizeTo(
  './images/emerson/2.jpg',
  './src/assets/images/emerson/2.webp',
  250
);

await resizeTo(
  './images/ericsson/1.jpg',
  './src/assets/images/ericsson/1.webp',
  250
);
await resizeTo(
  './images/ericsson/2.jpg',
  './src/assets/images/ericsson/2.webp',
  250
);

await resizeTo(
  './images/happy faces/1.jpg',
  './src/assets/images/happy faces/1.webp',
  250
);
await resizeTo(
  './images/happy faces/2.jpg',
  './src/assets/images/happy faces/2.webp',
  250
);

await resizeTo(
  './images/aareon/1.png',
  './src/assets/images/aareon/1.webp',
  250
);
await resizeTo(
  './images/aareon/2.jpg',
  './src/assets/images/aareon/2.webp',
  250
);

sharp.cache(false);
await fs.rmSync('./images/tmp', { recursive: true, force: true });
