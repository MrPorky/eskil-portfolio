import sharp from 'sharp';

const profilbild = sharp('./static/profilbild.jpg');

await profilbild
	.resize({ width: 400 })
	.sharpen({ sigma: 1 })
	.toFile('./static/optimized/profilbild.webp');
