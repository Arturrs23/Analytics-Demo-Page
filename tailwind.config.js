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
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '20': '20px',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
 
        extend: {
          maxWidth: {
            '550': '550px',
          },
          width: {
            '800': '50rem',
          },
          lineHeight: {
            '12': '120%',
            
          },
            height: {
                'custom': '50rem',
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'main': '#172755',
                'pink': '#EF2A82',
                'button-color': '#8794BA',
              },
              backgroundImage: {
                'hero': "url('/resources/img/main-screen.png')",
                'reports' : "url('/resources/img/screen-01.png')",
              },
              padding: {
                '80': '80px',

                
              }
        },
        clipPath: {
            'mypolygon':"polygon(0 0,100% 0%,100% 100%,0 100%);",
        },
        container: {
          // default breakpoints but with 40px removed
          screens: {
            // sm: '600px',
            // md: '728px',
            // lg: '984px',
            // xl: '1240px',
            '2xl': '1600px',
          },
        },
    },


    plugins: [
        require('tailwind-clip-path'),
        [require('@tailwindcss/forms')],

      ],
    };


