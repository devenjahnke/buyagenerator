const mix = require('laravel-mix');
require('mix-tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// General Configuration
mix.js('resources/js/app.js', 'public/js')
    .extract()
    .sass('resources/css/app.scss', 'public/css')
    .tailwind('./tailwind.config.js')
    .webpackConfig(require('./webpack.config'));

// Development Configuration
if (!mix.inProduction()) {
    mix.browserSync({
        proxy: "localhost",
        notify: false,
        open: false,
    });
}
// Production Configuration
else {
    mix.minify([
        'public/js/app.js',
        'public/js/vendor.js',
        'public/js/manifest.js',
        'public/css/app.css',
    ])
        .version();
}
