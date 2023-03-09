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
        customTwoPixel: '2px',
      },
 
        extend: {
          margin:{
              '6.5' : '6.5rem',
              'custom-five': '5rem',
              // '12.5' : '12.5rem',
              // '8' :'8rem', 
          },
          skew: {
            '7': '    transform: skewY(-7deg )',
            'inner-skew' :  ' transform: skew(0deg, 10deg )',

          },
          maxWidth: {
            '550': '550px',
            '400': '400px',
          },
          width: {
            '800': '50rem',
            '12.5': '12.5rem',
          },
          lineHeight: {
            '12': '120%',
            
          },
            height: {
                'custom': '50rem',
                'seven': '43.75rem',
                'report': '20rem',
                'hero': '43rem',
                
                
              },
              maxHeight: {
                'logo': '43rem',
                'card': '27.5rem',
              },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'main': '#172755',
                'pink': '#EF2A82',
                'button-color': '#8794BA',
                'card-bg': '#0F1F4B',
                'body': '#F8F9FF',
              },
              backgroundImage: {
                'hero': "url('/resources/img/main-screen.png')",
                'reports' : "url('/resources/img/chart.jpg')",
              },
              padding: {
                '80': '80px',
                '3.5': '3.5rem',

                
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


