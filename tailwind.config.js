const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans],
                plex: ['var(--font-plex-sans)', ...fontFamily.sans]
            }
        },
        screens: {
            '120px': '120px',
            '279px': '279px',
            '280px': '280px',
            '360px': '360px',
            '375px': '375px',
            '390px': '390px',
            '412px': '412px',
            '414px': '414px',
            '512px': '512px',
            '768px': '768px',
            '820px': '820px',
            '912px': '912px',
            '1024px': '1024px',
        },
    },
    plugins: [],
};
