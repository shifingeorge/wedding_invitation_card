module.exports = () => {
	// Try to load Tailwind and Autoprefixer if available; fall back to no plugins.
	const plugins = [];

	try {
		// prefer installed packages
		plugins.push(require('tailwindcss'));
		plugins.push(require('autoprefixer'));
	} catch (err) {
		// If tailwindcss or autoprefixer is not installed, avoid throwing and continue.
		// Vite/PostCSS will still process plain CSS. Install Tailwind to enable @tailwind rules.
		// Optional: log a warning during dev to make absence visible.
		/* eslint-disable no-console */
		console.warn('[postcss] tailwindcss and/or autoprefixer not found — continuing without them.');
	}

	return { plugins };
}
