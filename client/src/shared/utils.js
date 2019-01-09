export const textBackgroundImgStyle = (url) => {
	return{
		backgroundImage: `url(${url})`,
		backgroundClip: 'text',
		color: 'transparent',
		WebkitBackgroundClip: 'text',
		
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}
};

export const getWindowHeight = () => {
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return windowHeight;
}

export const lurkerFace = () => {
	return '──────────────────────────────────\n' +
		'─────────▄▄───────────────────▄▄──\n' +
		'──────────▀█───────────────────▀█─\n' +
		'──────────▄█───────────────────▄█─\n' +
		'──█████████▀───────────█████████▀─\n' +
		'───▄██████▄─────────────▄██████▄──\n' +
		'─▄██▀────▀██▄─────────▄██▀────▀██▄\n' +
		'─██────────██─────────██────────██\n' +
		'─██───██───██─────────██───██───██\n' +
		'─██────────██─────────██────────██\n' +
		'──██▄────▄██───────────██▄────▄██─\n' +
		'───▀██████▀─────────────▀██████▀──\n' +
		'──────────────────────────────────\n' +
		'──────────────────────────────────\n' +
		'──────────────────────────────────\n' +
		'───────────█████████████──────────\n' +
		'──────────────────────────────────\n' +
		'──────────────────────────────────\n'
};