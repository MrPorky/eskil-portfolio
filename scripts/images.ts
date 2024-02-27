import sharp from 'sharp';
import { readdir } from 'fs';

readdir('./static/images', async (err, files) => {
	console.log(files);

	const image = sharp('./static/images/profilbild.jpg');
	const metadata = await image.metadata();
	const width = metadata.width;

	if (width == undefined) {
		throw new Error('Width is undefined');
	}

	await image.resize({ width: 20 }).toFile('./static/images/responsive/profilbild-20.jpg');
	await image.resize({ width: 400 }).toFile('./static/images/responsive/profilbild-400.jpg');
	await image.resize({ width: 800 }).toFile('./static/images/responsive/profilbild-800.jpg');
	await image.resize({ width: 1200 }).toFile('./static/images/responsive/profilbild-1200.jpg');
});
