const mix = require('laravel-mix');

const MixGlob = require('laravel-mix-glob');
const mixGlob = new MixGlob({mix});
mixGlob
    .sass('templates/**/*.scss', 'public/css')
    .js('templates/**/*.ts', 'public/js');

mix.postCss("public/css/app.css", "public/css", [
	require("tailwindcss"),
]);