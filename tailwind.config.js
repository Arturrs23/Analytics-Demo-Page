const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            height: {
                'custom': '50rem',
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'main': '#172755',
                'pink': '#EF2A82',
              },
              backgroundImage: {
                'hero': "url('./resources/img/main-screen.png')",
                // 'footer-texture': "url('/img/footer-texture.png')",
              },
        },
        clipPath: {
            'mypolygon':"polygon(0 0,100% 0%,100% 80%,0 100%);",
        },
    },


    plugins: [
        require('tailwind-clip-path'),
        [require('@tailwindcss/forms')],
      ],
    };


