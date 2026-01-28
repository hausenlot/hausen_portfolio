/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                surface: '#333333',
                accentSurface: '#5b5b5b',
                primaryText: '#E0E0E0',
                secondaryText: '#B3B3B3',
                tertiaryText: '#8A8A8A',
                accent: '#007e72',
                border: '#3C3C3C',
                error: '#CF6679',
                success: '#03DAC5',
            },
            fontFamily: {
                sans: ['REM', 'sans-serif'],
            },
            spacing: {
                '26': '6.5rem',
                '64': '16rem',
                '72': '18rem',
                '80': '20rem',
                '96': '24rem',
                '128': '32rem',
                '100': '25rem',
                '120': '30rem',
                '144': '36rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem',
                '256': '64rem',
            },
        },
    },
    plugins: [],
}
