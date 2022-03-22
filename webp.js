import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
	await imagemin(['dist/img/*.{jpg,png,gif}'], {
		destination: 'dist/build/img',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();