/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'index.html',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                darkestblue: '#161722',
                darkblue: '#25273c',
                lightblue: '#cacde8',
                lightestblue: '#e4e5f1',
                lightergrayblue: '#777a92',
                grayblue: '#4d5066',
                darkergrayblue: '#393a4c',

                lightgray: '#fafafa',
            },
        },
    },
    plugins: [],
}
