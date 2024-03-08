import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeTo = async (fromPath: string, toPath: string, targetWidth: number) => {
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
		const tmpFile = `./static/tmp/${new Date().getTime()}${ext}`;

		await sharp(fromPath).resize({ width: resizedWidth }).toFile(tmpFile);
		await resizeTo(tmpFile, toPath, targetWidth);
	}
};

await fs.mkdirSync('./static/tmp', { recursive: true });
await resizeTo('./static/profilbild.jpg', './static/optimized/profilbild.webp', 400);

await resizeTo('./static/yara/1.png', './static/optimized/yara/1.webp', 300);
await resizeTo('./static/yara/2.jpeg', './static/optimized/yara/2.webp', 400);

await resizeTo('./static/volvo/1.avif', './static/optimized/volvo/1.webp', 400);
await resizeTo('./static/volvo/2.avif', './static/optimized/volvo/2.webp', 400);

await resizeTo('./static/osstell/1.jpg', './static/optimized/osstell/1.webp', 350);
await resizeTo('./static/osstell/2.png', './static/optimized/osstell/2.webp', 400);

await resizeTo('./static/guardtools/1.webp', './static/optimized/guardtools/1.webp', 400);
await resizeTo('./static/guardtools/2.webp', './static/optimized/guardtools/2.webp', 400);

await resizeTo('./static/happy faces/logo.png', './static/optimized/happy faces/logo.webp', 250);

await resizeTo('./static/grafokett/logo.png', './static/optimized/grafokett/logo.webp', 250);
await resizeTo('./static/grafokett/1.png', './static/optimized/grafokett/1.webp', 400);
await resizeTo('./static/grafokett/2.jpg', './static/optimized/grafokett/2.webp', 400);

sharp.cache(false);
await fs.rmSync('./static/tmp', { recursive: true, force: true });
