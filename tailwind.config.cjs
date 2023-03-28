/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html"
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Josefin Sans', 'sans-serif'],
        },
        letterSpacing: {
            widest: '.5em',
        },
        extend: {
            colors: {
                primary: '#3a7bfd',
                brightblue: '#57ddff',
                purple: '#c058f3',

                darkestblue: '#161722',
                darkblue: '#25273c',
                lightblue: '#cacde8',
                lightestblue: '#e4e5f1',
                lightergrayblue: '#777a92',
                grayblue: '#4d5066',
                darkergrayblue: '#393a4c',

                light_lightgray: '#fafafa',
                light_lightestgrayblue: '#e4e5f1',
                light_lightergrayblue: '#d2d3db',
                light_grayblue: '#9394a5',
                light_darkergrayblue: '#484b6a',

            },
        },
    },
    plugins: [],
}
